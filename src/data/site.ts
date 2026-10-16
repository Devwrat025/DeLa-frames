/**
 * Single source of truth for anything that needs the canonical site identity:
 * metadata, Open Graph, sitemap, robots and structured data.
 */
export const site = {
  url: "https://delaframes.com",
  name: "DeLa Frames",
  /** Used as the homepage <title> and the default share title. */
  title: "Devwrat Pandey - Senior UI/UX Designer & AI-Native Design",
  shortTitle: "Devwrat Pandey",
  description:
    "Devwrat Pandey is a Senior UI/UX Designer specialising in enterprise B2B, B2C and SaaS products, AI-native design workflows, and scalable design systems. Based in Pune, India.",
  ogImage: "/assets/images/og/og-default.jpg",
  locale: "en_US",
  jobTitle: "Senior UI/UX Designer",
  city: "Pune",
  region: "Maharashtra",
  country: "IN",
  knowsAbout: [
    "User Experience Design",
    "Enterprise UX",
    "Design Systems",
    "Information Architecture",
    "Usability Testing",
    "AI-Native Design Workflows",
    "Figma",
  ],
} as const;

/** Absolute URL for a site-relative path, honouring the trailing-slash export. */
export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
