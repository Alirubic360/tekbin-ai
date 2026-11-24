import { Bot, Workflow, Plug, LineChart, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const items = [
  { icon: Bot, title: "Custom AI Agents", body: "Agents that qualify leads, answer questions and hand off to your team with full context.", span: "md:col-span-2" },
  { icon: Workflow, title: "Workflow Automation", body: "Multi-step automations across your tools, built on n8n.", span: "" },
  { icon: Plug, title: "Integrations", body: "Connect your CRM, inbox, calendar and databases.", span: "" },
  { icon: Mail, title: "Inbox & Follow-up", body: "Draft, route and follow up on messages with a human in the loop.", span: "" },
  { icon: LineChart, title: "Reporting", body: "Automated summaries so you see what matters without the spreadsheet work.", span: "md:col-span-2" },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">What we build</h2>
        <p className="mt-4 max-w-xl text-white/60">Focused systems, scoped to a clear business outcome.</p>
      </Reveal>
      <div className="mt-12 grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06} className={cn("group", it.span)}>
            <div className="glass-card flex h-full flex-col justify-between p-6 transition-colors group-hover:border-accent/40">
              <it.icon className="text-accent" size={22} />
              <div className="mt-10">
                <h3 className="text-lg font-medium">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{it.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
