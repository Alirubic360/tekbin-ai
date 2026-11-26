import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { n8nEn } from "@/lib/service-content2";
import { SERVICE_UPDATED_EN } from "@/lib/service-content";

export const metadata: Metadata = {
  title: n8nEn.meta.title,
  description: n8nEn.meta.description,
  alternates: { canonical: "/n8n-automation-services", languages: { en: "/n8n-automation-services", fa: "/fa/n8n-automation-services", "x-default": "/n8n-automation-services" } },
};

export default function Page() {
  return (
    <LegalPage switchHref="/fa/n8n-automation-services" crumb={{ name: n8nEn.h1, path: "/n8n-automation-services" }} related={[{label: "AI agent development services", href: "/ai-agent-development"}, {label: "Case study: real estate lead agent", href: "/cases/real-estate-lead-agent"}]} title={n8nEn.h1} updated={SERVICE_UPDATED_EN}>
      <LegalIntro text={n8nEn.intro} />
      <LegalClauses clauses={n8nEn.clauses} numbered={false} />
    </LegalPage>
  );
}
