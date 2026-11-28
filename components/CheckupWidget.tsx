"use client";

import { useMemo, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { DONT_KNOW, Q_ORDER, emptyAnswers, evaluate, type Answers, type QId } from "@/lib/checkup";
import type { CheckupDict } from "@/lib/checkup-content";

const field =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function CheckupWidget({ t }: { t: CheckupDict }) {
  const fa = t.lang === "fa";
  const nf = new Intl.NumberFormat(fa ? "fa-IR" : "en-US", { maximumFractionDigits: 0 });
  const [step, setStep] = useState(0); // 0..4 questions, 5 result
  const [answers, setAnswers] = useState<Answers>(emptyAnswers());
  const [picked, setPicked] = useState<Partial<Record<QId, true>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "mailto" | "error">("idle");
  const [replyTo, setReplyTo] = useState("");

  const result = useMemo(() => evaluate(answers), [answers]);
  const done = step >= Q_ORDER.length;
  const q = Q_ORDER[Math.min(step, Q_ORDER.length - 1)];

  function pick(question: QId, value: string) {
    setAnswers((a) => ({ ...a, [question]: value }));
    setPicked((p) => ({ ...p, [question]: true }));
  }

  function reset() {
    setStep(0);
    setAnswers(emptyAnswers());
    setPicked({});
    setStatus("idle");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return; // honeypot
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (fd.get("consent") !== "on") return;
    setReplyTo(email);
    const summary = {
      ...Object.fromEntries(Q_ORDER.map((k) => [k, answers[k]])),
      score: result.score === null ? "n/a" : String(Math.round(result.score)),
      band: result.band ?? "n/a",
      coverage_percent: String(Math.round(result.coverage)),
      cards: result.cards.map((c) => c.id).join(", ") || "none",
      rules_version: "re-0.2.0",
      consent_to_contact: "yes",
    };
    if (!site.web3formsKey) {
      const body = [`Name: ${name}`, `Email: ${email}`, ...Object.entries(summary).map(([k, v]) => `${k}: ${v}`)].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(t.gate.payloadSubject.replace("{name}", name))}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: t.gate.payloadSubject.replace("{name}", name),
          from_name: "Tekbin AI website",
          replyto: email,
          language: t.lang,
          name,
          email,
          ...summary,
        }),
      });
      const json = await res.json().catch(() => ({}));
      setStatus(res.ok && json.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (!done) {
    const question = t.qs[q];
    return (
      <div className="glass-card p-6 md:p-10">
        <p className="text-sm text-[#4da3ff]">
          {t.ui.step.replace("{n}", nf.format(step + 1)).replace("{total}", nf.format(Q_ORDER.length))}
        </p>
        <h2 id="checkup-q" className="mt-3 text-xl font-medium md:text-2xl">{question.title}</h2>
        <div role="radiogroup" aria-labelledby="checkup-q" className="mt-6 grid gap-3 sm:grid-cols-2">
          {question.options.map((o) => {
            const checked = picked[q] === true && answers[q] === o.value;
            return (
              <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={checked}
                onClick={() => pick(q, o.value)}
                className={cn(
                  "rounded-lg border px-4 py-3 text-start text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  checked ? "border-accent bg-accent/15 text-white" : "border-white/10 bg-white/[0.03] text-white/75 hover:border-white/25",
                  o.value === DONT_KNOW && !checked && "text-white/60"
                )}
              >
                {o.label}
              </button>
            );
          })}
        </div>
        <div className="mt-8 flex items-center gap-3">
          {step > 0 && <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>{t.ui.back}</Button>}
          <Button type="button" disabled={!picked[q]} onClick={() => setStep(step + 1)}>
            {step === Q_ORDER.length - 1 ? t.ui.seeResult : t.ui.next}
          </Button>
        </div>
      </div>
    );
  }

  const r = t.result;
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 md:p-10">
        <h2 className="text-xl font-medium md:text-2xl">{r.title}</h2>
        {result.score === null ? (
          <p className="mt-4 text-white/80" role="status">{r.noScore}</p>
        ) : (
          <div className="mt-4" role="status" aria-live="polite">
            <p className="text-4xl font-semibold tracking-tight">
              {nf.format(Math.round(result.score))} <span className="text-lg font-normal text-white/60">{r.outOf}</span>
            </p>
            <p className="mt-2 text-lg text-white/90">{result.band && r.bands[result.band]}</p>
            {result.preliminary && <p className="mt-1 text-sm text-white/60">{r.prelim}</p>}
          </div>
        )}
        <p className="mt-3 text-sm text-white/60">
          {r.coverage}: {nf.format(Math.round(result.coverage))}{fa ? "٪" : "%"}
        </p>
        <ul className="mt-4 space-y-1 text-xs text-white/55">
          {t.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>

      <div className="glass-card p-6 md:p-10">
        <h3 className="text-lg font-medium">{r.cardsTitle}</h3>
        {result.cards.length === 0 ? (
          <p className="mt-3 text-sm text-white/65">{r.noCards}</p>
        ) : (
          <ol className="mt-4 space-y-6">
            {result.cards.map((c, i) => {
              const card = t.cards[c.id];
              return (
                <li key={c.id} className="list-none">
                  <p className="text-base font-medium">
                    <span className="me-2 text-[#4da3ff]">{nf.format(i + 1)}.</span>
                    {card.finding}
                  </p>
                  <dl className="mt-2 space-y-1.5 text-sm leading-relaxed text-white/65">
                    <div><dt className="inline font-medium text-white/80">{r.causes}: </dt><dd className="inline">{card.causes.join(fa ? "؛ " : "; ")}</dd></div>
                    <div><dt className="inline font-medium text-white/80">{r.verify}: </dt><dd className="inline">{card.verify}</dd></div>
                    <div><dt className="inline font-medium text-white/80">{r.action}: </dt><dd className="inline">{card.action}</dd></div>
                    <div><dt className="inline font-medium text-white/80">{r.metric}: </dt><dd className="inline">{card.metric}</dd></div>
                    <div><dt className="inline font-medium text-white/80">{r.limits}: </dt><dd className="inline">{card.limits}</dd></div>
                  </dl>
                </li>
              );
            })}
          </ol>
        )}
      </div>

      <div className="glass-card p-6 md:p-10">
        {status === "done" || status === "mailto" ? (
          <div role="status" aria-live="polite">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-[#4da3ff]"><Check size={20} /></span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">{status === "done" ? t.gate.successTitle : t.gate.mailtoTitle}</h3>
            <p className="mt-3 leading-relaxed text-white/60">
              {(status === "done" ? t.gate.successBody : t.gate.mailtoBody).replaceAll("{email}", status === "done" ? replyTo : site.email)}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <h3 className="text-lg font-medium">{t.gate.title}</h3>
            <p className="text-sm leading-relaxed text-white/60">{t.gate.intro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cu-name" className="mb-1.5 block text-sm font-medium text-white/80">{t.gate.name}</label>
                <input id="cu-name" name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="cu-email" className="mb-1.5 block text-sm font-medium text-white/80">{t.gate.email}</label>
                <input id="cu-email" name="email" type="email" required autoComplete="email" dir="ltr" className={field} />
              </div>
            </div>
            <label className="flex items-start gap-2 text-sm text-white/70">
              <input type="checkbox" name="consent" required className="mt-1" />
              <span>{t.gate.consent}</span>
            </label>
            <p className="text-xs text-white/55">{t.privacyNote}</p>
            {status === "error" && <p role="alert" className="text-sm text-red-300">{t.gate.error}</p>}
            <div className="flex items-center gap-3">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (<><Loader2 size={16} className="animate-spin" />{t.gate.sending}</>) : t.gate.submit}
              </Button>
              <Button type="button" variant="ghost" onClick={reset}>{t.ui.restart}</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
