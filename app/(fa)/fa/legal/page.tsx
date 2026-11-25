import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { fa } from "@/lib/content";
import { LEGAL_STATUS_FA, LEGAL_UPDATED_FA } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "اسناد حقوقی",
  description: `اسناد حقوقی ${site.name}: شرایط استفاده و سیاست حریم خصوصی.`,
  alternates: { canonical: "/fa/legal", languages: { en: "/legal", fa: "/fa/legal" } },
};

const docs = [
  { href: "/fa/terms", title: "شرایط استفاده", body: "چارچوب استفاده از این وب‌سایت و نحوه‌ی همکاری Tekbin AI با کسب‌وکارها." },
  { href: "/fa/privacy", title: "سیاست حریم خصوصی", body: "چه داده‌ی شخصی‌ای جمع می‌کنیم، چرا، با چه کسانی به اشتراک می‌گذاریم، چه مدت نگه می‌داریم و حقوق شما چیست." },
];

export default function FaLegalIndexPage() {
  return (
    <LegalPage t={fa} switchHref="/legal" title="اسناد حقوقی" updated={LEGAL_UPDATED_FA} status={LEGAL_STATUS_FA}>
      <section>
        <p>این صفحه اسناد حقوقی عمومی {site.name} را فهرست می‌کند. هر دو سند به انگلیسی هم در دسترس‌اند.</p>
      </section>
      <section>
        <ul className="!list-none !ps-0 space-y-4">
          {docs.map((d) => (
            <li key={d.href} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <a href={d.href} className="text-lg font-medium">{d.title}</a>
              <p className="mt-2 text-sm text-white/60">{d.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>توافق‌های پروژه</h2>
        <p>
          هر قرارداد کاری تابع «قرارداد خدمات اصلی» و/یا «توافق پروژه»ی امضاشده است و در صورت نیاز، توافق‌نامه‌ی
          پردازش داده و پیوست هوش مصنوعی و امنیت. این اسناد پیش از شروع کار برای مشتری احتمالی جداگانه فرستاده
          می‌شوند و اینجا منتشر نمی‌شوند. بازدید از وب‌سایت یا ارسال درخواست، قرارداد کاری ایجاد نمی‌کند.
        </p>
      </section>
      <section>
        <h2>ما کی هستیم</h2>
        <p>
          Tekbin AI نام تجاری یک استودیوی مستقل مهندسی هوش مصنوعی و اتوماسیون است. شرکت ثبت‌شده نیست؛ طرف قرارداد در
          هر توافق مشخص می‌شود.
        </p>
      </section>
      <section>
        <h2>تماس</h2>
        <p>پرسش‌های حقوقی و درخواست متن توافق‌ها: {site.email}.</p>
      </section>
    </LegalPage>
  );
}
