import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Dict } from "@/lib/content";

export default function Faq({ t }: { t: Dict }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.faq.title}</h2>
      </Reveal>
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {t.faq.items.map((it) => (
          <details key={it.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium marker:hidden rtl:text-right [&::-webkit-details-marker]:hidden">
              {it.q}
              <Plus size={18} className="shrink-0 text-accent transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
