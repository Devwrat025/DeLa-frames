"use client";

import { useEffect, useState } from "react";
import { ImageSwitch } from "./ImageSwitch";
import { profile } from "@/data/profile";

/**
 * Fills the left column for the stretch of page that would otherwise leave it
 * empty — Tech Stack through The DeLa Frames Philosophy. Handed over from the
 * services panel above it, and released before the contact form itself.
 */
export function ContactCard() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const sync = () => {
            const start = document.querySelector("#tech");
            // The quote banner marks where the layout stops being an offset
            // column and goes full width.
            const fullWidthFrom =
                document.querySelector("#quote") ??
                document.querySelector(".site-footer");

            if (!start) {
                setActive(false);
                return;
            }

            // Same reference line the work and services panels hand off at, so
            // only one card ever occupies the left column.
            const line = 134;
            const started = start.getBoundingClientRect().top <= line;

            // Release as soon as the full-width region appears, not when the
            // philosophy section clears the line. This card is fixed and spans
            // the viewport height, so anything full width that scrolls into
            // view runs underneath it.
            const fullWidthVisible = fullWidthFrom
                ? fullWidthFrom.getBoundingClientRect().top <=
                  window.innerHeight
                : false;

            setActive(started && !fullWidthVisible);
        };

        sync();
        window.addEventListener("scroll", sync, { passive: true });
        window.addEventListener("resize", sync);

        return () => {
            window.removeEventListener("scroll", sync);
            window.removeEventListener("resize", sync);
        };
    }, []);

    return (
        <div className={`contact-card${active ? " active" : ""}`}>
            <div className="contact-card-inner">
                <div className="contact-card-logo">
                    <ImageSwitch
                        light="/assets/images/logo/dela-mark-light.png"
                        dark="/assets/images/logo/dela-mark-dark.png"
                        width={40}
                        height={35}
                    />
                </div>

                <p className="avaiable-dot text-body-3 text-black-56 fw-medium">
                    <span className="dot" />
                    <span>{profile.availability}</span>
                </p>

                <h5 className="contact-card-title letter-space--2 text-black-72">
                    Let&rsquo;s talk
                </h5>

                <p className="contact-card-desc text-black-56 text-body-3">
                    Got a project, a role, or a question about how any of this was
                    built? Email is the quickest way to reach me.
                </p>

                <a
                    href={`mailto:${profile.email}`}
                    className="contact-card-mail text-body-3 fw-medium text-black-72"
                >
                    {profile.email}
                </a>

                <div className="br-line" />

                <ul className="tf-social-icon-2 contact-card-social d-flex">
                    {profile.socials.map((s) => (
                        <li key={s.label}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                            >
                                <i className={`icon ${s.icon}`} />
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="tf-btn-action contact-card-cta">
                    <span className="ic-wrap">
                        <i className="icon icon-arrow-right-top" />
                    </span>
                    <span className="text text-body-3 letter-space--05 fw-medium">
                        Start a conversation
                    </span>
                    <span className="ic-wrap">
                        <i className="icon icon-arrow-right-top" />
                    </span>
                </a>
            </div>
        </div>
    );
}
