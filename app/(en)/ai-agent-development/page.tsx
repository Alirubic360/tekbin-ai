import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";

import { agentEn, SERVICE_UPDATED_EN } from "@/lib/service-content";

export const metadata: Metadata = {
  title: agentEn.meta.title,
  description: agentEn.meta.description,
  alternates: { canonical: "/ai-agent-development", languages: { en: "/ai-agent-development", fa: "/fa/ai-agent-development", "x-default": "/ai-agent-development" } },
};

export default function Page() {
  return (
    <LegalPage switchHref="/fa/ai-agent-development" title={agentEn.h1} updated={SERVICE_UPDATED_EN}>
      <LegalIntro text={agentEn.intro} />
      <LegalClauses clauses={agentEn.clauses} numbered={false} />
    </LegalPage>
  );
}
