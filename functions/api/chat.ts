// Cloudflare Pages Function: POST /api/chat
// Provider-neutral: works with any OpenAI-compatible /chat/completions endpoint or the Anthropic Messages API.
// Secrets live only in Cloudflare (Settings > Variables and Secrets). Without them the endpoint answers
// from the knowledge base, so it is safe to deploy before a key exists.
import {
  buildSystemPrompt, detectLang, kbReply, retrieveFor, retryNote, sanitizeMessages, sourcesFor, followUpsFor, validateReply,
  type Msg, type Reply,
} from "../../lib/assistant.ts";

type KV = { get(k: string): Promise<string | null>; put(k: string, v: string, o?: { expirationTtl?: number }): Promise<void> };
export type Env = {
  LLM_BASE_URL?: string;
  LLM_MODEL?: string;
  LLM_API_KEY?: string;
  LLM_API_STYLE?: string; // "openai" (default) | "anthropic"
  LLM_REASONING_EFFORT?: string; // optional, OpenAI-style only: none | low | medium | high (e.g. "none" for Gemini 2.5 Flash)
  ALLOWED_ORIGINS?: string; // comma-separated extra origins
  RATE_KV?: KV;
};
type Deps = { fetch?: typeof fetch; now?: () => number };

const MAX_BODY = 8_000;
const RATE_LIMIT = 20; // requests
const RATE_WINDOW = 10 * 60; // seconds
const TIMEOUT_MS = 20_000;
const memory = new Map<string, { n: number; reset: number }>();

const HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" };
const json = (body: unknown, status = 200, extra: Record<string, string> = {}) => new Response(JSON.stringify(body), { status, headers: { ...HEADERS, ...extra } });

function originAllowed(request: Request, env: Env): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false; // browsers always send Origin on cross-site and same-site POST
  const own = new URL(request.url).origin;
  const list = ["https://tekbin.ir", "https://www.tekbin.ir", own, ...(env.ALLOWED_ORIGINS ?? "").split(",").map((s) => s.trim()).filter(Boolean)];
  return list.includes(origin);
}

async function limited(request: Request, env: Env, now: number): Promise<boolean> {
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const bucket = Math.floor(now / 1000 / RATE_WINDOW);
  if (env.RATE_KV) {
    const key = `rl:${ip}:${bucket}`;
    const n = Number((await env.RATE_KV.get(key)) ?? 0) + 1;
    await env.RATE_KV.put(key, String(n), { expirationTtl: RATE_WINDOW * 2 });
    return n > RATE_LIMIT;
  }
  const cur = memory.get(ip);
  if (!cur || cur.reset <= now) memory.set(ip, { n: 1, reset: now + RATE_WINDOW * 1000 });
  else cur.n += 1;
  if (memory.size > 5000) for (const [k, v] of memory) if (v.reset <= now) memory.delete(k);
  return (memory.get(ip)?.n ?? 0) > RATE_LIMIT;
}

function configured(env: Env): boolean {
  return Boolean(env.LLM_API_KEY && env.LLM_MODEL && env.LLM_BASE_URL && /^https:\/\//.test(env.LLM_BASE_URL));
}

async function callModel(env: Env, system: string, messages: Msg[], doFetch: typeof fetch): Promise<string | null> {
  const base = (env.LLM_BASE_URL as string).replace(/\/+$/, "");
  const anthropic = (env.LLM_API_STYLE ?? "").toLowerCase() === "anthropic";
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = anthropic
      ? await doFetch(`${base}/v1/messages`, {
          method: "POST",
          signal: ctl.signal,
          headers: { "content-type": "application/json", "x-api-key": env.LLM_API_KEY as string, "anthropic-version": "2023-06-01" },
          body: JSON.stringify({ model: env.LLM_MODEL, system, messages, max_tokens: 900, temperature: 0.2 }),
        })
      : await doFetch(`${base}/chat/completions`, {
          method: "POST",
          signal: ctl.signal,
          headers: { "content-type": "application/json", authorization: `Bearer ${env.LLM_API_KEY}` },
          body: JSON.stringify({ model: env.LLM_MODEL, messages: [{ role: "system", content: system }, ...messages], max_tokens: 900, temperature: 0.2, ...(env.LLM_REASONING_EFFORT ? { reasoning_effort: env.LLM_REASONING_EFFORT } : {}) }),
        });
    if (!res.ok) return null;
    const data = (await res.json()) as { choices?: { message?: { content?: unknown } }[]; content?: { type?: string; text?: unknown }[] };
    const text = anthropic ? data.content?.find((c) => c.type === "text" || typeof c.text === "string")?.text : data.choices?.[0]?.message?.content;
    return typeof text === "string" ? text.trim() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function handleChat(request: Request, env: Env, deps: Deps = {}): Promise<Response> {
  const doFetch = deps.fetch ?? fetch;
  const now = (deps.now ?? Date.now)();
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405, { allow: "POST" });
  if (!originAllowed(request, env)) return json({ error: "forbidden" }, 403);
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) return json({ error: "bad_request" }, 400);
  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: "too_large" }, 413);
  let body: unknown;
  try { body = JSON.parse(raw); } catch { return json({ error: "bad_request" }, 400); }
  const messages = sanitizeMessages((body as { messages?: unknown })?.messages);
  if (!messages) return json({ error: "bad_request" }, 400);
  if (await limited(request, env, now)) return json({ error: "rate_limited" }, 429, { "retry-after": String(RATE_WINDOW) });

  const lang = detectLang(messages[messages.length - 1].content);
  const hits = retrieveFor(messages, lang);
  const fallback = () => json(kbReply(messages, lang));
  if (!configured(env)) return fallback();

  const system = buildSystemPrompt(lang, hits);
  let convo: Msg[] = messages;
  for (let attempt = 0; attempt < 2; attempt++) {
    const text = await callModel(env, system, convo, doFetch);
    if (text === null) break; // provider error or timeout: do not retry, answer from the docs
    const check = validateReply(text, lang, hits, messages);
    if (check.ok) {
      const reply: Reply = { text, sources: sourcesFor(hits, lang), followUps: followUpsFor(hits, lang), mode: "llm", lang };
      return json(reply);
    }
    convo = [...messages, { role: "assistant", content: text.slice(0, 1200) }, { role: "user", content: retryNote(check.reasons, lang) }];
  }
  return fallback();
}

export const onRequest = (ctx: { request: Request; env: Env }) => handleChat(ctx.request, ctx.env);
