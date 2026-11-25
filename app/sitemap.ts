export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/fa", "/privacy", "/terms"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
