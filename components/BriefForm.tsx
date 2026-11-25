"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const projectTypes = [
  "AI agent",
  "Workflow automation",
  "Integration / API work",
  "Manage an existing agent",
  "Not sure yet",
];
const tools = [
  "n8n", "Zapier", "Make", "HubSpot", "Salesforce", "Google Workspace", "Microsoft 365",
  "Slack", "Notion", "Airtable", "WhatsApp / Telegram", "Custom API", "Other",
];
const volumes = ["Under 100 runs / month", "100 – 1,000", "1,000 – 10,000", "10,000+", "Not sure"];
const approvals = ["Yes, for sensitive actions", "No, fully automated", "Not sure yet"];
const sensitivities = ["Public data only", "Internal business data", "Personal customer data", "Regulated data (health, finance)"];
const timelines = ["As soon as possible", "2 – 6 weeks", "Flexible"];
const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+", "Not sure yet"];

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
        <span className="grid h-6 w-6 place-items-center rounded-full border border-accent/50 text-xs text-accent">{step}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export default function BriefForm() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "mailto">("idle");
  const [replyTo, setReplyTo] = useState("");

  function toggleTool(t: string) {
    setSelectedTools((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));
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

    if (!site.web3formsKey) {
      const lines = [
        `Name: ${data.name}`, `Email: ${data.email}`, `Company / website: ${data.company || "-"}`,
        `Project type: ${data.project_type || "-"}`, "", "Process to automate:", data.process, "",
        `Current tools: ${data.tools || "-"}`, `Volume: ${data.volume || "-"}`,
        `Human approval: ${data.human_approval || "-"}`, `Data sensitivity: ${data.data_sensitivity || "-"}`,
        `Timeline: ${data.timeline || "-"}`, `Budget: ${data.budget || "-"}`, "", "Notes:", data.notes || "-",
      ];
      const href = `mailto:${site.email}?subject=${encodeURIComponent(`Project brief: ${data.name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
      window.location.href = href;
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
          subject: `New project brief: ${data.name}`,
          from_name: "Tekbin AI website",
          replyto: data.email,
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
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent">
          <Check size={20} />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          {status === "done" ? "Brief received" : "Your email app should open"}
        </h2>
        <p className="mt-3 leading-relaxed text-white/60">
          {status === "done"
            ? `Thanks. We will review your brief and reply to ${replyTo} with questions or a written proposal.`
            : `Your brief is pre-filled in a draft addressed to ${site.email}. Send it from your email app and we will reply in writing. If nothing opened, email us at ${site.email}.`}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-10 p-6 md:p-10">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <Section step="1" title="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" required>Full name</Label>
            <input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Cooper" />
          </div>
          <div>
            <Label htmlFor="email" required>Work email</Label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" />
          </div>
        </div>
        <div>
          <Label htmlFor="company">Company or website</Label>
          <input id="company" name="company" autoComplete="organization" className={field} placeholder="company.com" />
        </div>
      </Section>

      <Section step="2" title="The project">
        <div>
          <Label htmlFor="project_type">What do you need?</Label>
          <Select id="project_type" name="project_type" options={projectTypes} placeholder="Select a type" />
        </div>
        <div>
          <Label htmlFor="process" required>Which process should we automate?</Label>
          <textarea
            id="process" name="process" required rows={6} className={cn(field, "resize-y leading-relaxed")}
            placeholder="Describe the trigger, the steps and the outcome. Example: when a lead fills in our website form, enrich it, score it, create a deal in HubSpot and notify sales in Slack."
          />
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium text-white/80">Tools involved</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Tools involved">
            {tools.map((t) => {
              const on = selectedTools.includes(t);
              return (
                <button
                  key={t} type="button" onClick={() => toggleTool(t)} aria-pressed={on}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    on ? "border-accent bg-accent/15 text-white" : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
                  )}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      <Section step="3" title="Scope and constraints">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="volume">Expected volume</Label>
            <Select id="volume" name="volume" options={volumes} placeholder="Select volume" />
          </div>
          <div>
            <Label htmlFor="human_approval">Human approval needed?</Label>
            <Select id="human_approval" name="human_approval" options={approvals} placeholder="Select an option" />
          </div>
          <div>
            <Label htmlFor="data_sensitivity">Data involved</Label>
            <Select id="data_sensitivity" name="data_sensitivity" options={sensitivities} placeholder="Select data type" />
          </div>
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <Select id="timeline" name="timeline" options={timelines} placeholder="Select a timeline" />
          </div>
        </div>
        <div>
          <Label htmlFor="budget">Budget range (USD)</Label>
          <Select id="budget" name="budget" options={budgets} placeholder="Select a range" />
        </div>
        <div>
          <Label htmlFor="notes">Anything else we should know?</Label>
          <textarea id="notes" name="notes" rows={3} className={cn(field, "resize-y leading-relaxed")} placeholder="Links, constraints, existing systems, edge cases." />
        </div>
      </Section>

      <div className="space-y-5 border-t border-white/10 pt-8">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
          <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#0070f3]" />
          <span>
            I agree that Tekbin AI may use these details to reply to my brief, as described in the{" "}
            <a href="/privacy" className="text-[#4da3ff] underline underline-offset-2">Privacy Policy</a>.
          </span>
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" size="lg" disabled={status === "sending"}>
            {status === "sending" ? (<><Loader2 size={18} className="animate-spin" /> Sending</>) : (<>Send brief <ArrowRight size={18} /></>)}
          </Button>
          <p className="text-xs text-white/55">No account needed. We reply in writing.</p>
        </div>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            Something went wrong. Please email your brief to{" "}
            <a href={`mailto:${site.email}?subject=Project%20brief`} className="underline">{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
