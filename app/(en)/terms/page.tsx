import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro, LegalToc } from "@/components/LegalClauses";
import { LEGAL_STATUS_EN, LEGAL_UPDATED_EN, termsEn } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing the ${site.name} website and the framework for its services.`,
  alternates: { canonical: "/terms", languages: { en: "/terms", fa: "/fa/terms" } },
};

export default function TermsPage() {
  return (
    <LegalPage switchHref="/fa/terms" title="Terms of Service" updated={LEGAL_UPDATED_EN} status={LEGAL_STATUS_EN}>
      <LegalIntro text={termsEn.intro} />
      <LegalToc clauses={termsEn.clauses} label="Contents" />
      <LegalClauses clauses={termsEn.clauses} />
    </LegalPage>
  );
}
