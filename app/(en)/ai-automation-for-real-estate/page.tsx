import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { reEn } from "@/lib/service-content2";
import { SERVICE_UPDATED_EN } from "@/lib/service-content";

export const metadata: Metadata = {
  title: reEn.meta.title,
  description: reEn.meta.description,
  alternates: { canonical: "/ai-automation-for-real-estate", languages: { en: "/ai-automation-for-real-estate", fa: "/fa/ai-automation-for-real-estate", "x-default": "/ai-automation-for-real-estate" } },
};

export default function Page() {
  return (
    <LegalPage switchHref="/fa/ai-automation-for-real-estate" crumb={{ name: reEn.h1, path: "/ai-automation-for-real-estate" }} related={[{label: "Case study: real estate lead agent", href: "/cases/real-estate-lead-agent"}, {label: "AI agent development services", href: "/ai-agent-development"}, {label: "How to pay with USDT", href: "/payments"}]} title={reEn.h1} updated={SERVICE_UPDATED_EN}>
      <LegalIntro text={reEn.intro} />
      <LegalClauses clauses={reEn.clauses} numbered={false} />
    </LegalPage>
  );
}
