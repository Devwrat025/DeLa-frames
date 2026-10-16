export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  /**
   * Clip shown in the big card on the left when this service is selected.
   * Drop the file at the path below and it plays automatically; until then
   * the component falls back to `poster`, so a missing file is never a
   * broken panel.
   */
  video?: string;
  /** Still shown before the clip loads, and instead of it if it is missing. */
  poster: string;
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Enterprise UX & Product Design",
    description:
      "I own end-to-end UX for enterprise B2B, B2C, and SaaS products, from requirement analysis and information architecture through wireframes, high-fidelity UI, and usability testing.",
    tags: ["Interaction Design", "Design Systems", "Usability Testing"],
    video: "/assets/videos/services/service-1.mp4",
    poster: "/assets/images/section/service-ux.jpg",
  },
  {
    id: "service-2",
    title: "AI-Native Design Workflows",
    description:
      "I build Claude-powered design automation using custom Skills, Agents, and MCP integrations with Figma and Freepik, cutting design cycles from days to hours and eliminating repetitive production work.",
    tags: ["Claude Skills & Agents", "Prompt Engineering", "Agentic UX"],
    video: "/assets/videos/services/service-2.mp4",
    poster: "/assets/images/section/service-ai.jpg",
  },
  {
    id: "service-3",
    title: "Design Systems & Dev Handoff",
    description:
      "I craft scalable component libraries and design tokens, and partner closely with engineering for zero-friction, API-aware handoff across RBAC and multi-persona platforms.",
    tags: ["Design Tokens", "Component Libraries", "Dev Handoff"],
    video: "/assets/videos/services/service-3.mp4",
    poster: "/assets/images/section/service-systems.jpg",
  },
];
