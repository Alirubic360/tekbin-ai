import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CheckupWidget from "@/components/CheckupWidget";
import { checkupDicts } from "@/lib/checkup-content";
import { en, fa, type Dict } from "@/lib/content";
import { site, type Lang } from "@/lib/site";

export default function CheckupPage({ lang }: { lang: Lang }) {
  const t = checkupDicts[lang];
  const d: Dict = lang === "fa" ? fa : en;
  const path = lang === "fa" ? "/fa/lead-checkup" : "/lead-checkup";
  const other = lang === "fa" ? "/lead-checkup" : "/fa/lead-checkup";
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
      <main className="mx-auto max-w-3xl px-6 py-20">
        <span className="text-sm text-[#4da3ff]">{t.badge}</span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{t.h1}</h1>
        <p className="mt-4 text-white/65">{t.intro}</p>
        <p className="mt-2 text-xs text-white/55">{t.privacyNote}</p>
        <div className="mt-10">
          <CheckupWidget t={t} />
        </div>
      </main>
      <Footer t={d} />
    </>
  );
}
