import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { LEGAL_UPDATED_FA, privacyFa } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "سیاست حریم خصوصی",
  description: `نحوه‌ی گردآوری و استفاده از داده‌های شخصی توسط ${site.name}.`,
  alternates: { canonical: "/fa/privacy", languages: { en: "/privacy", fa: "/fa/privacy" } },
};

export default function FaPrivacyPage() {
  return (
    <LegalPage t={fa} switchHref="/privacy" title="سیاست حریم خصوصی" updated={LEGAL_UPDATED_FA}>
      <LegalIntro text={privacyFa.intro} />
      <LegalClauses clauses={privacyFa.clauses} fa />
    </LegalPage>
  );
}
