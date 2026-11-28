// Lead-qualifier agent demo: the pipeline of the Tekbin real-estate agent, running in the browser.
//
// What is REAL here: the pipeline shape (validate -> dedupe -> triage -> extract -> validate output ->
// decide -> CRM write -> reply), the guardrails, idempotency and human hand-off, all deterministic code.
// What is SIMULATED: the "extract" step is a rule-based parser for three fields. In a production build the
// same slot is a language-model call whose output goes through the same validation. Nothing is sent anywhere.

export type Lang = "en" | "fa";
export type Intent = "buy" | "rent";
export type Slots = { budget: number | null; intent: Intent | null; area: string | null };
export type Outcome = "qualified" | "unqualified" | "needs_more" | "human" | "ignored" | "duplicate" | "invalid";
export type StepStatus = "ok" | "warn" | "stop" | "skip";

export type Step = { id: string; status: StepStatus; note?: string; params?: Record<string, string | number> };

export type CrmRow = { key: string; budget: number | null; intent: Intent | null; area: string | null; qualified: boolean };

export type RunResult = {
  outcome: Outcome;
  slots: Slots;
  confidence: number;
  reply: string | null;
  bookingLinkSent: boolean;
  humanDraft: string | null;
  steps: Step[];
  crmWrite: CrmRow | null;
  turns: number;
};

export type Memory = { slots: Slots; turns: number };

export const MIN_BUDGET = 300000; // qualification criterion of the demo agency (USD)
export const MAX_TURNS_BEFORE_HUMAN = 3;
export const DEMO_BOOKING_URL = "https://example.com/demo-booking"; // reserved domain: not a real calendar
export const MAX_MESSAGE = 600;

const AREAS: { id: string; names: string[] }[] = [
  { id: "North York", names: ["north york", "نورث یورک", "نورث‌یورک"] },
  { id: "Downtown", names: ["downtown", "داون تاون", "داونتاون", "داون‌تاون"] },
  { id: "Etobicoke", names: ["etobicoke", "اتوبیکو"] },
  { id: "Scarborough", names: ["scarborough", "اسکاربرو"] },
  { id: "Mississauga", names: ["mississauga", "میسیساگا"] },
  { id: "Richmond Hill", names: ["richmond hill", "ریچموند هیل"] },
  { id: "Vaughan", names: ["vaughan", "وان"] },
  { id: "Markham", names: ["markham", "مارکهام"] },
];
export const AREA_FA: Record<string, string> = {
  "North York": "نورث یورک", Downtown: "داون‌تاون", Etobicoke: "اتوبیکو", Scarborough: "اسکاربرو",
  Mississauga: "میسیساگا", "Richmond Hill": "ریچموند هیل", Vaughan: "وان", Markham: "مارکهام",
};

const DIGITS = "۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩٫٬";
const ASCII = "01234567890123456789.,";
export function normalize(text: string): string {
  let out = "";
  for (const ch of text) {
    const i = DIGITS.indexOf(ch);
    out += i >= 0 ? ASCII[i] : ch;
  }
  return out.replace(/[ي]/g, "ی").replace(/[ك]/g, "ک").replace(/‌/g, " ").toLowerCase();
}

const URL_RE = /https?:\/\/|www\.|[\w.+-]+@[\w-]+\.[\w.]+/gi;
const SPAM_RE = /(crypto giveaway|casino|loan offer|click here|ربح سريع|برنده شده|شرط بندی)/i;
const SENSITIVE_RE = /(lawsuit|\bsue\b|complaint|refund|contract|legal|lawyer|شکایت|قرارداد|وکیل|بازپرداخت|دادگاه)/i;
const INJECTION_RE = /(ignore (all |any |your )?(previous|prior|above)|system prompt|reveal (your|the) (instructions|prompt)|دستور(ات)? (قبلی|بالا)|پرامپت سیستم|نادیده بگیر)/i;

export function triage(norm: string): { spam: boolean; sensitive: boolean; injection: boolean; links: number } {
  const links = (norm.match(URL_RE) ?? []).length;
  return {
    spam: links >= 2 || SPAM_RE.test(norm),
    sensitive: SENSITIVE_RE.test(norm),
    injection: INJECTION_RE.test(norm),
    links,
  };
}

const MULT: Record<string, number> = { k: 1e3, thousand: 1e3, هزار: 1e3, m: 1e6, million: 1e6, میلیون: 1e6 };

export function extractBudget(norm: string): number | null {
  const re = /(\d+(?:\.\d+)?)\s*(thousand|million|هزار|میلیون|k|m)?(?![\w؀-ۿ])/g;
  const found: number[] = [];
  for (const m of norm.matchAll(re)) {
    const after = norm.slice(m.index + m[0].length, m.index + m[0].length + 14);
    if (/^\s*(bed|bath|br\b|بد|اتاق|خواب|sq|متر)/.test(after)) continue; // rooms / area, not money
    const value = Number(m[1]) * (m[2] ? MULT[m[2]] : 1);
    if (value >= 50000 && value <= 1e9) found.push(Math.round(value));
  }
  return found.length ? found[0] : null;
}

