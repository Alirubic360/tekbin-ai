"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { HOURS_MID, SHARE, WEEKS_PER_MONTH, type AuditDict } from "@/lib/audit-content";

const field =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function Choice({ checked, onClick, children, type }: { checked: boolean; onClick: () => void; children: React.ReactNode; type: "radio" | "checkbox" }) {
  return (
    <button
      type="button"
      role={type}
      aria-checked={checked}
      onClick={onClick}
      className={cn(
        "rounded-lg border px-4 py-3 text-start text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        checked ? "border-accent bg-accent/15 text-white" : "border-white/10 bg-white/[0.03] text-white/75 hover:border-white/25"
      )}
    >
      {children}
    </button>
  );
}

export default function AuditWidget({ t }: { t: AuditDict }) {
  const fa = t.lang === "fa";
  const nf = new Intl.NumberFormat(fa ? "fa-IR" : "en-US", { maximumFractionDigits: 0 });
  const [step, setStep] = useState(0); // 0..2 questions, 3 result + contact
  const [bottleneck, setBottleneck] = useState<number | null>(null);
  const [hours, setHours] = useState<number | null>(null);
  const [tools, setTools] = useState<number[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "mailto" | "error">("idle");
  const [replyTo, setReplyTo] = useState("");

  const canNext = step === 0 ? bottleneck !== null : step === 1 ? hours !== null : tools.length > 0;
  const total = hours !== null ? HOURS_MID[hours] * WEEKS_PER_MONTH : 0;
  const [lo, hi] = bottleneck !== null ? SHARE[bottleneck] : [0, 0];
  const low = Math.round(total * lo);
  const high = Math.round(total * hi);
  const customSelected = tools.includes(3);

  function reset() {
    setStep(0); setBottleneck(null); setHours(null); setTools([]); setStatus("idle");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    setReplyTo(email);
    const summary = {
      bottleneck: bottleneck !== null ? t.bottlenecks[bottleneck] : "",
      hours_per_week: hours !== null ? t.hours[hours] : "",
      tools: tools.map((i) => t.tools[i]).join(", "),
      estimate_hours_per_month: `${low}-${high} of ${Math.round(total)}`,
    };
    if (!site.web3formsKey) {
      const body = [`Name: ${name}`, `Email: ${email}`, ...Object.entries(summary).map(([k, v]) => `${k}: ${v}`)].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(t.payloadSubject.replace("{name}", name))}&body=${encodeURIComponent(body)}`;
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
          subject: t.payloadSubject.replace("{name}", name),
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

  return (
    <div className="glass-card p-6 md:p-10">
      {status === "done" || status === "mailto" ? (
        <div role="status" aria-live="polite">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-[#4da3ff]"><Check size={20} /></span>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight">{status === "done" ? t.successTitle : t.mailtoTitle}</h3>
          <p className="mt-3 leading-relaxed text-white/60">
            {(status === "done" ? t.successBody : t.mailtoBody).replaceAll("{email}", status === "done" ? replyTo : site.email)}
          </p>
        </div>
      ) : step < 3 ? (
        <div>
          <p className="text-sm text-[#4da3ff]">
            {t.step.replace("{n}", nf.format(step + 1)).replace("{total}", nf.format(3))}
          </p>
          <h3 id="audit-q" className="mt-3 text-xl font-medium md:text-2xl">
            {step === 0 ? t.q.bottleneck : step === 1 ? t.q.hours : t.q.tools}
          </h3>
          <div role={step === 2 ? "group" : "radiogroup"} aria-labelledby="audit-q" className="mt-6 grid gap-3 sm:grid-cols-2">
            {step === 0 && t.bottlenecks.map((o, i) => (
              <Choice key={o} type="radio" checked={bottleneck === i} onClick={() => setBottleneck(i)}>{o}</Choice>
            ))}
            {step === 1 && t.hours.map((o, i) => (
              <Choice key={o} type="radio" checked={hours === i} onClick={() => setHours(i)}>{o}</Choice>
            ))}
            {step === 2 && t.tools.map((o, i) => (
              <Choice key={o} type="checkbox" checked={tools.includes(i)} onClick={() => setTools((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))}>{o}</Choice>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            {step > 0 && <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>{t.back}</Button>}
            <Button type="button" disabled={!canNext} onClick={() => setStep(step + 1)}>{t.next}</Button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-medium md:text-2xl">{t.resultTitle}</h3>
          <p className="mt-3 text-lg leading-relaxed text-white/90" aria-live="polite">
            {t.resultLine.replace("{total}", nf.format(Math.round(total))).replace("{low}", nf.format(low)).replace("{high}", nf.format(high))}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{customSelected ? t.toolNotes.custom : t.toolNotes.standard}</p>
          <p className="mt-3 text-xs leading-relaxed text-white/55">{t.assumptions}</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4 border-t border-white/10 pt-8">
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <h4 className="text-base font-medium">{t.q.contact}</h4>
            <p className="text-sm leading-relaxed text-white/60">{t.contactIntro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="audit-name" className="mb-1.5 block text-sm font-medium text-white/80">{t.labels.name}</label>
                <input id="audit-name" name="name" required autoComplete="name" className={field} placeholder={t.placeholders.name} />
              </div>
              <div>
                <label htmlFor="audit-email" className="mb-1.5 block text-sm font-medium text-white/80">{t.labels.email}</label>
                <input id="audit-email" name="email" type="email" required autoComplete="email" dir="ltr" className={field} placeholder={t.placeholders.email} />
              </div>
            </div>
            <p className="text-xs text-white/55">{t.consent}</p>
            {status === "error" && <p role="alert" className="text-sm text-red-300">{t.error}</p>}
            <div className="flex items-center gap-3">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (<><Loader2 size={16} className="animate-spin" />{t.sending}</>) : t.submit}
              </Button>
              <Button type="button" variant="ghost" onClick={reset}>{t.restart}</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
