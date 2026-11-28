import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AssistantChat from "@/components/AssistantChat";
import { assistantDicts } from "@/lib/assistant-content";
import { en, fa, type Dict } from "@/lib/content";
import { ctaHref, site, type Lang } from "@/lib/site";

export default function AssistantPage({ lang }: { lang: Lang }) {
  const t = assistantDicts[lang];
  const d: Dict = lang === "fa" ? fa : en;
  const path = lang === "fa" ? "/fa/assistant" : "/assistant";
  const other = lang === "fa" ? "/assistant" : "/fa/assistant";
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
      <main className="mx-auto max-w-4xl px-6 py-20">
        <span className="text-sm text-[#4da3ff]">{t.badge}</span>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{t.h1}</h1>
        <p className="mt-4 max-w-2xl text-white/65">{t.intro}</p>

        <div className="mt-10">
          <AssistantChat t={t} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="glass-card p-6" aria-labelledby="how-h">
            <h2 id="how-h" className="text-lg font-medium">{t.how.title}</h2>
            <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-white/70">
              {t.how.items.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </section>
          <section className="glass-card p-6" aria-labelledby="lim-h">
            <h2 id="lim-h" className="text-lg font-medium">{t.limits.title}</h2>
            <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-white/70">
              {t.limits.items.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </section>
        </div>

        <nav aria-label={t.links.agent} className="mt-10 space-y-2 text-sm">
          <p><a className="text-[#4da3ff] underline underline-offset-2" href={`${pre}/agent-demo`}>{t.links.agent}</a></p>
          <p><a className="text-[#4da3ff] underline underline-offset-2" href={`${pre}/cases/real-estate-lead-agent`}>{t.links.case}</a></p>
          <p><a className="text-[#4da3ff] underline underline-offset-2" href={ctaHref(lang)}>{t.links.brief}</a></p>
        </nav>
      </main>
      <Footer t={d} />
    </>
  );
}
