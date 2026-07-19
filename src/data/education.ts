export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "Feb 2026 - Present",
    role: "Senior UI/UX Designer, KSolves India Pvt. Ltd.",
    description:
      "Building Claude-powered design automation with custom Skills, Agents, and MCP integrations—cutting landing page design cycles from 1.5 days to under 4 hours and owning end-to-end UX from requirements to dev handoff.",
    icon: { light: "/assets/images/logo/logo-3.svg", dark: "/assets/images/logo/logo-4.svg", width: 32, height: 32 },
  },
  {
    period: "Apr 2025 - Jan 2026",
    role: "Senior UI/UX Designer, Accelyzei Technologies Pvt. Ltd.",
    description:
      "Owned end-to-end UX across enterprise platforms—requirement analysis, IA, user flows, high-fidelity UI, and prototyping—using AI-assisted workflows to validate direction early.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "Feb 2023 - Feb 2025",
    role: "Senior UI Designer, Meraaki Designs",
    description:
      "Led the CDG.io redesign that generated $2.5M+ in revenue opportunity and 45% engagement growth, plus the BGClub.org nonprofit platform redesign, while mentoring junior designers.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: "Apr 2022 - Feb 2023",
    role: "UX/UI Designer, Tru Performance",
    description:
      "Led the design process end-to-end across multiple concurrent client projects, balancing user needs, business goals, and brand consistency from research through developer handoff.",
    icon: { light: "/assets/images/logo/logo-3.svg", dark: "/assets/images/logo/logo-4.svg", width: 32, height: 32 },
  },
];
