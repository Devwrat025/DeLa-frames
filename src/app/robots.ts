import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Required by output: "export": emit a static file at build time.
export const dynamic = "force-static";

/** Template demo routes that duplicate the homepage. */
export const DEMO_ROUTES = [
  "/v2",
  "/v3",
  "/light",
  "/landing",
  "/bg-item",
  "/bg-video",
  "/bg-video-v2",
  "/v2-light",
  "/v3-light",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: DEMO_ROUTES.map((r) => `${r}/`),
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
