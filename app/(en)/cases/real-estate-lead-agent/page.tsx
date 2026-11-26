import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { caseEn, CASE_UPDATED_EN } from "@/lib/case-content";

export const metadata: Metadata = {
  title: caseEn.meta.title,
  description: caseEn.meta.description,
  alternates: { canonical: "/cases/real-estate-lead-agent", languages: { en: "/cases/real-estate-lead-agent", fa: "/fa/cases/real-estate-lead-agent", "x-default": "/cases/real-estate-lead-agent" } },
};

export default function Page() {
  return (
    <LegalPage switchHref="/fa/cases/real-estate-lead-agent" title={caseEn.h1} updated={CASE_UPDATED_EN}>
      <LegalIntro text={caseEn.intro} />
      <LegalClauses clauses={caseEn.clauses} numbered={false} />
    </LegalPage>
  );
}
