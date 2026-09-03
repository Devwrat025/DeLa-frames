import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on GitHub Pages (no Node server there).
  output: "export",
  // GitHub Pages has no image optimization endpoint; serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
