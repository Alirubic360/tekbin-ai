"use client";

import { useRef, useState } from "react";
import { AlertTriangle, Check, Minus, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AREA_FA, MAX_MESSAGE, emptyMemory, runAgent, type CrmRow, type Memory, type RunResult, type Step } from "@/lib/agent-demo";
import type { AgentDemoDict } from "@/lib/agent-demo-content";

type Msg = { id: number; who: "lead" | "agent" | "sys"; text: string };

const icon = { ok: Check, warn: AlertTriangle, stop: Square, skip: Minus } as const;
const tone = { ok: "text-emerald-400", warn: "text-amber-300", stop: "text-red-300", skip: "text-white/40" } as const;

export default function AgentDemo({ t }: { t: AgentDemoDict }) {
  const fa = t.lang === "fa";
  const nf = new Intl.NumberFormat(fa ? "fa-IR" : "en-US");
  const seen = useRef<Set<string>>(new Set());
  const counter = useRef(0);
  const [last, setLast] = useState<{ id: string; text: string } | null>(null);
  const [memory, setMemory] = useState<Memory>(emptyMemory());
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [run, setRun] = useState<RunResult | null>(null);
  const [crm, setCrm] = useState<CrmRow[]>([]);
  const [draft, setDraft] = useState("");

  function send(text: string, eventId?: string) {
    const message = text.trim();
    if (!message) return;
    const id = eventId ?? `evt-${String(++counter.current).padStart(3, "0")}`;
    setLast({ id, text: message });
    const { result, memory: next } = runAgent({ eventId: id, message }, memory, seen.current, t.lang);
    setMemory(next);
    setRun(result);
    const add: Msg[] = [{ id: Date.now() + Math.random(), who: "lead", text: message }];
    if (result.reply) add.push({ id: Date.now() + Math.random(), who: "agent", text: result.reply });
    else add.push({ id: Date.now() + Math.random(), who: "sys", text: t.systemMsg[result.outcome] ?? "" });
    setMsgs((m) => [...m, ...add]);
    if (result.crmWrite) setCrm((c) => [...c, result.crmWrite as CrmRow]);
    setDraft("");
  }

  function reset() {
    seen.current = new Set();
    counter.current = 0;
    setLast(null);
    setMemory(emptyMemory());
    setMsgs([]);
    setRun(null);
    setCrm([]);
    setDraft("");
  }

  const fill = (s: string, p?: Record<string, string | number>) =>
    s.replace(/\{(\w+)\}/g, (_, k) => String(p?.[k] ?? "")).replace(/\$\{min\}/g, nf.format(Number(p?.min ?? 0)));

  function noteText(s: Step) {
    if (!s.note) return "";
    const base = t.notes[s.note] ?? s.note;
    return fill(base.replace("${min}", nf.format(Number(s.params?.min ?? 0))), s.params);
  }

  function extractText(s: Step) {
    const p = s.params ?? {};
    const v = (x: unknown) => (x === "?" ? "?" : String(x));
    const budget = p.budget === "?" ? "?" : nf.format(Number(p.budget));
    const intentFa = p.intent === "buy" ? t.crm.buy : p.intent === "rent" ? t.crm.rent : "?";
    const areaFa = p.area === "?" ? "?" : AREA_FA[String(p.area)] ?? String(p.area);
    return fa
      ? `بودجه: ${budget} · قصد: ${intentFa} · منطقه: ${areaFa} · اطمینان: ${nf.format(Number(p.confidence))}٪`
      : `budget: ${budget} · intent: ${v(p.intent)} · area: ${v(p.area)} · confidence: ${p.confidence}%`;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="glass-card flex flex-col p-5 md:p-6" aria-label={t.chat.title}>
        <h2 className="text-lg font-medium">{t.chat.title}</h2>
        <div className="mt-4 min-h-[220px] flex-1 space-y-3" aria-live="polite">
          {msgs.length === 0 && <p className="text-sm text-white/55">{t.chat.empty}</p>}
          {msgs.map((m) => (
            <div key={m.id} className={cn("max-w-[92%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed", m.who === "lead" ? "ms-auto bg-accent/20" : m.who === "agent" ? "me-auto border border-white/10 bg-white/[0.04]" : "me-auto border border-dashed border-white/15 text-white/60")}>
              <p className="mb-0.5 text-[11px] text-white/55">{m.who === "lead" ? t.chat.lead : m.who === "agent" ? t.chat.agent : t.chat.sys}</p>
              <p className="whitespace-pre-line break-words">{m.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); send(draft); }} className="mt-4 flex gap-2">
          <label htmlFor="ad-input" className="sr-only">{t.chat.placeholder}</label>
          <input id="ad-input" value={draft} onChange={(e) => setDraft(e.target.value)} maxLength={MAX_MESSAGE + 50}
            placeholder={t.chat.placeholder} autoComplete="off"
            className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
          <Button type="submit" disabled={!draft.trim()}>{t.chat.send}</Button>
        </form>

        <div className="mt-5">
          <p className="mb-2 text-xs text-white/55">{t.chat.examples}</p>
          <div className="flex flex-wrap gap-2">
            {t.examples.map((e) => (
              <button key={e.label} type="button" onClick={() => send(e.text)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                {e.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
            <button type="button" disabled={!last} onClick={() => last && send(last.text, last.id)}
              className="text-[#4da3ff] underline underline-offset-2 disabled:text-white/35 disabled:no-underline">{t.chat.resend}</button>
            <button type="button" onClick={reset} className="text-white/60 underline underline-offset-2">{t.chat.reset}</button>
          </div>
        </div>
      </section>

      <div className="space-y-6">
        <section className="glass-card p-5 md:p-6" aria-label={t.trace.title}>
          <h2 className="text-lg font-medium">{t.trace.title}</h2>
          {!run ? (
            <p className="mt-3 text-sm text-white/55">{t.trace.empty}</p>
          ) : (
            <div aria-live="polite">
              <p className="mt-2 text-sm font-medium text-white/90">{t.trace.outcomes[run.outcome]}</p>
              <ol className="mt-4 space-y-3">
                {run.steps.map((s, i) => {
                  const Icon = icon[s.status];
                  return (
                    <li key={`${s.id}-${i}`} className="list-none">
                      <div className="flex items-start gap-3">
                        <Icon size={16} className={cn("mt-1 shrink-0", tone[s.status])} aria-hidden="true" />
                        <div className="min-w-0 text-sm">
                          <p className="font-medium text-white/85">{t.steps[s.id]}</p>
                          {s.id === "extract" ? (
                            <p className="text-white/60" dir={fa ? "rtl" : "ltr"}>{extractText(s)}</p>
                          ) : s.id === "receive" ? (
                            <p className="text-white/60"><bdi dir="ltr">{String(s.params?.id)}</bdi></p>
                          ) : (
                            s.note && <p className="text-white/60">{noteText(s)}</p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
              {run.humanDraft && (
                <p className="mt-4 rounded-lg border border-amber-300/30 bg-amber-300/5 p-3 text-xs text-white/70">
                  {t.steps.human_gate}: “{run.humanDraft}”
                </p>
              )}
            </div>
          )}
        </section>

        <section className="glass-card p-5 md:p-6" aria-label={t.crm.title}>
          <h2 className="text-lg font-medium">{t.crm.title}</h2>
          {crm.length === 0 ? (
            <p className="mt-3 text-sm text-white/55">{t.crm.empty}</p>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-start text-xs">
                <thead className="text-white/55">
                  <tr>{Object.values(t.crm.cols).map((c) => <th key={c} className="py-1.5 pe-3 text-start font-medium">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {crm.map((r) => (
                    <tr key={r.key} className="border-t border-white/10 text-white/80">
                      <td className="py-1.5 pe-3"><bdi dir="ltr">{r.key}</bdi></td>
                      <td className="pe-3">{r.intent ? t.crm[r.intent] : "-"}</td>
                      <td className="pe-3">{r.area}</td>
                      <td className="pe-3"><bdi dir="ltr">{r.budget === null ? "-" : `$${new Intl.NumberFormat("en-US").format(r.budget)}`}</bdi></td>
                      <td>{r.qualified ? t.crm.yes : t.crm.no}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-xs text-white/55">{t.crm.note}</p>
        </section>
      </div>
    </div>
  );
}
