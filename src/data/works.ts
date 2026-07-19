export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo: string;
};

export const works: Work[] = [
  {
    title: "CDG.io — Enterprise UX Redesign",
    description:
      "End-to-end UX redesign for a B2B SaaS platform: full audit, IA, and high-fidelity UI that generated $2.5M+ in revenue opportunity, a 30% conversion lift, and 45% engagement growth within 6 months of launch.",
    year: "2025",
    role: "Senior UI Designer",
    tags: ["UX Audit", "Design System", "Figma"],
    image: "/assets/images/section/work-1.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "BGClub.org — Nonprofit Platform Redesign",
    description:
      "Full UX audit and competitor analysis for a Silicon Valley-based nonprofit; remapped information architecture and navigation, and delivered a new UI reflecting the organisation's brand identity.",
    year: "2024",
    role: "Senior UI Designer",
    tags: ["UX Audit", "Information Architecture", "Brand"],
    image: "/assets/images/section/work-2.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "AI-Native Design Automation",
    description:
      "Built Claude-powered design automation using custom Skills, Agents, and MCP integrations for Figma and Freepik—cutting design cycles from 1.5 days to under 4 hours and eliminating 75% of repetitive production work.",
    year: "2026",
    role: "Senior UI/UX Designer",
    tags: ["Claude", "MCP", "Design Ops"],
    image: "/assets/images/section/work-3.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
];
