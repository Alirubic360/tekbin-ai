import type { Metadata } from "next";
import AgentDemoPage from "@/components/AgentDemoPage";
import { agentDemoDicts } from "@/lib/agent-demo-content";

const t = agentDemoDicts["fa"];

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/fa/agent-demo", languages: { en: "/agent-demo", fa: "/fa/agent-demo", "x-default": "/agent-demo" } },
};

export default function Page() {
  return <AgentDemoPage lang="fa" />;
}
