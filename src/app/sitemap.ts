import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { site } from "@/data/site";

// Required by output: "export": emit a static file at build time.
export const dynamic = "force-static";

// Only the real, canonical pages. The leftover template demo routes
// (/v2, /light, /landing …) are duplicates of the homepage and are
// deliberately excluded and noindexed.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((cs) => ({
      url: `${site.url}/work/${cs.slug}/`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
