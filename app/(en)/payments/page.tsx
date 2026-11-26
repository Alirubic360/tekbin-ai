import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { payEn, CASE_UPDATED_EN } from "@/lib/case-content";

export const metadata: Metadata = {
  title: payEn.meta.title,
  description: payEn.meta.description,
  alternates: { canonical: "/payments", languages: { en: "/payments", fa: "/fa/payments", "x-default": "/payments" } },
};

export default function Page() {
  return (
    <LegalPage switchHref="/fa/payments" title={payEn.h1} updated={CASE_UPDATED_EN}>
      <LegalIntro text={payEn.intro} />
      <LegalClauses clauses={payEn.clauses} numbered={false} />
    </LegalPage>
  );
}
