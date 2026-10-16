export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  /** Company wordmark, where one exists to show. */
  logo?: string;
  caseStudySlug?: string;
};

export const works: Work[] = [
  {
    title: "CDG.io: Enterprise UX Redesign",
    description:
      "End-to-end UX redesign for a B2B SaaS platform: full audit, IA, and high-fidelity UI that generated $2.5M+ in revenue opportunity, a 30% conversion lift, and 45% engagement growth within 6 months of launch.",
    year: "2025",
    role: "Senior UI Designer",
    tags: ["UX Audit", "Design System", "Figma"],
    image: "/assets/images/section/work-cdg.jpg",
    logo: "/assets/images/brand/companies/cdg-io.svg",
    caseStudySlug: "cdg",
  },
  {
    title: "BGClub.org: Nonprofit Platform Redesign",
    description:
      "Full UX audit and competitor analysis for a Silicon Valley-based nonprofit; remapped information architecture and navigation, and delivered a new UI reflecting the organisation's brand identity.",
    year: "2024",
    role: "Senior UI Designer",
    tags: ["UX Audit", "Information Architecture", "Brand"],
    image: "/assets/images/section/work-bgcsv.jpg",
    logo: "/assets/images/brand/companies/bgclub.png",
    caseStudySlug: "bgcsv",
  },
  {
    title: "PositioningPoint: B2B SaaS Homepage Redesign",
    description:
      "Audited a positioning consultancy's homepage against the Nielsen Norman usability heuristics, found six violations, and rebuilt the page around how a skeptical founder actually evaluates a consultant: pain, then solution, then proof, then process, then action.",
    year: "2025",
    role: "UX/UI Designer",
    tags: ["Heuristic Audit", "Information Architecture", "Figma"],
    image: "/assets/images/case-studies/pp-hero.jpg",
    logo: "/assets/images/brand/companies/positioningpoint.webp",
    caseStudySlug: "positioningpoint",
  },
];
