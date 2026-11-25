import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Prices are starting points; final scope and price are agreed in writing.
// NOTE: the Founding Client offer is limited to the first three client projects.
// Remove or update it once those spots are taken so the page stays accurate.
const plans = [
  {
    name: "Starter",
    price: "$1,000",
    blurb: "One focused automation, live and documented.",
    features: ["One end-to-end workflow", "Up to 3 tool integrations", "Handover documentation", "Short support window"],
    featured: false,
    founding: false,
  },
  {
    name: "Pro",
    price: "$3,000",
    blurb: "A connected system across your operations.",
    features: [
      "Multiple workflows or an AI agent",
      "Custom integrations",
      "Human-in-the-loop controls",
      "Extended support window",
      "Optional monthly support plan",
    ],
    featured: true,
    founding: false,
  },
  {
    name: "Founding Client",
    price: "20% off",
    blurb: "For our first three client projects, on a Starter or Pro scope.",
    features: [
      "Same scope and quality as the standard plan",
      "Fixed scope and price agreed in writing",
      "Staged payments: part at start, part on delivery",
      "In return: your written permission to share the project as a case study",
    ],
    featured: false,
    founding: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Simple, project-based pricing</h2>
        <p className="mt-4 max-w-xl text-white/60">
          Prices are starting points. Scope and final price are agreed in writing before any work begins.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div
              className={cn(
                "glass-card relative flex h-full flex-col p-8",
                p.featured && "border-accent/60 shadow-[0_0_40px_rgba(0,112,243,0.18)]",
                p.founding && "border-dashed border-white/25"
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full border border-accent/60 bg-background px-3 py-0.5 text-xs text-accent">
                  Best for scaling teams
                </span>
              )}
              {p.founding && (
                <span className="absolute -top-3 left-8 rounded-full border border-white/25 bg-background px-3 py-0.5 text-xs text-white/70">
                  Limited to 3 projects
                </span>
              )}
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="mt-4 text-5xl font-semibold tracking-tight">
                {!p.founding && <span className="mr-2 align-middle text-sm font-normal text-white/50">from</span>}
                {p.price}
              </p>
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
                <a href={site.bookingUrl}>{p.founding ? "Apply as a Founding Client" : "Book a Consultation"}</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-white/50">
          Larger or more complex project?{" "}
          <a href={site.bookingUrl} className="text-accent hover:underline">
            Tell us about it
          </a>{" "}
          and we will scope a custom quote.
        </p>
      </Reveal>
    </section>
  );
}
