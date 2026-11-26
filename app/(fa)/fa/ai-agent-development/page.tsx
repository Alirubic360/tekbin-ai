import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { agentFa, SERVICE_UPDATED_FA } from "@/lib/service-content";

export const metadata: Metadata = {
  title: agentFa.meta.title,
  description: agentFa.meta.description,
  alternates: { canonical: "/fa/ai-agent-development", languages: { en: "/ai-agent-development", fa: "/fa/ai-agent-development", "x-default": "/ai-agent-development" } },
};

export default function Page() {
  return (
    <LegalPage t={fa} switchHref="/ai-agent-development" crumb={{ name: agentFa.h1, path: "/fa/ai-agent-development" }} related={[{label: "خدمات اتوماسیون n8n", href: "/fa/n8n-automation-services"}, {label: "اتوماسیون هوش مصنوعی برای آژانس‌های املاک", href: "/fa/ai-automation-for-real-estate"}, {label: "نمونه کار: ایجنت غربال سرنخ املاک", href: "/fa/cases/real-estate-lead-agent"}]} title={agentFa.h1} updated={SERVICE_UPDATED_FA}>
      <LegalIntro text={agentFa.intro} />
      <LegalClauses clauses={agentFa.clauses} numbered={false} fa />
    </LegalPage>
  );
}
