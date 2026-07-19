export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean,
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Enterprise UX & Product Design",
    description:
      "I own end-to-end UX for enterprise B2B, B2C, and SaaS products—from requirement analysis and information architecture through wireframes, high-fidelity UI, and usability testing.",
    tags: ["Interaction Design", "Design Systems", "Usability Testing"],
    images: ["/assets/images/section/service-1.jpg", "/assets/images/section/service-2.jpg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: "AI-Native Design Workflows",
    description:
      "I build Claude-powered design automation using custom Skills, Agents, and MCP integrations with Figma and Freepik—cutting design cycles from days to hours and eliminating repetitive production work.",
    tags: ["Claude Skills & Agents", "Prompt Engineering", "Agentic UX"],
    images: ["/assets/images/section/service-3.jpg", "/assets/images/section/service-4.jpg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Design Systems & Dev Handoff",
    description:
      "I craft scalable component libraries and design tokens, and partner closely with engineering for zero-friction, API-aware handoff across RBAC and multi-persona platforms.",
    tags: ["Design Tokens", "Component Libraries", "Dev Handoff"],
    images: ["/assets/images/section/service-5.jpg", "/assets/images/section/service-6.jpg"],
    expanded: false,
  },
];
