import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { n8nFa } from "@/lib/service-content2";
import { SERVICE_UPDATED_FA } from "@/lib/service-content";

export const metadata: Metadata = {
  title: n8nFa.meta.title,
  description: n8nFa.meta.description,
  alternates: { canonical: "/fa/n8n-automation-services", languages: { en: "/n8n-automation-services", fa: "/fa/n8n-automation-services", "x-default": "/n8n-automation-services" } },
};

export default function Page() {
  return (
    <LegalPage t={fa} switchHref="/n8n-automation-services" crumb={{ name: n8nFa.h1, path: "/fa/n8n-automation-services" }} related={[{label: "خدمات ساخت ایجنت هوش مصنوعی", href: "/fa/ai-agent-development"}, {label: "نمونه کار: ایجنت غربال سرنخ املاک", href: "/fa/cases/real-estate-lead-agent"}]} title={n8nFa.h1} updated={SERVICE_UPDATED_FA}>
      <LegalIntro text={n8nFa.intro} />
      <LegalClauses clauses={n8nFa.clauses} numbered={false} fa />
    </LegalPage>
  );
}