export function extractIntent(norm: string): Intent | null {
  const buy = /(\bbuy\b|buying|purchase|خرید|بخرم|بخریم|خریدار)/.test(norm);
  const rent = /(\brent\b|renting|\blease\b|اجاره|رهن)/.test(norm);
  return buy === rent ? null : buy ? "buy" : "rent";
}

export function extractArea(norm: string): string | null {
  for (const a of AREAS) if (a.names.some((n) => norm.includes(n))) return a.id;
  return null;
}

export function emptyMemory(): Memory {
  return { slots: { budget: null, intent: null, area: null }, turns: 0 };
}

export function confidenceOf(s: Slots): number {
  return ([s.budget, s.intent, s.area].filter((v) => v !== null).length) / 3;
}

export function missing(s: Slots): ("budget" | "intent" | "area")[] {
  return (["budget", "intent", "area"] as const).filter((k) => s[k] === null);
}

const fmtBudget = (n: number, lang: Lang) =>
  lang === "fa" ? `${new Intl.NumberFormat("fa-IR").format(n)} دلار` : `$${new Intl.NumberFormat("en-US").format(n)}`;

export const REPLIES = {
  en: {
    ask: { budget: "What budget do you have in mind?", intent: "Are you looking to buy or to rent?", area: "Which area are you interested in?" },
    askIntro: "Thanks for reaching out! To help properly:",
    done: (s: Slots) =>
      `Thanks! I have noted: ${s.intent === "buy" ? "buying" : "renting"} in ${s.area}, budget around ${fmtBudget(s.budget as number, "en")}. An agent will review it.`,
    bookingLine: "You can pick a time to talk here:",
    doneNoLink: (s: Slots) =>
      `Thanks! I have noted your request (${s.intent === "buy" ? "buying" : "renting"} in ${s.area}). An agent will get back to you.`,
  },
  fa: {
    ask: { budget: "بودجه‌ی شما حدوداً چقدر است؟", intent: "قصد خرید دارید یا اجاره؟", area: "کدام منطقه برایتان مناسب است؟" },
    askIntro: "ممنون از پیامتان! برای کمک بهتر لطفاً بفرمایید:",
    done: (s: Slots) =>
      `ممنون! ثبت شد: ${s.intent === "buy" ? "خرید" : "اجاره"} در ${AREA_FA[s.area as string] ?? s.area}، بودجه‌ی حدود ${fmtBudget(s.budget as number, "fa")}. یکی از مشاوران بررسی می‌کند.`,
    bookingLine: "برای هماهنگی گفت‌وگو می‌توانید اینجا زمان انتخاب کنید:",
    doneNoLink: (s: Slots) =>
      `ممنون! درخواست شما ثبت شد (${s.intent === "buy" ? "خرید" : "اجاره"} در ${AREA_FA[s.area as string] ?? s.area}). یکی از مشاوران با شما تماس می‌گیرد.`,
  },
};

const GUARANTEE_RE = /(guarantee|promise|تضمین|حتماً|قول می)/i;

// Output validation: same idea as the Validate node of the n8n workflow.
export function validateReply(reply: string, s: Slots): string[] {
  const problems: string[] = [];
  if ((reply.match(URL_RE) ?? []).length > 0) problems.push("link_in_reply");
  if (GUARANTEE_RE.test(reply)) problems.push("forbidden_claim");
  const allowed = new Set<string>(s.budget === null ? [] : normalize(fmtBudget(s.budget, "en")).match(/\d+/g) ?? []);
  const faAllowed = s.budget === null ? [] : normalize(fmtBudget(s.budget, "fa")).match(/\d+/g) ?? [];
  faAllowed.forEach((n) => allowed.add(n));
  for (const n of normalize(reply).match(/\d+/g) ?? []) if (!allowed.has(n)) problems.push("unknown_number");
  if (reply.length > 600) problems.push("too_long");
  return [...new Set(problems)];
}

