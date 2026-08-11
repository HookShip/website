import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), priority: 1, changeFrequency: "weekly" },
    {
      url: absoluteUrl("/evaluate"),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: absoluteUrl("/status"),
      priority: 0.8,
      changeFrequency: "weekly",
    },
  ];
}
