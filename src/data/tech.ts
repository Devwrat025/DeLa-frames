export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Figma",
    duty: "Leading design tool",
    image: { light: "/assets/images/section/tech-1.svg", width: 19, height: 28 },
    progress: 80,
  },
  {
    name: "Framer",
    duty: "No-code website builder",
    image: {
      light: "/assets/images/section/tech-2.svg",
      dark: "/assets/images/section/tech-2_dark.svg",
      width: 18,
      height: 28,
    },
    progress: 90,
  },
  {
    name: "Adobe Photoshop",
    duty: "Raster graphics editor",
    image: { light: "/assets/images/section/tech-3.svg", width: 29, height: 28 },
    progress: 60,
  },
];
