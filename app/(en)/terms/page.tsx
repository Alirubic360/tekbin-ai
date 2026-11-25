import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using the ${site.name} website and services.`,
  alternates: { canonical: "/terms", languages: { en: "/terms", fa: "/fa/terms" } },
};

export default function TermsPage() {
  return (
    <LegalPage switchHref="/fa/terms" title="Terms of Service" updated="November 25, 2026">
      <section>
        <p>
          These terms apply to your use of {site.url.replace("https://", "")} and to our general
          approach to services. Paid projects are governed by a separate written agreement or statement of
          work, which takes priority if it conflicts with this page.
        </p>
      </section>
      <section>
        <h2>The website</h2>
        <p>
          The content on this site is for general information and is not a binding offer. Prices shown are
          starting points; final scope and price are agreed in writing before work begins.
        </p>
      </section>
      <section>
        <h2>Services</h2>
        <p>
          We design and build AI automation workflows and integrations. Each project&rsquo;s deliverables,
          timeline, fees and support period are defined in its written scope. Work outside that scope is
          quoted separately.
        </p>
      </section>
      <section>
        <h2>No guaranteed results</h2>
        <p>
          Automation outcomes depend on your data, tools, processes and how the system is used. We do not
          guarantee specific savings, revenue or performance, and AI-generated output may contain errors.
          You are responsible for reviewing outputs before relying on them.
        </p>
      </section>
      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Provide accurate information and timely access needed for the project.</li>
          <li>Make sure you have the right to share any data or accounts you connect.</li>
          <li>Use delivered systems lawfully and in line with the terms of the third-party tools involved.</li>
        </ul>
      </section>
      <section>
        <h2>Third-party tools</h2>
        <p>
          Projects may rely on third-party platforms and APIs. Their availability, pricing and terms are
          outside our control, and their fees are separate from ours unless agreed otherwise.
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          This site&rsquo;s design and content belong to {site.name}. Ownership of project deliverables is set
          out in the project agreement. Third-party names and marks belong to their respective owners, and
          their mention does not imply endorsement or partnership.
        </p>
      </section>
      <section>
        <h2>Confidentiality</h2>
        <p>We treat non-public information you share with us as confidential and use it only for your project.</p>
      </section>
      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, the site and our general information are provided &ldquo;as is&rdquo;,
          and we are not liable for indirect or consequential losses. Liability under a project is limited as
          stated in its written agreement.
        </p>
      </section>
      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms; the date above shows the latest version. Questions:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
