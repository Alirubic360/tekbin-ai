import { Bot, Workflow, Activity, MessageSquare } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Dict } from "@/lib/content";

const icons = { bot: Bot, workflow: Workflow, activity: Activity, message: MessageSquare };

export default function Team({ t }: { t: Dict }) {
  return (
    <section id="team" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.team.title}</h2>
        <p className="mt-4 max-w-xl text-white/60">{t.team.sub}</p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.team.roles.map((r, i) => {
          const Icon = icons[r.icon];
          return (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="glass-card h-full p-6">
                <Icon className="text-accent" size={22} />
                <h3 className="mt-8 text-lg font-medium">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{r.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
