export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/fa", "/privacy", "/terms", "/fa/privacy", "/fa/terms"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
