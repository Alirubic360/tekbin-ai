import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses personal information.`,
  alternates: { canonical: "/privacy", languages: { en: "/privacy", fa: "/fa/privacy" } },
};

export default function PrivacyPage() {
  return (
    <LegalPage switchHref="/fa/privacy" title="Privacy Policy" updated="November 25, 2026">
      <section>
        <p>
          This policy explains what personal information {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
          collects through {site.url.replace("https://", "")} and how we use it. If you have questions,
          contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li><strong>Information you send us.</strong> If you email us or book a consultation, we receive details you provide, such as your name, email address, company and the project you describe.</li>
          <li><strong>Technical data.</strong> Our hosting provider and any analytics tool we enable may process data such as IP address, browser type, device, pages viewed and referring page.</li>
        </ul>
        <p className="mt-3">This website does not require an account and does not sell products directly.</p>
      </section>
      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To respond to enquiries and schedule consultations.</li>
          <li>To scope, deliver and support projects you engage us for.</li>
          <li>To keep the site secure and understand how it is used.</li>
          <li>To meet legal and accounting obligations.</li>
        </ul>
        <p className="mt-3">We do not sell your personal information.</p>
      </section>
      <section>
        <h2>Third-party services</h2>
        <p>
          We use third parties to operate the site and communicate with you, including a hosting provider,
          a scheduling tool for bookings and an email provider. These providers process data under their own
          privacy policies. If we enable analytics, we will update this page.
        </p>
      </section>
      <section>
        <h2>Client project data</h2>
        <p>
          When we build automations for you, we may access your business data and connected tools. We handle
          that data only to deliver the agreed work, and the terms for it are set out in our written
          agreement with you.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          We keep enquiry and project records only as long as needed for the purposes above or as the law
          requires, then delete or anonymize them.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, delete or export your
          personal information, or to object to certain processing. Email us to make a request and we will
          respond within a reasonable time.
        </p>
      </section>
      <section>
        <h2>Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect information. No method of
          transmission or storage is completely secure.
        </p>
      </section>
      <section>
        <h2>International transfers</h2>
        <p>
          Our providers may process data in countries other than your own. Where required, we rely on
          appropriate safeguards.
        </p>
      </section>
      <section>
        <h2>Children</h2>
        <p>This site is not directed to children under 16, and we do not knowingly collect their information.</p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>We may update this policy. The date above shows when it last changed.</p>
      </section>
    </LegalPage>
  );
}
