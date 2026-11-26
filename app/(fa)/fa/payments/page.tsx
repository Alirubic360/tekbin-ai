import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { payFa, CASE_UPDATED_FA } from "@/lib/case-content";

export const metadata: Metadata = {
  title: payFa.meta.title,
  description: payFa.meta.description,
  alternates: { canonical: "/fa/payments", languages: { en: "/payments", fa: "/fa/payments", "x-default": "/payments" } },
};

export default function Page() {
  return (
    <LegalPage t={fa} switchHref="/payments" title={payFa.h1} updated={CASE_UPDATED_FA}>
      <LegalIntro text={payFa.intro} />
      <LegalClauses clauses={payFa.clauses} numbered={false} fa />
    </LegalPage>
  );
}
