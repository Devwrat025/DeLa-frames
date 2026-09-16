export type CaseStudyPhase = {
  label: string;
  title: string;
  description: string;
  points: string[];
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyColor = {
  name: string;
  hex: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  scope: string[];
  heroImage: string;
  summary: string;
  businessGoal: string;
  problemStatement: string;
  challenges: string[];
  phases: CaseStudyPhase[];
  images: { src: string; caption: string }[];
  typography: { name: string; usage: string }[];
  colors: CaseStudyColor[];
  stats: CaseStudyStat[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cdg",
    title: "Cyber Defense Group — Enterprise UX Redesign",
    client: "Cyber Defense Group (CDG)",
    role: "Senior UI Designer",
    year: "2025",
    scope: ["UX Audit", "Information Architecture", "Design System", "Figma"],
    heroImage: "/assets/images/case-studies/cdg-hero.png",
    summary:
      "CDG is a focused cybersecurity consultancy that partners with clients to deliver a holistic approach to risk and threat management, providing education, maintenance, and support for data protection. The brief was to optimize their website to increase customer engagement and offer a seamless user experience.",
    businessGoal:
      "Provide end-to-end security expertise through the world's best security technology, combined with trusted consulting experience and service excellence.",
    problemStatement:
      "How might we strengthen the structure and improve the navigation and information architecture of the website so users have an intuitive experience—one that generates leads and increases CDG's customer base?",
    challenges: ["Visual Appeal", "Functionality", "Navigation"],
    phases: [
      {
        label: "Discover",
        title: "UX audit & competitor analysis",
        description:
          "Ran a full audit of the existing site using heuristic principles and a competitive analysis against other security consultancies (Praetorian, Chariot, Laminar) to find opportunity areas.",
        points: [
          "Conducted a UX audit and competitor analysis",
          "Gathered insights and requirements for the new site",
          "Focused on meeting user expectations for a seamless experience",
          "Mapped CDG's own expectations for website functionality",
        ],
      },
      {
        label: "Define",
        title: "Information architecture & brand color system",
        description:
          "Converted the audit findings into a coherent site structure—restructuring navigation, defining a sitemap by service category, and refining the color system so it could carry visual hierarchy, not just brand identity.",
        points: [
          "Conducted stakeholder interviews on service offerings and structure",
          "Redesigned the top-level navigation and full sitemap",
          "Refined the color palette to add visual hierarchy",
        ],
      },
      {
        label: "Design",
        title: "Wireframes, typography & functional patterns",
        description:
          "Built low- to high-fidelity wireframes for every core page, paired Montserrat headlines with Nunito body copy, and designed the functional patterns—breadcrumbs, CTA placement, infographics—that the old site was missing.",
        points: [
          "Designed low- to high-fidelity pages for the full site",
          "Restructured the menu into clear, relatable categories",
          "Added breadcrumb navigation for orientation on deep pages",
          "Placed assertive, specific CTAs at the point of decision",
          "Replaced dense text blocks with infographics for key content",
        ],
      },
      {
        label: "Deliver",
        title: "Launch",
        description:
          "Shipped a responsive, user-centric site across desktop, tablet, and mobile after a round of QA across devices.",
        points: [
          "Launched the CDG website as a significant milestone in the engagement",
          "Verified responsive behaviour across devices before handoff",
        ],
      },
    ],
    images: [
      {
        src: "/assets/images/case-studies/cdg-ia-before-after.png",
        caption:
          "Top navigation before and after: from an unlabeled dropdown-heavy menu to clear, categorized service groups.",
      },
      {
        src: "/assets/images/case-studies/cdg-wireframes.png",
        caption: "Low-fidelity wireframes covering the homepage, careers, blog, and service detail pages.",
      },
    ],
    typography: [
      { name: "Montserrat", usage: "Headlines" },
      { name: "Nunito", usage: "Paragraph copy" },
    ],
    colors: [
      { name: "Royal Blue Dark", hex: "#131751" },
      { name: "Light Green", hex: "#00EC72" },
      { name: "Alice Blue", hex: "#E9F2FD" },
      { name: "Mint S Ruby", hex: "#EEF8F2" },
    ],
    stats: [
      { value: "1.9–2.2%", label: "Conversion rate increase in the first 6 months" },
      { value: "40–45%", label: "Increase in engagement rate" },
      { value: "$3M+", label: "Business opportunity through generated leads" },
      { value: "40%", label: "Increase in website traffic within 6 months" },
      { value: "12–15", label: "Quality leads generated per month" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
