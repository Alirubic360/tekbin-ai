import { Bot, Workflow, Plug, LineChart, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { Dict } from "@/lib/content";

const icons = { bot: Bot, workflow: Workflow, plug: Plug, mail: Mail, chart: LineChart };
const spans = ["md:col-span-2", "", "", "", ""];

export default function Services({ t }: { t: Dict }) {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.services.title}</h2>
        <p className="mt-4 max-w-xl text-white/60">{t.services.sub}</p>
      </Reveal>
      <div className="mt-12 grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {t.services.items.map((it, i) => {
          const Icon = icons[it.icon];
          return (
            <Reveal key={it.title} delay={i * 0.06} className={cn("group", spans[i])}>
              <div className="glass-card flex h-full flex-col justify-between p-6 transition-colors group-hover:border-accent/40">
                <Icon className="text-accent" size={22} />
                <div className="mt-10">
                  <h3 className="text-lg font-medium">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{it.body}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-6 text-sm"><a href={t.services.moreHref} className="text-[#4da3ff] underline underline-offset-2">{t.services.moreLabel}</a></p>
    </section>
  );
}
