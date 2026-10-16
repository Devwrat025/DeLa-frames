import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import { site } from "@/data/site";
import "./globals.scss";

export const metadata: Metadata = {
    // Lets every relative OG/canonical URL below resolve to an absolute one,
    // which crawlers and social scrapers require.
    metadataBase: new URL(site.url),
    title: {
        default: site.title,
        // Sub-pages supply just their own name.
        template: `%s - ${site.shortTitle}`,
    },
    description: site.description,
    applicationName: site.name,
    authors: [{ name: "Devwrat Pandey", url: site.url }],
    creator: "Devwrat Pandey",
    publisher: "Devwrat Pandey",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: site.name,
        title: site.title,
        description: site.description,
        url: site.url,
        locale: site.locale,
        images: [
            {
                url: site.ogImage,
                width: 1200,
                height: 630,
                alt: `${site.name} - ${site.jobTitle} portfolio`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: site.title,
        description: site.description,
        images: [site.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/assets/images/logo/favicon-192.png",
        apple: "/assets/images/logo/favicon-apple.png",
    },
    category: "design",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    // No maximumScale/userScalable cap: blocking pinch-zoom is an
    // accessibility failure and is flagged by Lighthouse.
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-US" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <SmoothScroll>
                    <ThemeProvider>{children}</ThemeProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
