import type { Metadata } from "next";
import { FileText, MessageSquare, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BriefForm from "@/components/BriefForm";

export const metadata: Metadata = {
  title: "Send your project brief",
  description: "Tell us which process you want to automate. We reply in writing with questions or a scoped proposal.",
  alternates: { canonical: "/brief" },
};

const steps = [
  { icon: FileText, title: "You send the brief", body: "The process, the tools involved and what a correct result looks like." },
  { icon: MessageSquare, title: "We reply in writing", body: "Clarifying questions, then a scoped proposal with a fixed price." },
  { icon: ShieldCheck, title: "You approve before we start", body: "Nothing begins until scope, access and price are agreed in writing." },
];

export default function BriefPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Project brief
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Tell us what to automate.
          </h1>
          <p className="mt-5 leading-relaxed text-white/60">
            The more concrete the brief, the better the proposal. Describe the trigger, the steps and the outcome.
            Rough is fine; we will ask for what is missing.
          </p>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                  <s.icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium">{String(i + 1).padStart(2, "0")} · {s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-xs leading-relaxed text-white/55">
            Please do not include passwords, API keys or other secrets in this form. We will agree on access separately.
          </p>
        </div>
        <BriefForm />
      </main>
      <Footer />
    </>
  );
}
