import Reveal from "@/components/Reveal";
import AuditWidget from "@/components/AuditWidget";
import { auditDicts } from "@/lib/audit-content";
import type { Lang } from "@/lib/site";

export default function AuditSection({ lang }: { lang: Lang }) {
  const t = auditDicts[lang];
  return (
    <section id="estimate" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <span className="text-sm text-[#4da3ff]">{t.badge}</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h2>
        <p className="mt-4 text-white/60">{t.sub}</p>
      </Reveal>
      <div className="mt-10">
        <AuditWidget t={t} />
      </div>
    </section>
  );
}
