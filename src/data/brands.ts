export type Brand = {
  name: string;
  light: string;
  dark: string;
  width: number;
  height: number;
};

// Real logos of organisations Devwrat has worked with/for, sourced from each
// company's official site. Dark-mode contrast is handled by a CSS filter
// (see .infiniteSlide-brand in _themes.scss) rather than separate dark
// assets, so `dark` intentionally points at the same file as `light`.
export const brands: Brand[] = [
  {
    name: "KSolves India",
    light: "/assets/images/brand/companies/ksolves.webp",
    dark: "/assets/images/brand/companies/ksolves.webp",
    width: 140,
    height: 32,
  },
  {
    name: "Accelyzei Technologies",
    light: "/assets/images/brand/companies/accelyzei.png",
    dark: "/assets/images/brand/companies/accelyzei.png",
    width: 128,
    height: 32,
  },
  {
    name: "Meraaki Designs",
    light: "/assets/images/brand/companies/meraaki-designs.png",
    dark: "/assets/images/brand/companies/meraaki-designs.png",
    width: 78,
    height: 40,
  },
  {
    name: "Tru Performance",
    light: "/assets/images/brand/companies/tru-performance.png",
    dark: "/assets/images/brand/companies/tru-performance.png",
    width: 160,
    height: 24,
  },
  {
    name: "CDG.io",
    light: "/assets/images/brand/companies/cdg-io.svg",
    dark: "/assets/images/brand/companies/cdg-io.svg",
    width: 217,
    height: 20,
  },
  {
    name: "Boys & Girls Clubs of Silicon Valley",
    light: "/assets/images/brand/companies/bgclub.png",
    dark: "/assets/images/brand/companies/bgclub.png",
    width: 65,
    height: 28,
  },
];
