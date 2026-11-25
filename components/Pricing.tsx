import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { ctaHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Dict } from "@/lib/content";

// Prices are starting points; final scope and price are agreed in writing.
// NOTE: the Founding Client offer is limited to the first three client projects.
// Remove or update it (in lib/content.ts) once those spots are taken so the page stays accurate.
export default function Pricing({ t }: { t: Dict }) {
  const p = t.pricing;
  const href = ctaHref(t.lang);
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{p.title}</h2>
        <p className="mt-4 max-w-xl text-white/60">{p.sub}</p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {p.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <div
              className={cn(
                "glass-card relative flex h-full flex-col p-8",
                plan.kind === "featured" && "border-accent/60 shadow-[0_0_40px_rgba(0,112,243,0.18)]",
                plan.kind === "founding" && "border-dashed border-white/25"
              )}
            >
              {plan.tag && (
                <span
                  className={cn(
                    "absolute -top-3 start-8 rounded-full border bg-background px-3 py-0.5 text-xs",
                    plan.kind === "featured" ? "border-accent/60 text-accent" : "border-white/25 text-white/70"
                  )}
                >
                  {plan.tag}
                </span>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-4 text-5xl font-semibold tracking-tight">
                {plan.showFrom && <span className="me-2 align-middle text-sm font-normal text-white/50">{p.from}</span>}
                <bdi dir="ltr">{plan.price}</bdi>
              </p>
              <p className="mt-3 text-sm text-white/55">{plan.blurb}</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-white/80">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.kind === "featured" ? "default" : "outline"} className="mt-10">
                <a href={href}>{plan.cta}</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-white/50">
          {p.customLead}{" "}
          <a href={href} className="text-accent hover:underline">
            {p.customLink}
          </a>{" "}
          {p.customTail}
        </p>
      </Reveal>
    </section>
  );
}
