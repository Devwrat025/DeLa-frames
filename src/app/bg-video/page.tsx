import type { Metadata } from "next";

// Leftover template demo of the homepage. Kept for previewing themes, but
// noindexed so it cannot compete with the real homepage as duplicate content.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

import { HomeShell } from "@/components/HomeShell";

export default function BgVideo() {
  return (
    <HomeShell
      defaultMode="dark"
      showVideoBg={true}
      videoSrc="assets/images/overlay-2.mp4"
      bodyClass="counter-scroll video-v1"
    />
  );
}
