import Reveal from "@/components/Reveal";
import type { Dict } from "@/lib/content";

export default function Process({ t }: { t: Dict }) {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.process.title}</h2>
        <p className="mt-4 max-w-xl text-white/60">{t.process.sub}</p>
      </Reveal>
      <ol className="mt-12 grid gap-4 md:grid-cols-4">
        {t.process.steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <li className="glass-card h-full list-none p-6">
              <span className="text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
