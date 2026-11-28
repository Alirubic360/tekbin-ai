import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { caseFa, CASE_UPDATED_FA } from "@/lib/case-content";

export const metadata: Metadata = {
  title: caseFa.meta.title,
  description: caseFa.meta.description,
  alternates: { canonical: "/fa/cases/real-estate-lead-agent", languages: { en: "/cases/real-estate-lead-agent", fa: "/fa/cases/real-estate-lead-agent", "x-default": "/cases/real-estate-lead-agent" } },
};

export default function Page() {
  return (
    <LegalPage t={fa} switchHref="/cases/real-estate-lead-agent" crumb={{ name: caseFa.h1, path: "/fa/cases/real-estate-lead-agent" }} related={[{ label: "دموی زنده: ایجنت را امتحان کنید", href: "/fa/agent-demo" }]} title={caseFa.h1} updated={CASE_UPDATED_FA}>
      <LegalIntro text={caseFa.intro} />
      <LegalClauses clauses={caseFa.clauses} numbered={false} fa />
    </LegalPage>
  );
}
