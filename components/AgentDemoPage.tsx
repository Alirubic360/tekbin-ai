import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AgentDemo from "@/components/AgentDemo";
import { agentDemoDicts } from "@/lib/agent-demo-content";
import { en, fa, type Dict } from "@/lib/content";
import { ctaHref, site, type Lang } from "@/lib/site";

export default function AgentDemoPage({ lang }: { lang: Lang }) {
  const t = agentDemoDicts[lang];
  const d: Dict = lang === "fa" ? fa : en;
  const path = lang === "fa" ? "/fa/agent-demo" : "/agent-demo";
  const other = lang === "fa" ? "/agent-demo" : "/fa/agent-demo";
  const pre = lang === "fa" ? "/fa" : "";
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: lang === "fa" ? "خانه" : "Home", item: lang === "fa" ? `${site.url}/fa` : site.url },
            { "@type": "ListItem", position: 2, name: t.h1, item: `${site.url}${path}` },
          ],
        }}
      />
      <Navbar t={d} switchHref={other} />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-sm text-[#4da3ff]">{t.badge}</span>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{t.h1}</h1>
        <p className="mt-4 max-w-2xl text-white/65">{t.intro}</p>

        <div className="mt-10">
          <AgentDemo t={t} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="glass-card p-6" aria-labelledby="rules-h">
            <h2 id="rules-h" className="text-lg font-medium">{t.rules.title}</h2>
            <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-white/70">
              {t.rules.items.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </section>
          <section className="glass-card p-6" aria-labelledby="honest-h">
            <h2 id="honest-h" className="text-lg font-medium">{t.honest.title}</h2>
            <h3 className="mt-3 text-sm font-medium text-emerald-300">{t.honest.realTitle}</h3>
            <ul className="mt-1 list-disc space-y-1.5 ps-5 text-sm leading-relaxed text-white/70">
              {t.honest.real.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <h3 className="mt-4 text-sm font-medium text-amber-300">{t.honest.simTitle}</h3>
            <ul className="mt-1 list-disc space-y-1.5 ps-5 text-sm leading-relaxed text-white/70">
              {t.honest.simulated.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </section>
        </div>

        <nav aria-label={t.links.caseStudy} className="mt-10 space-y-2 text-sm">
          <p><a className="text-[#4da3ff] underline underline-offset-2" href={`${pre}/cases/real-estate-lead-agent`}>{t.links.caseStudy}</a></p>
          <p>
            <a className="text-[#4da3ff] underline underline-offset-2" href="/downloads/tekbin-lead-qualifier.workflow.json" download>{t.links.workflow}</a>
            <span className="mt-1 block text-xs text-white/55">{t.links.workflowNote}</span>
          </p>
          <p><a className="text-[#4da3ff] underline underline-offset-2" href={`${pre}/lead-checkup`}>{t.links.checkup}</a></p>
          <p><a className="text-[#4da3ff] underline underline-offset-2" href={ctaHref(lang)}>{t.links.brief}</a></p>
        </nav>
      </main>
      <Footer t={d} />
    </>
  );
}
