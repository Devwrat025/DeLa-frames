"use client";

import { useRef } from "react";
import { works } from "@/data/works";

/**
 * Horizontally scrollable card rail of the other projects, shown at the
 * bottom of a case study page. Projects that already have a written case
 * study link straight to it; the rest link back to the work section.
 */
export function CaseStudyCarousel({ currentSlug }: { currentSlug: string }) {
  const railRef = useRef<HTMLDivElement>(null);

  const others = works.filter((w) => w.caseStudySlug !== currentSlug);

  if (others.length === 0) return null;

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".cs-rail-card");
    const step = card ? card.offsetWidth + 20 : 340;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="cs-rail">
      <div className="cs-rail-head">
        <h4 className="letter-space--2 text-black-72">More work</h4>
        <div className="group-btn">
          <button
            type="button"
            className="sw-nav link"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
          >
            <i className="icon icon-arrow-caret-left" />
          </button>
          <button
            type="button"
            className="sw-nav link"
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
          >
            <i className="icon icon-arrow-caret-right" />
          </button>
        </div>
      </div>

      <div className="cs-rail-track" ref={railRef}>
        {others.map((w) => {
          const href = w.caseStudySlug ? `/work/${w.caseStudySlug}` : "/#work";

          return (
            <a className="cs-rail-card" href={href} key={w.title}>
              <div className="cs-rail-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src={w.image} alt={w.title} />
              </div>
              <div className="cs-rail-body">
                <p className="cs-rail-year text-body-3 text-black-56">
                  {w.year} &middot; {w.role}
                </p>
                <h6 className="cs-rail-title letter-space--2 text-black-72">{w.title}</h6>
                <div className="cs-tag-list">
                  {w.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="cs-tag text-body-3 text-black-72 fw-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="cs-rail-cta text-body-3 fw-medium">
                  {w.caseStudySlug ? "View case study" : "See project"}
                  <i className="icon icon-arrow-right-top" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
