import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { ctaHref } from "@/lib/site";
import type { Dict } from "@/lib/content";

export default function Hero({ t }: { t: Dict }) {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-24 text-center md:pb-32 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[90px] md:h-[640px] md:w-[640px] md:blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.badge}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            {t.hero.line1}
            <br />
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">{t.hero.line2}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">{t.hero.body}</p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={ctaHref(t.lang)}>
              {t.hero.cta} <ArrowRight size={18} className="rtl:rotate-180" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#services">{t.hero.secondary}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
