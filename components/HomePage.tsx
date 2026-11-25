import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { dicts } from "@/lib/content";
import type { Lang } from "@/lib/site";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  return (
    <>
      <Navbar t={t} />
      <main>
        <Hero t={t} />
        <TechTicker t={t} />
        <Services t={t} />
        <Process t={t} />
        <Pricing t={t} />
        <Faq t={t} />
        <About t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
