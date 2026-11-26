import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalClauses, { LegalIntro } from "@/components/LegalClauses";
import { fa } from "@/lib/content";
import { reFa } from "@/lib/service-content2";
import { SERVICE_UPDATED_FA } from "@/lib/service-content";

export const metadata: Metadata = {
  title: reFa.meta.title,
  description: reFa.meta.description,
  alternates: { canonical: "/fa/ai-automation-for-real-estate", languages: { en: "/ai-automation-for-real-estate", fa: "/fa/ai-automation-for-real-estate", "x-default": "/ai-automation-for-real-estate" } },
};

export default function Page() {
  return (
    <LegalPage t={fa} switchHref="/ai-automation-for-real-estate" crumb={{ name: reFa.h1, path: "/fa/ai-automation-for-real-estate" }} related={[{label: "نمونه کار: ایجنت غربال سرنخ املاک", href: "/fa/cases/real-estate-lead-agent"}, {label: "خدمات ساخت ایجنت هوش مصنوعی", href: "/fa/ai-agent-development"}, {label: "راهنمای پرداخت با USDT", href: "/fa/payments"}]} title={reFa.h1} updated={SERVICE_UPDATED_FA}>
      <LegalIntro text={reFa.intro} />
      <LegalClauses clauses={reFa.clauses} numbered={false} fa />
    </LegalPage>
  );
}
