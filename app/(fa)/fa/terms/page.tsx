import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro, LegalToc } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { LEGAL_STATUS_FA, LEGAL_UPDATED_FA, termsFa } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: `شرایط حاکم بر وب‌سایت و چارچوب خدمات ${site.name}.`,
  alternates: { canonical: "/fa/terms", languages: { en: "/terms", fa: "/fa/terms" } },
};

export default function FaTermsPage() {
  return (
    <LegalPage t={fa} switchHref="/terms" title="شرایط استفاده" updated={LEGAL_UPDATED_FA} status={LEGAL_STATUS_FA}>
      <LegalIntro text={termsFa.intro} />
      <LegalToc clauses={termsFa.clauses} label="فهرست بندها" fa />
      <LegalClauses clauses={termsFa.clauses} fa />
    </LegalPage>
  );
}
