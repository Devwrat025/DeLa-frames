import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on GitHub Pages (no Node server there).
  output: "export",
  // GitHub Pages has no image optimization endpoint; serve images as-is.
  images: {
    unoptimized: true,
  },
  // Export each route as <route>/index.html rather than <route>.html. Without
  // this, a route like /work/cdg emits both cdg.html and a sibling cdg/
  // directory of RSC payloads, and GitHub Pages 404s the /work/cdg/ form
  // because that directory has no index. This makes both URL forms resolve.
  trailingSlash: true,
};

export default nextConfig;
