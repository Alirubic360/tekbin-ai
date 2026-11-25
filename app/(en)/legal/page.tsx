import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_STATUS_EN, LEGAL_UPDATED_EN } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description: `Legal documentation for ${site.name}: Terms of Service and Privacy Policy.`,
  alternates: { canonical: "/legal", languages: { en: "/legal", fa: "/fa/legal" } },
};

const docs = [
  { href: "/terms", title: "Terms of Service", body: "The framework for using this website and for how Tekbin AI engages with business clients." },
  { href: "/privacy", title: "Privacy Policy", body: "What personal data we collect, why, who we share it with, how long we keep it, and your rights." },
];

export default function LegalIndexPage() {
  return (
    <LegalPage switchHref="/fa/legal" title="Legal" updated={LEGAL_UPDATED_EN} status={LEGAL_STATUS_EN}>
      <section>
        <p>
          This page lists the public legal documents of {site.name}. Both documents are also available in Persian.
        </p>
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
        <h2>Project agreements</h2>
        <p>
          Each engagement is governed by a signed Master Service Agreement and/or Project Agreement, and where needed a
          data processing agreement and an AI and security schedule. These are provided to a prospective client
          individually before work starts and are not published here. Visiting this website or sending an enquiry does
          not create an engagement.
        </p>
      </section>
      <section>
        <h2>Who we are</h2>
        <p>
          Tekbin AI is the trade name of an independently operated AI engineering and automation studio. It is not an
          incorporated company; the contracting party is identified in each agreement.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Legal questions and requests for the agreements: {site.email}.</p>
      </section>
    </LegalPage>
  );
}
