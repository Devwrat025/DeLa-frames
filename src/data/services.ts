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
    title: "Web Design",
    description:
      "I design modern, responsive websites that balance creativity with usability, making sure your digital presence feels seamless and memorable.",
    tags: ["Visual Design", "Interaction Design", "Responsive Layouts"],
    images: ["/assets/images/section/service-1.jpg", "/assets/images/section/service-2.jpg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: "No-Code Development",
    description:
      "Build fast, scalable websites using tools like Framer and Webflow—helping you launch quickly with designs that are easy to edit and maintain.",
    tags: ["Framer Builds", "Webflow Sites", "Scalable Launches"],
    images: ["/assets/images/section/service-3.jpg", "/assets/images/section/service-4.jpg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Brand Identity",
    description:
      "I craft cohesive brand systems with logos, colors, and typography that reflect your values—making your business recognizable and trusted.",
    tags: ["Logo Design", "Visual Systems", "Brand Guidelines"],
    images: ["/assets/images/section/service-5.jpg", "/assets/images/section/service-6.jpg"],
    expanded: false,
  },
];
