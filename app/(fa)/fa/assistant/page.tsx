import type { Metadata } from "next";
import AssistantPage from "@/components/AssistantPage";
import { assistantDicts } from "@/lib/assistant-content";

const t = assistantDicts["fa"];

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/fa/assistant", languages: { en: "/assistant", fa: "/fa/assistant", "x-default": "/assistant" } },
};

export default function Page() {
  return <AssistantPage lang="fa" />;
}
