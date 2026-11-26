import Reveal from "@/components/Reveal";
import { hoodDicts } from "@/lib/hood-content";
import type { Lang } from "@/lib/site";

export default function UnderTheHood({ lang }: { lang: Lang }) {
  const t = hoodDicts[lang];
  return (
    <section id="architecture" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-white/60">{t.sub}</p>
        <p className="mt-3 inline-block rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{t.label}</p>
      </Reveal>
      <ol className="mt-10 grid gap-3 md:grid-cols-6">
        {t.nodes.map((n, i) => (
          <li key={n.name} className="list-none">
            <div className="glass-card h-full p-4">
              <span className="text-xs text-[#4da3ff]">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-sm font-medium"><bdi>{n.name}</bdi></p>
              <p className="mt-1 text-xs leading-relaxed text-white/60">{n.role}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-white/70">{t.note}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {t.points.map((p) => (
          <div key={p.title} className="glass-card p-6">
            <h3 className="text-base font-medium">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
