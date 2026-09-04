export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Figma",
    duty: "Leading design & prototyping tool",
    image: { light: "/assets/images/tools/figma.svg", width: 28, height: 28 },
    progress: 95,
  },
  {
    name: "Claude (Skills, Agents, MCP)",
    duty: "AI-native design automation",
    image: { light: "/assets/images/tools/claude.svg", width: 28, height: 28 },
    progress: 90,
  },
  {
    name: "FigJam",
    duty: "Workshops, flows & IA mapping",
    image: { light: "/assets/images/tools/figjam.svg", width: 19, height: 28 },
    progress: 85,
  },
  {
    name: "Adobe Photoshop",
    duty: "Raster graphics & visual design",
    image: { light: "/assets/images/tools/photoshop.png", width: 28, height: 28 },
    progress: 80,
  },
  {
    name: "Webflow",
    duty: "Dev-aligned, no-code builds",
    image: { light: "/assets/images/tools/webflow.svg", width: 28, height: 28 },
    progress: 75,
  },
];
