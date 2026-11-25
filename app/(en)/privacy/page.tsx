import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro, LegalToc } from "@/components/LegalClauses";
import { LEGAL_STATUS_EN, LEGAL_UPDATED_EN, privacyEn } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses personal data.`,
  alternates: { canonical: "/privacy", languages: { en: "/privacy", fa: "/fa/privacy" } },
};

export default function PrivacyPage() {
  return (
    <LegalPage switchHref="/fa/privacy" title="Privacy Policy" updated={LEGAL_UPDATED_EN} status={LEGAL_STATUS_EN}>
      <LegalIntro text={privacyEn.intro} />
      <LegalToc clauses={privacyEn.clauses} label="Contents" />
      <LegalClauses clauses={privacyEn.clauses} />
    </LegalPage>
  );
}
