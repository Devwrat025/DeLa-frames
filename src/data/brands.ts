export type Brand = {
  name: string;
  light: string;
  dark: string;
  width: number;
};

export const brands: Brand[] = [
  { name: "Brand 1", light: "/assets/images/brand/brand-1.svg", dark: "/assets/images/brand/brand-1_dark.svg", width: 132 },
  { name: "Brand 2", light: "/assets/images/brand/brand-2.svg", dark: "/assets/images/brand/brand-2_dark.svg", width: 122 },
  { name: "Brand 3", light: "/assets/images/brand/brand-3.svg", dark: "/assets/images/brand/brand-3_dark.svg", width: 125 },
  { name: "Brand 4", light: "/assets/images/brand/brand-4.svg", dark: "/assets/images/brand/brand-4_dark.svg", width: 112 },
];
