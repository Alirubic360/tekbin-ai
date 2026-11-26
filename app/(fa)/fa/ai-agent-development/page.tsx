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
    <LegalPage t={fa} switchHref="/ai-agent-development" title={agentFa.h1} updated={SERVICE_UPDATED_FA}>
      <LegalIntro text={agentFa.intro} />
      <LegalClauses clauses={agentFa.clauses} numbered={false} fa />
    </LegalPage>
  );
}
