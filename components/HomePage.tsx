import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import About from "@/components/About";
import AuditSection from "@/components/AuditSection";
import UnderTheHood from "@/components/UnderTheHood";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { dicts } from "@/lib/content";
import { site, type Lang } from "@/lib/site";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const pageUrl = lang === "fa" ? `${site.url}/fa` : site.url;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        description: site.description,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: ["en", "fa"],
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: lang,
        mainEntity: t.faq.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      },
    ],
  };
  return (
    <>
      <JsonLd data={graph} />
      <Navbar t={t} />
      <main>
        <Hero t={t} />
        <TechTicker t={t} />
        <Services t={t} />
        <Process t={t} />
        <UnderTheHood lang={lang} />
        <AuditSection lang={lang} />
        <Pricing t={t} />
        <Faq t={t} />
        <Team t={t} />
        <About t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
