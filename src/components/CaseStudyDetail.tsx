"use client";

import Image from "next/image";
import { ImageSwitch } from "@/components/ImageSwitch";
import { Footer } from "@/components/sections/Footer";
import { useBodyThemeClass } from "@/hooks/useBodyThemeClass";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  useBodyThemeClass({ defaultMode: "dark" });

  return (
    <>
      <div className="case-study-page">
        <div className="cs-topbar">
          <a href="/" className="cs-logo" aria-label="DeLa Frames home">
            <ImageSwitch
              light="/assets/images/logo/dela-mark-light.png"
              dark="/assets/images/logo/dela-mark-dark.png"
              width={32}
              height={28}
            />
          </a>
          <a href="/#work" className="cs-back text-body-3 text-black-72 fw-medium">
            <i className="icon icon-arrow-right-top" />
            Back to work
          </a>
        </div>

        <div className="cs-hero">
          <div className="sect-tag text-caption fw-medium">
            <i className="icon icon-high-light" />
            Case Study &middot; Website Revamp
          </div>
          <h1 className="h3 letter-space--2 text-black-72">{caseStudy.title}</h1>
          <div className="cs-hero-image">
            <Image
              width={1200}
              height={526}
              src={caseStudy.heroImage}
              alt={`${caseStudy.client} website`}
              priority
            />
          </div>
        </div>

        <div className="cs-meta">
          <div className="cs-meta-item">
            <p className="cs-meta-label text-body-3 text-black-56">Client</p>
            <p className="text-body-1 text-black-72 fw-medium">{caseStudy.client}</p>
          </div>
          <div className="cs-meta-item">
            <p className="cs-meta-label text-body-3 text-black-56">Role</p>
            <p className="text-body-1 text-black-72 fw-medium">{caseStudy.role}</p>
          </div>
          <div className="cs-meta-item">
            <p className="cs-meta-label text-body-3 text-black-56">Year</p>
            <p className="text-body-1 text-black-72 fw-medium">{caseStudy.year}</p>
          </div>
          <div className="cs-meta-item">
            <p className="cs-meta-label text-body-3 text-black-56">Scope</p>
            <div className="cs-tag-list">
              {caseStudy.scope.map((s) => (
                <span key={s} className="cs-tag text-body-3 text-black-72 fw-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-section">
          <h4 className="cs-block-title letter-space--2 text-black-72">Overview</h4>
          <p className="text-black-56">{caseStudy.summary}</p>
        </div>

        <div className="cs-two-col">
          <div>
            <h6 className="cs-block-title letter-space--2 text-black-72">Client&rsquo;s business goal</h6>
            <p className="text-black-56 text-body-3">{caseStudy.businessGoal}</p>
          </div>
          <div>
            <h6 className="cs-block-title letter-space--2 text-black-72">Problem statement</h6>
            <p className="text-black-56 text-body-3">{caseStudy.problemStatement}</p>
          </div>
        </div>

        <div className="cs-section">
          <h6 className="cs-block-title letter-space--2 text-black-72">Challenges</h6>
          <div className="cs-tag-list">
            {caseStudy.challenges.map((c) => (
              <span key={c} className="cs-tag text-body-3 text-black-72 fw-medium">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h4 className="cs-block-title letter-space--2 text-black-72">Process</h4>
          <div className="cs-phase-list">
            {caseStudy.phases.map((phase) => (
              <div className="cs-phase-item" key={phase.label}>
                <div className="cs-phase-dot" />
                <p className="cs-phase-label text-body-3 fw-medium">{phase.label}</p>
                <h6 className="cs-phase-title letter-space--2 text-black-72">{phase.title}</h6>
                <p className="cs-phase-desc text-black-56 text-body-3">{phase.description}</p>
                <ul className="cs-phase-points text-black-56 text-body-3">
                  {phase.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {caseStudy.images.length > 0 && (
          <div className="cs-section">
            <h4 className="cs-block-title letter-space--2 text-black-72">Artifacts</h4>
            {caseStudy.images.map((img) => (
              <div className="cs-image-block" key={img.src}>
                <div className="cs-image-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={img.src} alt={img.caption} />
                </div>
                <p className="text-body-3 text-black-56">{img.caption}</p>
              </div>
            ))}
          </div>
        )}

        <div className="cs-two-col">
          <div>
            <h6 className="cs-block-title letter-space--2 text-black-72">Typography</h6>
            <div className="cs-type-grid">
              {caseStudy.typography.map((t) => (
                <div className="cs-type-item" key={t.name}>
                  <p className="text-body-1 text-black-72 fw-medium">{t.name}</p>
                  <p className="text-body-3 text-black-56">{t.usage}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h6 className="cs-block-title letter-space--2 text-black-72">Colors</h6>
            <div className="cs-color-grid">
              {caseStudy.colors.map((c) => (
                <div className="cs-color-chip" key={c.hex}>
                  <div className="cs-color-swatch" style={{ backgroundColor: c.hex }} />
                  <p className="text-body-3 text-black-72 fw-medium">{c.name}</p>
                  <p className="text-body-3 text-black-56">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-section">
          <h4 className="cs-block-title letter-space--2 text-black-72">Results</h4>
          <div className="cs-stats-grid">
            {caseStudy.stats.map((s) => (
              <div key={s.label}>
                <p className="cs-stat-value h4 font-2 letter-space--2 text-black-72">{s.value}</p>
                <p className="text-body-3 text-black-56">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-cta">
          <p className="text-black-72 fw-medium">Have a similar project in mind?</p>
          <a href="/#contact" className="tf-btn-action">
            <span className="ic-wrap">
              <i className="icon icon-arrow-right-top" />
            </span>
            <span className="text text-body-3 letter-space--05 fw-medium">Let&rsquo;s talk</span>
            <span className="ic-wrap">
              <i className="icon icon-arrow-right-top" />
            </span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
