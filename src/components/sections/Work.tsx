import { works } from "@/data/works";
import Image from "next/image";

export function Work() {
    return (
        <div id="work" className="section-work flat-spacing">
            <div className="sect-tag text-caption fw-medium">
                <i className="icon icon-high-light" />
                Work Highlights
            </div>
            <div className="work-list element-sticky">
                {works.map((w, i) => (
                    <div className="sticky-item" key={w.title}>
                        <div className="wg-work">
                            <div className="work-image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image
                                    width={700}
                                    height={427}
                                    src={w.image}
                                    alt={w.title}
                                />
                            </div>
                            <div className="wrap">
                                <div className="work-content">
                                    <div className="w-image">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <Image
                                            width={468}
                                            height={856}
                                            src={w.image}
                                            alt={w.title}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="content-top">
                                            <div className="w-logo">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    loading="lazy"
                                                    width={40}
                                                    height={40}
                                                    src={w.logo}
                                                    alt="logo"
                                                />
                                            </div>
                                            <h4 className="w-title letter-space--2 text-white-72">
                                                {w.title}
                                            </h4>
                                            <p className="w-desc text-white-56 text-body-3">
                                                {w.description}
                                            </p>
                                            <div className="w-highlight">
                                                <div className="box-high">
                                                    <p className="text-body-3 text-white-56">
                                                        Year
                                                    </p>
                                                    <p className="text-body-1 text-white-72">
                                                        {w.year}
                                                    </p>
                                                </div>
                                                <div className="box-high">
                                                    <p className="text-body-3 text-white-56">
                                                        Role
                                                    </p>
                                                    <p className="text-body-1 text-white-72">
                                                        {w.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-tag-list">
                                                {w.tags.map((tag) => (
                                                    <div
                                                        className="tag"
                                                        key={tag}
                                                    >
                                                        <span className="text-body-3 fw-medium text-white-72">
                                                            {tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="content-bottom">
                                            <div className="br-line" />
                                            <div className="group-action">
                                                <a
                                                    href="#"
                                                    className="tf-btn-action style-white"
                                                >
                                                    <span className="ic-wrap">
                                                        <i className="icon icon-arrow-right-top" />
                                                    </span>
                                                    <span className="text text-body-3 letter-space--05 fw-medium">
                                                        Let’s talk
                                                    </span>
                                                    <span className="ic-wrap">
                                                        <i className="icon icon-arrow-right-top" />
                                                    </span>
                                                </a>
                                                <p className="text-white-40">
                                                    <span className="text-white-72">
                                                        {String(i + 1).padStart(
                                                            2,
                                                            "0",
                                                        )}
                                                    </span>{" "}
                                                    /{" "}
                                                    {String(
                                                        works.length,
                                                    ).padStart(2, "0")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
