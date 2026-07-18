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
    title: "Drone",
    description:
      "Brand and website for a drone startup, blending futuristic visuals with trust-driven design",
    year: "2024",
    role: "Lead Product Designer",
    tags: ["Brand", "Website", "Webflow"],
    image: "/assets/images/section/work-1.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Durotan",
    description:
      "Minimal e-commerce identity and website crafted to highlight timeless fashion essentials",
    year: "2024",
    role: "Lead Product Designer",
    tags: ["Brand", "Website", "Webflow"],
    image: "/assets/images/section/work-2.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Nike Campaign",
    description:
      "Landing experience for Nike’s urban campaign, built to inspire movement and brand loyalty",
    year: "2024",
    role: "Lead Product Designer",
    tags: ["Brand", "Website", "Webflow"],
    image: "/assets/images/section/work-3.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
];
