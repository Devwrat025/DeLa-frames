export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  { name: "$2.5M+ Revenue Opportunity", publisher: "CDG.io end-to-end UX redesign", year: 2025, image: "/assets/images/section/award-1.jpg" },
  { name: "45% Engagement Growth", publisher: "Single enterprise redesign project", year: 2025, image: "/assets/images/section/award-2.jpg" },
  { name: "75% Repetitive Work Eliminated", publisher: "Claude + MCP design automation", year: 2026, image: "/assets/images/section/award-3.jpg" },
  { name: "60% Client Satisfaction Increase", publisher: "Across enterprise engagements", year: 2025, image: "/assets/images/section/award-4.jpg" },
  { name: "33% Faster Delivery", publisher: "AI-assisted design-to-dev handoff", year: 2026, image: "/assets/images/section/award-5.jpg" },
];
