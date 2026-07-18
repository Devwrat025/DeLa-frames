export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "2023 - Now",
    role: "Independent Designer & No-Code Developer",
    description:
      "Helping startups and creative teams launch websites, scale their brand identity, and build powerful no-code products with Framer.",
    icon: { light: "/assets/images/logo/logo-3.svg", dark: "/assets/images/logo/logo-4.svg", width: 32, height: 32 },
  },
  {
    period: "2021 - 2023",
    role: "Web & Brand Designer at Creative Studio",
    description:
      "Led projects across branding and digital design, delivering interfaces and websites that balanced usability with striking visual impact.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "2019 - 2021",
    role: "Junior Designer at Design Academy",
    description:
      "Gained hands-on experience in brand systems and interface design while working closely with mentors to sharpen creative direction.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
];
