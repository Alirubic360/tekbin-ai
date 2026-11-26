import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { LEGAL_UPDATED_FA, termsFa } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: `شرایط استفاده از وب‌سایت و خدمات ایجنت هوش مصنوعی و اتوماسیون ${site.name}: محدوده کار، پرداخت، مالکیت فکری و مسئولیت.`,
  alternates: { canonical: "/fa/terms", languages: { en: "/terms", fa: "/fa/terms" } },
};

export default function FaTermsPage() {
  return (
    <LegalPage t={fa} switchHref="/terms" title="شرایط استفاده" updated={LEGAL_UPDATED_FA}>
      <LegalIntro text={termsFa.intro} />
      <LegalClauses clauses={termsFa.clauses} fa />
    </LegalPage>
  );
}
