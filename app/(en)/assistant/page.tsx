import type { Metadata } from "next";
import AssistantPage from "@/components/AssistantPage";
import { assistantDicts } from "@/lib/assistant-content";

const t = assistantDicts["en"];

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/assistant", languages: { en: "/assistant", fa: "/fa/assistant", "x-default": "/assistant" } },
};

export default function Page() {
  return <AssistantPage lang="en" />;
}
