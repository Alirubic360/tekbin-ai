import { FileText, MessageSquare, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BriefForm from "@/components/BriefForm";
import { dicts } from "@/lib/content";
import { briefDicts } from "@/lib/brief-content";
import type { Lang } from "@/lib/site";

const icons = [FileText, MessageSquare, ShieldCheck];

export default function BriefPage({ lang }: { lang: Lang }) {
  const t = briefDicts[lang];
  const home = dicts[lang];
  const fa = lang === "fa";
  const num = (i: number) => (fa ? ["۰۱", "۰۲", "۰۳"][i] : String(i + 1).padStart(2, "0"));
  return (
    <>
      <Navbar t={home} switchHref={fa ? "/brief" : "/fa/brief"} />
      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.badge}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{t.title}</h1>
          <p className="mt-5 leading-relaxed text-white/60">{t.intro}</p>
          <ol className="mt-10 space-y-6">
            {t.steps.map((s, i) => {
              const Icon = icons[i];
              return (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#4da3ff]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{num(i)} · {s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-10 text-xs leading-relaxed text-white/55">{t.secretsNote}</p>
        </div>
        <BriefForm t={t} />
      </main>
      <Footer t={home} />
    </>
  );
}
