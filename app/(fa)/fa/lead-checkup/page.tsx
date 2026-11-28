import type { Metadata } from "next";
import CheckupPage from "@/components/CheckupPage";
import { checkupDicts } from "@/lib/checkup-content";

const t = checkupDicts["fa"];

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/fa/lead-checkup", languages: { en: "/lead-checkup", fa: "/fa/lead-checkup", "x-default": "/lead-checkup" } },
};

export default function Page() {
  return <CheckupPage lang="fa" />;
}
