export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/fa", "/brief", "/fa/brief", "/privacy", "/terms", "/legal", "/fa/privacy", "/fa/terms", "/fa/legal"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
