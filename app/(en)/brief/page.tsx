import type { Metadata } from "next";
import BriefPage from "@/components/BriefPage";
import { briefEn } from "@/lib/brief-content";

export const metadata: Metadata = {
  title: briefEn.metaTitle,
  description: briefEn.metaDescription,
  alternates: { canonical: "/brief", languages: { en: "/brief", fa: "/fa/brief" } },
};

export default function Page() {
  return <BriefPage lang="en" />;
}
