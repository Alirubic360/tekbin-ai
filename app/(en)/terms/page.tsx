import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { LEGAL_UPDATED_EN, termsEn } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing the ${site.name} website and services.`,
  alternates: { canonical: "/terms", languages: { en: "/terms", fa: "/fa/terms" } },
};

export default function TermsPage() {
  return (
    <LegalPage switchHref="/fa/terms" title="Terms of Service" updated={LEGAL_UPDATED_EN}>
      <LegalIntro text={termsEn.intro} />
      <LegalClauses clauses={termsEn.clauses} />
    </LegalPage>
  );
}
