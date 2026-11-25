"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import type { BriefDict } from "@/lib/brief-content";

const chevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

const field =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-white/80">
      {children}
      {required && <span className="ms-1 text-accent" aria-hidden="true">*</span>}
    </label>
  );
}

function Select({ id, name, options, placeholder }: { id: string; name: string; options: string[]; placeholder: string }) {
  return (
    <select
      id={id}
      name={name}
      defaultValue=""
      className={cn(field, "appearance-none bg-[#0a0a0a] bg-no-repeat pe-9 [background-position:right_0.75rem_center] rtl:[background-position:left_0.75rem_center]")}
      style={{ backgroundImage: chevron }}
    >
      <option value="" disabled className="bg-[#0a0a0a]">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-[#0a0a0a]">{o}</option>
      ))}
    </select>
  );
}

function Section({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-5 border-0 p-0">
      <legend className="mb-5 flex items-center gap-3 text-sm font-medium text-white">
        <span className="grid h-6 w-6 place-items-center rounded-full border border-accent/50 text-xs text-[#4da3ff]">{step}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export default function BriefForm({ t }: { t: BriefDict }) {
  const fa = t.lang === "fa";
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "mailto">("idle");
  const [replyTo, setReplyTo] = useState("");
  const d = fa ? ["۱", "۲", "۳"] : ["1", "2", "3"];
  const ltr = fa ? ({ dir: "ltr" } as const) : {};

  function toggleTool(tool: string) {
    setSelectedTools((cur) => (cur.includes(tool) ? cur.filter((x) => x !== tool) : [...cur, tool]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return; // honeypot
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const data = {
      name: v("name"),
      email: v("email"),
      company: v("company"),
      contact: v("contact"),
      project_type: v("project_type"),
      process: v("process"),
      tools: selectedTools.join(", "),
      volume: v("volume"),
      human_approval: v("human_approval"),
      data_sensitivity: v("data_sensitivity"),
      timeline: v("timeline"),
      budget: v("budget"),
      notes: v("notes"),
    };
    setReplyTo(data.email);
    const L = t.mailLabels;

    if (!site.web3formsKey) {
      const dash = "-";
      const lines = [
        `${L.name}: ${data.name}`, `${L.email}: ${data.email}`, `${L.company}: ${data.company || dash}`,
        ...(fa ? [`${L.contact}: ${data.contact || dash}`] : []),
        `${L.projectType}: ${data.project_type || dash}`, "", `${L.process}:`, data.process, "",
        `${L.tools}: ${data.tools || dash}`, `${L.volume}: ${data.volume || dash}`,
        `${L.approval}: ${data.human_approval || dash}`, `${L.data}: ${data.data_sensitivity || dash}`,
        `${L.timeline}: ${data.timeline || dash}`, `${L.budget}: ${data.budget || dash}`, "", `${L.notes}:`, data.notes || dash,
      ];
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${L.subject}: ${data.name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
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
          subject: t.payloadSubject.replace("{name}", data.name),
          from_name: "Tekbin AI website",
          replyto: data.email,
          language: t.lang,
          ...data,
        }),
      });
      const json = await res.json().catch(() => ({}));
      setStatus(res.ok && json.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done" || status === "mailto") {
    return (
      <div className="glass-card p-8 md:p-10" role="status" aria-live="polite">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-[#4da3ff]">
          <Check size={20} />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          {status === "done" ? t.successTitle : t.mailtoTitle}
        </h2>
        <p className="mt-3 leading-relaxed text-white/60">
          {status === "done"
            ? t.successBody.replace("{email}", replyTo)
            : t.mailtoBody.replaceAll("{email}", site.email)}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-10 p-6 md:p-10">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <Section step={d[0]} title={t.sections.about}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" required>{t.labels.name}</Label>
            <input id="name" name="name" required autoComplete="name" className={field} placeholder={t.placeholders.name} />
          </div>
          <div>
            <Label htmlFor="email" required>{t.labels.email}</Label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder={t.placeholders.email} {...ltr} />
          </div>
        </div>
        <div className={cn("grid gap-5", fa && "sm:grid-cols-2")}>
          <div>
            <Label htmlFor="company">{t.labels.company}</Label>
            <input id="company" name="company" autoComplete="organization" className={field} placeholder={t.placeholders.company} {...ltr} />
          </div>
          {fa && (
            <div>
              <Label htmlFor="contact">{t.labels.contact}</Label>
              <input id="contact" name="contact" autoComplete="tel" className={field} placeholder={t.placeholders.contact} {...ltr} />
            </div>
          )}
        </div>
      </Section>

      <Section step={d[1]} title={t.sections.project}>
        <div>
          <Label htmlFor="project_type">{t.labels.projectType}</Label>
          <Select id="project_type" name="project_type" options={t.options.projectTypes} placeholder={t.placeholders.projectType} />
        </div>
        <div>
          <Label htmlFor="process" required>{t.labels.process}</Label>
          <textarea id="process" name="process" required rows={6} className={cn(field, "resize-y leading-relaxed")} placeholder={t.placeholders.process} />
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium text-white/80">{t.labels.tools}</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.labels.tools}>
            {t.options.tools.map((tool) => {
              const on = selectedTools.includes(tool);
              return (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleTool(tool)}
                  aria-pressed={on}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    on ? "border-accent bg-accent/15 text-white" : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
                  )}
                >
                  {tool}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      <Section step={d[2]} title={t.sections.scope}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="volume">{t.labels.volume}</Label>
            <Select id="volume" name="volume" options={t.options.volumes} placeholder={t.placeholders.volume} />
          </div>
          <div>
            <Label htmlFor="human_approval">{t.labels.approval}</Label>
            <Select id="human_approval" name="human_approval" options={t.options.approvals} placeholder={t.placeholders.approval} />
          </div>
          <div>
            <Label htmlFor="data_sensitivity">{t.labels.data}</Label>
            <Select id="data_sensitivity" name="data_sensitivity" options={t.options.sensitivities} placeholder={t.placeholders.data} />
          </div>
          <div>
            <Label htmlFor="timeline">{t.labels.timeline}</Label>
            <Select id="timeline" name="timeline" options={t.options.timelines} placeholder={t.placeholders.timeline} />
          </div>
        </div>
        <div>
          <Label htmlFor="budget">{t.labels.budget}</Label>
          <Select id="budget" name="budget" options={t.options.budgets} placeholder={t.placeholders.budget} />
        </div>
        <div>
          <Label htmlFor="notes">{t.labels.notes}</Label>
          <textarea id="notes" name="notes" rows={3} className={cn(field, "resize-y leading-relaxed")} placeholder={t.placeholders.notes} />
        </div>
      </Section>

      <div className="space-y-5 border-t border-white/10 pt-8">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
          <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#0070f3]" />
          <span>
            {t.consent.before}
            <a href={fa ? "/fa/privacy" : "/privacy"} className="text-[#4da3ff] underline underline-offset-2">{t.consent.link}</a>
            {t.consent.after}
          </span>
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" size="lg" disabled={status === "sending"}>
            {status === "sending" ? (
              <><Loader2 size={18} className="animate-spin" /> {t.sending}</>
            ) : (
              <>{t.submit} <ArrowRight size={18} className="rtl:rotate-180" /></>
            )}
          </Button>
          <p className="text-xs text-white/55">{t.hint}</p>
        </div>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            {t.error}{" "}
            <a href={`mailto:${site.email}?subject=${encodeURIComponent(t.mailLabels.subject)}`} className="underline">{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
