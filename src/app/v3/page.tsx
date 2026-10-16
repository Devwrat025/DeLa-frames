import type { Metadata } from "next";

// Leftover template demo of the homepage. Kept for previewing themes, but
// noindexed so it cannot compete with the real homepage as duplicate content.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

import { HomeShell } from "@/components/HomeShell";

export default function HomeV3() {
  return (
    <HomeShell
      variant="v3"
      defaultMode="dark"
      bodyClass="counter-scroll"
    />
  );
}
