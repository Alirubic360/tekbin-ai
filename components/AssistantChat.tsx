"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MAX_INPUT, detectLang, kbReply, type Msg, type Reply } from "@/lib/assistant";
import { byId } from "@/lib/assistant-kb";
import type { AssistantDict } from "@/lib/assistant-content";

type Item = { id: number; role: "user" | "assistant"; text: string; reply?: Reply; limited?: boolean };

function Body({ text }: { text: string }) {
  return (
    <div className="space-y-2">
      {text.split("\n\n").map((para, i) => {
        const lines = para.split("\n");
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-1 ps-5">
              {lines.map((l, j) => <li key={j}>{l.slice(2)}</li>)}
            </ul>
          );
        }
        return <p key={i} className="whitespace-pre-line break-words">{para}</p>;
      })}
    </div>
  );
}

export default function AssistantChat({ t }: { t: AssistantDict }) {
  const fa = t.lang === "fa";
  const pre = fa ? "/fa" : "";
  const [items, setItems] = useState<Item[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const idRef = useRef(0);
  const endRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (items.length) endRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [items, busy]);

  const href = (h: string) => (h.startsWith("/#") ? `${pre}${h.slice(1)}` : h === "/" ? pre || "/" : `${pre}${h}`);

  async function ask(text: string) {
    const message = text.trim().slice(0, MAX_INPUT);
    if (!message || busy) return;
    const past: Msg[] = items.filter((i) => !i.limited).map((i) => ({ role: i.role, content: i.text.slice(0, MAX_INPUT) }));
    const history: Msg[] = [...past, { role: "user" as const, content: message }].slice(-6);
    while (history.length && history[0].role !== "user") history.shift();
    setItems((s) => [...s, { id: ++idRef.current, role: "user", text: message }]);
    setDraft("");
    setBusy(true);
    const ctl = new AbortController();
    abortRef.current = ctl;
    const timer = setTimeout(() => ctl.abort(), 28_000);
    let reply: Reply | null = null;
    let limited = false;
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: history }), signal: ctl.signal });
      if (res.status === 429) limited = true;
      else if (res.ok) reply = (await res.json()) as Reply;
    } catch {
      /* offline, aborted or no server: answer from the documents in the browser */
    } finally {
      clearTimeout(timer);
    }
    if (ctl.signal.aborted && abortRef.current !== ctl) return; // cleared meanwhile
    if (!reply && !limited) reply = kbReply(history, detectLang(message));
    setItems((s) => [...s, limited ? { id: ++idRef.current, role: "assistant", text: t.chat.limited, limited: true } : { id: ++idRef.current, role: "assistant", text: reply!.text, reply: reply! }]);
    setBusy(false);
  }

  function reset() {
    abortRef.current?.abort();
    abortRef.current = null;
    setItems([]);
    setDraft("");
    setBusy(false);
  }

  const last = items[items.length - 1];
  const chips = last?.reply?.followUps ?? t.suggestedIds.map((id) => ({ id, q: byId(id)!.q[t.lang] }));
  const chipsTitle = last?.reply ? t.chat.related : t.chat.suggested;

  return (
    <section className="glass-card flex flex-col p-5 md:p-6" aria-label={t.chat.title}>
      <h2 className="text-lg font-medium">{t.chat.title}</h2>
      <div className="mt-4 max-h-[60vh] min-h-[240px] flex-1 space-y-4 overflow-y-auto pe-1" role="log" aria-live="polite" aria-busy={busy}>
        {items.length === 0 && <p className="text-sm text-white/55">{t.chat.empty}</p>}
        {items.map((m) => (
          <div key={m.id} className={cn("max-w-[94%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed", m.role === "user" ? "ms-auto bg-accent/20" : "me-auto border border-white/10 bg-white/[0.04]")}>
            <p className="mb-1 text-[11px] text-white/55">{m.role === "user" ? t.chat.you : t.chat.bot}</p>
            <Body text={m.text} />
            {m.reply && (
              <div className="mt-3 space-y-1.5 border-t border-white/10 pt-2 text-xs text-white/60">
                <p>{m.reply.mode === "llm" ? t.chat.modeLlm : t.chat.modeKb}</p>
                {m.reply.sources.length > 0 && (
                  <p>
                    {t.chat.sources}:{" "}
                    {m.reply.sources.map((s, i) => (
                      <span key={s.href}>
                        {i > 0 && " · "}
                        <a href={href(s.href)} className="text-[#4da3ff] underline underline-offset-2">{s.label}</a>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
        {busy && <p className="me-auto text-sm text-white/60">{t.chat.thinking}</p>}
        <div ref={endRef} />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); void ask(draft); }} className="mt-4 flex gap-2">
        <label htmlFor="as-input" className="sr-only">{t.chat.placeholder}</label>
        <input id="as-input" value={draft} onChange={(e) => setDraft(e.target.value)} maxLength={MAX_INPUT} autoComplete="off"
          placeholder={t.chat.placeholder}
          className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
        <Button type="submit" disabled={!draft.trim() || busy}>{t.chat.send}</Button>
      </form>

      <div className="mt-4">
        <p className="mb-2 text-xs text-white/55">{chipsTitle}</p>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button key={c.id} type="button" disabled={busy} onClick={() => void ask(c.q)}
              className="rounded-full border border-white/15 px-3 py-1.5 text-start text-xs text-white/80 transition-colors hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50">
              {c.q}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs">
          <button type="button" onClick={reset} disabled={items.length === 0 && !busy} className="text-white/60 underline underline-offset-2 disabled:no-underline disabled:opacity-40">{t.chat.reset}</button>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-white/55">{t.chat.notice}</p>
      </div>
    </section>
  );
}
