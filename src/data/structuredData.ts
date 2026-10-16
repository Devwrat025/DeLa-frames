import { site, absoluteUrl } from "./site";
import { profile } from "./profile";
import { caseStudies, type CaseStudy } from "./caseStudies";
import { educationItems } from "./education";

const PERSON_ID = `${site.url}/#person`;

/** "Senior UI/UX Designer, KSolves India Pvt. Ltd." -> "KSolves India Pvt. Ltd." */
function currentEmployer() {
  const latest = educationItems[0]?.role ?? "";
  const comma = latest.indexOf(",");
  return comma === -1 ? "" : latest.slice(comma + 1).trim();
}

/** The person behind the site, drives rich results for name searches. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.fullName,
    url: site.url,
    image: absoluteUrl("/assets/images/avatar/avatar.png"),
    jobTitle: site.jobTitle,
    description: profile.introBio,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    knowsAbout: [...site.knowsAbout],
    sameAs: profile.socials.map((s) => s.href),
    // The timeline stores "Role, Organisation" in one string and the newest
    // entry first, so the current employer is the tail of the first row.
    worksFor: currentEmployer()
      ? { "@type": "Organization", name: currentEmployer() }
      : undefined,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    alternateName: profile.fullName,
    url: site.url,
    inLanguage: "en-US",
    publisher: { "@id": PERSON_ID },
  };
}

/** A case study, expressed as a described piece of design work. */
export function caseStudySchema(cs: CaseStudy) {
  const url = absoluteUrl(`/work/${cs.slug}/`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: cs.title,
    headline: cs.title,
    description: cs.summary,
    url,
    image: absoluteUrl(cs.heroImage),
    inLanguage: "en-US",
    datePublished: cs.year,
    creator: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    about: cs.client,
    keywords: cs.scope.join(", "),
    isPartOf: { "@id": `${site.url}/#website` },
  };
}

export function breadcrumbSchema(cs: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/#work` },
      {
        "@type": "ListItem",
        position: 3,
        name: cs.client,
        item: absoluteUrl(`/work/${cs.slug}/`),
      },
    ],
  };
}

/** The three case studies, as an ordered portfolio list on the homepage. */
export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work",
    itemListElement: caseStudies.map((cs, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/work/${cs.slug}/`),
      name: cs.title,
    })),
  };
}
