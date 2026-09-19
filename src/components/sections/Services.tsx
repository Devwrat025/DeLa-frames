"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";

export function Services() {
    const [activeId, setActiveId] = useState(services[0].id);
    // A clip that has not been supplied yet falls back to its poster instead
    // of leaving an empty panel.
    const [missing, setMissing] = useState<Record<string, boolean>>({});
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const active = services.find((s) => s.id === activeId) ?? services[0];
    const showVideo = Boolean(active.video) && !missing[active.id];

    // The card is pinned to the left of the viewport on desktop, so it only
    // reveals itself while this section is the one being read.
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin: "-25% 0px -25% 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="service"
            className="section-service flat-spacing"
            ref={sectionRef}
        >
            <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div mb-0">
                <i className="icon icon-service" />
                Services
            </div>

            <div className={`service-media${inView ? " active" : ""}`}>
                <div className="service-media-inner">
                    {showVideo ? (
                        <video
                            key={active.video}
                            className="service-media-asset"
                            src={active.video}
                            poster={active.poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onError={() =>
                                setMissing((prev) => ({
                                    ...prev,
                                    [active.id]: true,
                                }))
                            }
                        />
                    ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            className="service-media-asset"
                            src={active.poster}
                            alt={active.title}
                        />
                    )}
                    <div className="service-media-label">
                        <p className="text-body-3 fw-medium text-white">
                            {active.title}
                        </p>
                    </div>
                </div>
            </div>

            <div id="accordion-service">
                {services.map((s) => {
                    const isOpen = s.id === activeId;

                    return (
                        <div
                            key={s.id}
                            className="service-accordion_item scrolling-effect effectBottom"
                        >
                            <button
                                type="button"
                                className={`accordion-action${isOpen ? "" : " collapsed"}`}
                                onClick={() => setActiveId(s.id)}
                                aria-expanded={isOpen}
                                aria-controls={s.id}
                            >
                                <h4 className="text letter-space--2 text-black-72">
                                    {s.title}
                                </h4>

                                <div className="ic-wrap">
                                    <span className="ic-accordion-custom" />
                                </div>
                            </button>

                            <div
                                id={s.id}
                                className={`collapse${isOpen ? " show" : ""}`}
                            >
                                <div className="accordion-content">
                                    <div className="service-tag">
                                        {s.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="tag-item text-body-3 fw-medium text-black-72"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="service-desc text-black-56">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
