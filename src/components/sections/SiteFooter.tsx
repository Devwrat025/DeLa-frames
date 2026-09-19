import { ImageSwitch } from "@/components/ImageSwitch";
import { profile } from "@/data/profile";
import { Contact } from "./Contact";

type SiteFooterProps = {
    /** Case study pages have no #home anchor, so they point at the site root. */
    homeHref?: string;
};

export function SiteFooter({ homeHref = "#home" }: SiteFooterProps = {}) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer-top">
                    <div className="site-footer-brand">
                        <a href={homeHref} className="site-footer-logo" aria-label="Back to top">
                            <ImageSwitch
                                light="/assets/images/logo/dela-mark-light.png"
                                dark="/assets/images/logo/dela-mark-dark.png"
                                width={34}
                                height={30}
                            />
                            <span className="letter-space--2 text-black-72">DeLa Frames</span>
                        </a>
                        <p className="site-footer-desc text-black-56 text-body-3">
                            {profile.introBio}
                        </p>
                        <a
                            href={`mailto:${profile.email}`}
                            className="site-footer-mail text-body-3 fw-medium text-black-72"
                        >
                            {profile.email}
                        </a>
                    </div>

                    <Contact />
                </div>

                <div className="site-footer-bottom">
                    <p className="text-body-3 text-black-56">
                        &copy; 2026 Devwrat Pandey. All rights reserved.
                    </p>

                    <ul className="tf-social-icon-2 site-footer-social d-flex">
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
                </div>
            </div>
        </footer>
    );
}
