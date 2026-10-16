import type { Metadata } from "next";

// Leftover template demo of the homepage. Kept for previewing themes, but
// noindexed so it cannot compete with the real homepage as duplicate content.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

import { HomeShell } from "@/components/HomeShell";

export default function BgItem() {
    return (
        <HomeShell
            variant="v1"
            introVariant="v2"
            aboutVariant="v1"
            defaultMode="light"
            showCloudBg={true}
            bodyClass="counter-scroll body-bg-item body-v1"
            preloaderDark={false}
        />
    );
}
