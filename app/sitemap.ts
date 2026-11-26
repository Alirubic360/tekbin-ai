export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/fa", "/brief", "/fa/brief", "/privacy", "/terms", "/fa/privacy", "/fa/terms", "/cases/real-estate-lead-agent", "/fa/cases/real-estate-lead-agent", "/payments", "/fa/payments", "/ai-agent-development", "/fa/ai-agent-development"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
