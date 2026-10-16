import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { JsonLd } from "@/components/JsonLd";
import { caseStudySchema, breadcrumbSchema } from "@/data/structuredData";
import { site } from "@/data/site";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return {};

  const path = `/work/${caseStudy.slug}/`;
  // The hero doubles as the share image so each case study previews as itself.
  const image = caseStudy.heroImage;

  return {
    // The root layout appends the site suffix.
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: caseStudy.title,
      description: caseStudy.summary,
      url: path,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: image, alt: `${caseStudy.client} - ${caseStudy.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return (
    <>
      <JsonLd data={caseStudySchema(caseStudy)} />
      <JsonLd data={breadcrumbSchema(caseStudy)} />
      <CaseStudyDetail caseStudy={caseStudy} />
    </>
  );
}