export function runAgent(
  input: { eventId: string; message: string },
  memory: Memory,
  seen: Set<string>,
  lang: Lang,
): { result: RunResult; memory: Memory } {
  const steps: Step[] = [];
  const base = { slots: memory.slots, confidence: confidenceOf(memory.slots), reply: null, bookingLinkSent: false, humanDraft: null, crmWrite: null, turns: memory.turns };
  const stop = (outcome: Outcome): { result: RunResult; memory: Memory } => ({ result: { ...base, outcome, steps }, memory });

  steps.push({ id: "receive", status: "ok", params: { id: input.eventId } });

  // 1. input validation
  const raw = input.message.trim();
  if (!raw || raw.length > MAX_MESSAGE) {
    steps.push({ id: "validate_input", status: "stop", note: raw ? "too_long" : "empty", params: { max: MAX_MESSAGE } });
    return stop("invalid");
  }
  steps.push({ id: "validate_input", status: "ok" });

  // 2. dedupe (read-only; marked processed only after the CRM write)
  const key = `demo:${input.eventId}`;
  if (seen.has(key)) {
    steps.push({ id: "dedupe", status: "stop", note: "duplicate", params: { key } });
    return stop("duplicate");
  }
  steps.push({ id: "dedupe", status: "ok" });

  // 3. triage on the normalised text; the text is data, never instructions
  const norm = normalize(raw);
  const t = triage(norm);
  if (t.spam) {
    steps.push({ id: "triage", status: "stop", note: "spam", params: { links: t.links } });
    return stop("ignored");
  }
  steps.push(t.injection
    ? { id: "triage", status: "warn", note: "injection_suspected" }
    : { id: "triage", status: "ok", note: "lead" });

  // 4. extract slots (rule-based stand-in for the model step)
  const slots: Slots = {
    budget: extractBudget(norm) ?? memory.slots.budget,
    intent: extractIntent(norm) ?? memory.slots.intent,
    area: extractArea(norm) ?? memory.slots.area,
  };
  const confidence = confidenceOf(slots);
  const turns = memory.turns + 1;
  const nextMemory: Memory = { slots, turns };
  steps.push({ id: "extract", status: "ok", params: {
    budget: slots.budget === null ? "?" : slots.budget, intent: slots.intent ?? "?", area: slots.area ?? "?",
    confidence: Math.round(confidence * 100),
  } });

  // 5. sensitive topics always go to a person
  if (t.sensitive) {
    steps.push({ id: "decide", status: "stop", note: "sensitive_topic" });
    steps.push({ id: "human_gate", status: "warn", note: "sent_to_human" });
    return { result: { ...base, slots, confidence, turns, outcome: "human", humanDraft: raw, steps }, memory: nextMemory };
  }

  // 6. decide
  const gaps = missing(slots);
  if (gaps.length > 0) {
    if (turns >= MAX_TURNS_BEFORE_HUMAN) {
      steps.push({ id: "decide", status: "stop", note: "still_incomplete" });
      steps.push({ id: "human_gate", status: "warn", note: "sent_to_human" });
      return { result: { ...base, slots, confidence, turns, outcome: "human", humanDraft: raw, steps }, memory: nextMemory };
    }
    const r = REPLIES[lang];
    const reply = [r.askIntro, ...gaps.slice(0, 2).map((g) => `- ${r.ask[g]}`)].join("\n");
    const problems = validateReply(reply, slots);
    steps.push({ id: "decide", status: "ok", note: "ask_more", params: { missing: gaps.join(",") } });
    steps.push({ id: "validate_output", status: problems.length ? "stop" : "ok", note: problems[0] });
    if (problems.length) return { result: { ...base, slots, confidence, turns, outcome: "human", humanDraft: raw, steps }, memory: nextMemory };
    steps.push({ id: "crm_write", status: "skip", note: "incomplete" });
    steps.push({ id: "reply", status: "ok", note: "sent" });
    return { result: { ...base, slots, confidence, turns, outcome: "needs_more", reply, steps }, memory: nextMemory };
  }

  const qualified = (slots.budget as number) >= MIN_BUDGET;
  steps.push({ id: "decide", status: "ok", note: qualified ? "qualified" : "below_criteria", params: { min: MIN_BUDGET } });

  // 7. validate the reply BEFORE anything is written or sent
  const r = REPLIES[lang];
  const body = qualified ? r.done(slots) : r.doneNoLink(slots);
  const problems = validateReply(body, slots);
  if (problems.length) {
    steps.push({ id: "validate_output", status: "stop", note: problems[0] });
    steps.push({ id: "human_gate", status: "warn", note: "sent_to_human" });
    return { result: { ...base, slots, confidence, turns, outcome: "human", humanDraft: raw, steps }, memory: nextMemory };
  }
  steps.push({ id: "validate_output", status: "ok" });

  // 8. CRM write with an idempotency key, then mark as processed
  const crmWrite: CrmRow = { key, budget: slots.budget, intent: slots.intent, area: slots.area, qualified };
  steps.push({ id: "crm_write", status: "ok", params: { key } });
  seen.add(key);

  // 9. the workflow (never the model) adds the booking link, and only for qualified leads
  const reply = qualified ? `${body}\n${r.bookingLine} ${DEMO_BOOKING_URL}` : body;
  steps.push({ id: "reply", status: "ok", note: qualified ? "sent_with_link" : "sent_no_link" });

  return {
    result: { ...base, slots, confidence, turns, outcome: qualified ? "qualified" : "unqualified", reply, bookingLinkSent: qualified, crmWrite, steps },
    memory: nextMemory,
  };
}
