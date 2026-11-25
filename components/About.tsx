import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Dict } from "@/lib/content";

export default function About({ t }: { t: Dict }) {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <div className="glass-card grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.about.title}</h2>
            <p className="mt-5 leading-relaxed text-white/60">{t.about.body}</p>
          </div>
          <ul className="space-y-4 self-center text-white/80">
            {t.about.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
