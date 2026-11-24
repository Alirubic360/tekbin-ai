import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Placeholder pricing — confirm real packages before launch.
const plans = [
  {
    name: "Starter",
    price: "$500",
    blurb: "One focused automation, live and documented.",
    features: ["One end-to-end workflow", "Up to 3 tool integrations", "Handover documentation", "Short support window"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$1,000",
    blurb: "A connected system across your operations.",
    features: ["Multiple workflows or an AI agent", "Custom integrations", "Human-in-the-loop controls", "Extended support window"],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Simple, project-based pricing</h2>
        <p className="mt-4 max-w-xl text-white/60">Scope is agreed upfront. Pay for the system, not the hours.</p>
      </Reveal>
      <div className="mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className={cn("glass-card relative flex h-full flex-col p-8", p.featured && "border-accent/60 shadow-[0_0_40px_rgba(0,112,243,0.18)]")}>
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full border border-accent/60 bg-background px-3 py-0.5 text-xs text-accent">
                  Best for scaling teams
                </span>
              )}
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="mt-4 text-5xl font-semibold tracking-tight">{p.price}</p>
              <p className="mt-3 text-sm text-white/55">{p.blurb}</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "default" : "outline"} className="mt-10">
                <a href={site.bookingUrl}>Book a Consultation</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
