import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { LEGAL_UPDATED_EN, privacyEn } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal data on this website and in client projects, including analytics and your rights.`,
  alternates: { canonical: "/privacy", languages: { en: "/privacy", fa: "/fa/privacy" } },
};

export default function PrivacyPage() {
  return (
    <LegalPage switchHref="/fa/privacy" title="Privacy Policy" updated={LEGAL_UPDATED_EN}>
      <LegalIntro text={privacyEn.intro} />
      <LegalClauses clauses={privacyEn.clauses} />
    </LegalPage>
  );
}
