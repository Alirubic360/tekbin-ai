import type { Metadata } from "next";
import BriefPage from "@/components/BriefPage";
import { briefFa } from "@/lib/brief-content";

export const metadata: Metadata = {
  title: briefFa.metaTitle,
  description: briefFa.metaDescription,
  alternates: { canonical: "/fa/brief", languages: { en: "/brief", fa: "/fa/brief" } },
};

export default function Page() {
  return <BriefPage lang="fa" />;
}
