"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let pluginsRegistered = false;
function ensurePlugins() {
    if (pluginsRegistered) return;
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);
    pluginsRegistered = true;
}

/**
 * Port of gsapAnimation.js + main.js + animation-change-text.js (vanilla, no jQuery).
 * Run once after page DOM is ready inside a "use client" page component.
 */
export function useIsakAnimations() {
    const hasRun = useRef(false);

    useEffect(() => {
        // Guard against React StrictMode double-invocation
        if (hasRun.current) return;
        hasRun.current = true;

        ensurePlugins();

        const cleanups: Array<() => void> = [];
        const triggers: ScrollTrigger[] = [];

        /* ---------------- Split-text headline / paragraph animations ---------------- */
        const splitEls = document.querySelectorAll<HTMLElement>(".split-text");
        const splitInstances: SplitText[] = [];
        splitEls.forEach((el) => {
            const inner = el.querySelector("p, a") as HTMLElement | null;
            const target = inner ?? el;
            const hasClass = (c: string) => el.classList.contains(c);

            const split = new SplitText(target, {
                type: "words,chars",
                linesClass: "split-line",
            });
            splitInstances.push(split);
            let setItems: Element[] = split.chars;
            gsap.set(target, { opacity: 1, perspective: 400 });

            const settings: gsap.TweenVars = {
                scrollTrigger: {
                    trigger: target,
                    start: "top 86%",
                    toggleActions: "play none none none",
                },
                duration: 0.9,
                stagger: 0.02,
                ease: "power3.out",
            };

            if (hasClass("effect-fade")) settings.opacity = 0;

            if (
                hasClass("split-lines-transform") ||
                hasClass("split-lines-rotation-x")
            ) {
                split.revert();
                const lineSplit = new SplitText(target, {
                    type: "lines",
                    linesClass: "split-line",
                });
                splitInstances.push(lineSplit);
                setItems = lineSplit.lines;
                settings.opacity = 0;
                settings.stagger = 0.5;
                if (hasClass("split-lines-rotation-x")) {
                    settings.rotationX = -120;
                    settings.transformOrigin = "top center -50";
                } else {
                    settings.yPercent = 100;
                    settings.autoAlpha = 0;
                }
            }

            if (hasClass("effect-blur-fade")) {
                split.revert();
                const lineSplit = new SplitText(target, {
                    type: "lines",
                    linesClass: "split-line",
                });
                splitInstances.push(lineSplit);
                gsap.fromTo(
                    lineSplit.lines,
                    { opacity: 0, filter: "blur(10px)", y: 20 },
                    {
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: target,
                            start: "top 86%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            } else {
                gsap.from(setItems, settings);
            }
        });

        /* ---------------- Scrolling effect (.scrolling-effect) ---------------- */
        document
            .querySelectorAll<HTMLElement>(".scrolling-effect")
            .forEach((el) => {
                const delay = parseFloat(el.dataset.delay || "0");
                const settings: gsap.TweenVars = {
                    scrollTrigger: {
                        trigger: el,
                        scrub: 3,
                        toggleActions: "play none none none",
                        start: "30px bottom",
                        end: "bottom bottom",
                        once: true,
                    },
                    duration: 0.8,
                    ease: "power3.out",
                    delay,
                };

                if (el.classList.contains("effectRight")) {
                    settings.opacity = 0;
                    settings.x = 80;
                }
                if (el.classList.contains("effectLeft")) {
                    settings.opacity = 0;
                    settings.x = -80;
                }
                if (el.classList.contains("effectBottom")) {
                    settings.opacity = 0;
                    settings.y = 100;
                }
                if (el.classList.contains("effectTop")) {
                    settings.opacity = 0;
                    settings.y = -80;
                }
                if (el.classList.contains("effectZoomIn")) {
                    settings.opacity = 0;
                    settings.scale = 0.4;
                }
                gsap.from(el, settings);
            });

        /* ---------------- effectFade fadeUp/fadeDown/fadeLeft/fadeRight/fadeZoom/fadeRotateX ---------------- */
        document.querySelectorAll<HTMLElement>(".effectFade").forEach((el) => {
            const fromVars: gsap.TweenVars = { autoAlpha: 0 };
            const toVars: gsap.TweenVars = {
                autoAlpha: 1,
                duration: 1,
                ease: "power3.out",
            };
            let wrapper: HTMLElement | null = null;
            let startPush = "top 96%";
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
            toVars.delay = delay;

            if (
                el.classList.contains("fadeUp") &&
                !el.classList.contains("no-div")
            ) {
                wrapper = document.createElement("div");
                wrapper.classList.add("overflow-hidden");
                el.parentNode?.insertBefore(wrapper, el);
                wrapper.appendChild(el);
            }
            if (el.classList.contains("no-div")) wrapper = null;

            if (el.classList.contains("fadeUp")) {
                fromVars.y = 50;
                toVars.y = 0;
            } else if (el.classList.contains("fadeDown")) {
                fromVars.y = -50;
                toVars.y = 0;
            } else if (el.classList.contains("fadeLeft")) {
                fromVars.x = -50;
                toVars.x = 0;
            } else if (el.classList.contains("fadeRight")) {
                fromVars.x = 50;
                toVars.x = 0;
            } else if (el.classList.contains("fadeRotateX")) {
                fromVars.rotationX = 45;
                fromVars.yPercent = 100;
                fromVars.transformOrigin = "top center -50";
                toVars.rotationX = 0;
                toVars.yPercent = 0;
                toVars.transformOrigin = "top center -50";
                if (wrapper) wrapper.style.perspective = "400px";
            } else if (el.classList.contains("fadeZoom")) {
                fromVars.scale = 0.8;
                toVars.scale = 1;
            }

            if (el.classList.contains("view-visible")) startPush = "top 101%";

            gsap.set(el, fromVars);
            gsap.to(el, {
                ...toVars,
                scrollTrigger: {
                    trigger: el,
                    start: startPush,
                    toggleActions: "play none none none",
                },
            });
        });

        /* ---------------- Scroll line (timeline progress) ---------------- */
        if (document.querySelector(".scroll-down")) {
            gsap.set(".prg-line", { height: "0%" });
            gsap.to(".prg-line", {
                height: "100%",
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scroll-down",
                    start: "top 40%",
                    end: "bottom 30%",
                    scrub: true,
                },
            });
            document
                .querySelectorAll<HTMLElement>(".timeline-item")
                .forEach((item) => {
                    const t = ScrollTrigger.create({
                        trigger: item,
                        start: "top 30%",
                        onEnter: () => item.classList.add("active"),
                        onLeaveBack: () => item.classList.remove("active"),
                    });
                    triggers.push(t);
                });
        }

        /* ---------------- Tech progress bars ---------------- */
        gsap.utils.toArray<HTMLElement>(".progress-line").forEach((el) => {
            const progress = el.dataset.progress;
            gsap.fromTo(
                el,
                { width: "15%" },
                {
                    width: progress + "%",
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                },
            );
        });

        /* ---------------- Work / sticky-item sidebar active ---------------- */
        const sidebar = document.querySelector(".sidebar-user");
        const works = Array.from(
            document.querySelectorAll<HTMLElement>(".sticky-item"),
        );
        if (sidebar && works.length) {
            // Which card owns the fixed left-hand panel is derived from live
            // geometry instead of per-card enter/leave triggers. The cards are
            // sticky, so they pile up at the same offset and several satisfy
            // their trigger ranges at once, and whichever fired last won, and a
            // card leaving could clear the panel while another was still on
            // screen. Reading the front-most card on each scroll cannot drift.
            const wraps = works.map((work) =>
                work.querySelector<HTMLElement>(".wrap"),
            );
            const desktop = window.matchMedia("(min-width: 992px)");
            let hovered: number | null = null;

            // Where the cards come to rest while stacking.
            const stickyLine = () => {
                const parked = parseFloat(getComputedStyle(works[0]).top);
                return (Number.isFinite(parked) ? parked : 132) + 2;
            };

            const frontCardIndex = (line: number) => {
                let index = -1;
                works.forEach((work, i) => {
                    const rect = work.getBoundingClientRect();
                    // Later cards paint over earlier ones, so the last card
                    // still crossing the sticky line is the one on top.
                    if (rect.top <= line && rect.bottom > line) index = i;
                });
                return index;
            };

            // Pointing at the panel should scroll the panel's own copy when
            // there is more of it than fits, but must not trap the page when
            // everything is already visible, so the Lenis opt-out is applied
            // only while the content genuinely overflows.
            const syncPanelScrollLock = () => {
                wraps.forEach((wrap) => {
                    const content = wrap?.querySelector<HTMLElement>(".content");
                    if (!content) return;
                    content.toggleAttribute(
                        "data-lenis-prevent",
                        content.scrollHeight > content.clientHeight + 4,
                    );
                });
            };

            const syncWorkPanel = () => {
                const line = stickyLine();
                syncPanelScrollLock();
                // Below lg the panel is inline, not a fixed overlay.
                const index = desktop.matches
                    ? (hovered ?? frontCardIndex(line))
                    : -1;
                wraps.forEach((wrap, i) =>
                    wrap?.classList.toggle("active", i === index),
                );

                // Personal details belong to the top of the page only. Once
                // the first work card reaches the line, i.e. once Education &
                // Experience is behind us, they stay hidden for the rest of
                // the scroll, instead of reappearing after the work section.
                sidebar.classList.toggle(
                    "active",
                    works[0].getBoundingClientRect().top <= line,
                );
            };

            // Hovering any card hands the panel to that card, so the left side
            // always describes whatever the cursor is on.
            works.forEach((work, i) => {
                const onPointerEnter = () => {
                    hovered = i;
                    syncWorkPanel();
                };
                const onPointerLeave = () => {
                    if (hovered === i) hovered = null;
                    syncWorkPanel();
                };
                work.addEventListener("mouseenter", onPointerEnter);
                work.addEventListener("mouseleave", onPointerLeave);
                cleanups.push(() => {
                    work.removeEventListener("mouseenter", onPointerEnter);
                    work.removeEventListener("mouseleave", onPointerLeave);
                });
            });

            window.addEventListener("scroll", syncWorkPanel, { passive: true });
            window.addEventListener("resize", syncWorkPanel);
            cleanups.push(() => {
                window.removeEventListener("scroll", syncWorkPanel);
                window.removeEventListener("resize", syncWorkPanel);
            });
            syncWorkPanel();
            // No click-scroll guard needed any more: state is recomputed from
            // geometry on every scroll, so jumping via a nav anchor lands in
            // the correct state instead of needing to be suppressed.
        }

        /* ---------------- Flip Animation (gsap-anime-2) ---------------- */
        const flipContainer = document.querySelector(".gsap-anime-2");
        if (flipContainer) {
            const cards = document.querySelectorAll<HTMLElement>(".flip-image");
            const animateFlip = () => {
                if (!cards.length) return;
                const isMobile = window.innerWidth < 575;
                const cardW = 150;
                const cardH = 150;
                const parent = cards[0].parentElement;
                if (!parent) return;
                const centerX = parent.clientWidth / 2 - cardW / 2;
                const centerY = parent.clientHeight / 2 - cardH / 2;

                cards.forEach((card, i) => {
                    card.style.position = "absolute";
                    card.style.zIndex = String(i + 1);
                });

                const tl = gsap.timeline({
                    defaults: { ease: "power3.out" },
                    scrollTrigger: {
                        trigger: ".gsap-anime-2",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
                tl.to(cards, {
                    x: centerX,
                    y: centerY,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                }).to(cards, {
                    x: (i: number) => {
                        if (i === 0) return centerX - (isMobile ? 150 : 225);
                        if (i === 1) return centerX - (isMobile ? 90 : 135);
                        if (i === 2) return centerX - (isMobile ? 30 : 45);
                        if (i === 3) return centerX + (isMobile ? 30 : 45);
                        if (i === 4) return centerX + (isMobile ? 90 : 135);
                        if (i === 5) return centerX + (isMobile ? 150 : 225);
                        return centerX;
                    },
                    y: (i: number) => {
                        if (i === 0) return centerY - 150;
                        if (i === 1) return centerY - 90;
                        if (i === 2) return centerY - 30;
                        if (i === 3) return centerY + 30;
                        if (i === 4) return centerY + 90;
                        if (i === 5) return centerY + 150;
                        return centerY;
                    },
                    rotation: -10,
                    rotateX: 4,
                    rotateY: 10,
                    duration: 1,
                    ease: "power2.out",
                    delay: 0.3,
                });
            };
            animateFlip();
            const onResize = () => {
                gsap.killTweensOf(".flip-image");
                animateFlip();
            };
            window.addEventListener("resize", onResize);
            cleanups.push(() => window.removeEventListener("resize", onResize));
        }

        /* ---------------- Draw SVG scribble ---------------- */
        if (document.querySelector(".scribble-wrap")) {
            const path = document.getElementById(
                "scribblePath",
            ) as unknown as SVGPathElement | null;
            const svg = document.querySelector(".scribble");
            if (path && svg) {
                const len = path.getTotalLength();
                (svg as HTMLElement).style.setProperty("--len", String(len));
                const io = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            svg.classList.add("is-drawn");
                            io.disconnect();
                        }
                    },
                    { threshold: 0.2 },
                );
                io.observe(svg);
                cleanups.push(() => io.disconnect());
            }
        }

        /* ---------------- Counter ---------------- */
        const counterEls = document.querySelectorAll<HTMLElement>(".counter");
        if (
            document.body.classList.contains("counter-scroll") &&
            counterEls.length
        ) {
            const started = new WeakSet<HTMLElement>();
            const animateNumbers = (root: HTMLElement) => {
                root.querySelectorAll<HTMLElement>(".number").forEach(
                    (numEl) => {
                        const to = parseFloat(numEl.dataset.to || "0");
                        const speed = parseFloat(numEl.dataset.speed || "1000");
                        const obj = { v: 0 };
                        gsap.to(obj, {
                            v: to,
                            duration: speed / 1000,
                            ease: "power1.out",
                            onUpdate: () => {
                                numEl.textContent = String(Math.round(obj.v));
                            },
                        });
                    },
                );
            };
            counterEls.forEach((el) => {
                const t = ScrollTrigger.create({
                    trigger: el,
                    start: "top 95%",
                    once: true,
                    onEnter: () => {
                        if (started.has(el)) return;
                        started.add(el);
                        animateNumbers(el);
                    },
                });
                triggers.push(t);
            });
        }

        /* ---------------- Text-rotate circular text ---------------- */
        document
            .querySelectorAll<HTMLElement>(".text-rotate .text")
            .forEach((circularText) => {
                const text = "dela frames design studio - since 2018 -";
                const chars = text.split("");
                circularText.innerHTML = "";

                const spans = chars.map((char) => {
                    const span = document.createElement("span");
                    span.textContent = char;
                    circularText.appendChild(span);
                    return span;
                });

                // Give each character an arc proportional to how wide it
                // actually renders. A flat 360/length step hands every glyph
                // the same slice, so narrow ones ("I", "1") leave a visible
                // hole and wide ones ("M", "W") crowd their neighbours.
                const layoutRing = () => {
                    const probe = spans[0];
                    if (!probe) return;

                    const cs = getComputedStyle(probe);
                    const ctx = document
                        .createElement("canvas")
                        .getContext("2d");

                    let widths: number[];
                    if (ctx) {
                        ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
                        // The spans are uppercased in CSS, so measure the
                        // glyph that is really drawn, not the source char.
                        const upper = cs.textTransform === "uppercase";
                        const tracking = parseFloat(cs.letterSpacing) || 0;
                        widths = chars.map(
                            (c) =>
                                ctx.measureText(upper ? c.toUpperCase() : c)
                                    .width + tracking,
                        );
                    } else {
                        widths = chars.map(() => 1);
                    }

                    const total = widths.reduce((sum, w) => sum + w, 0);
                    if (!total) return;

                    // Each glyph is anchored at its left edge and hangs
                    // clockwise, so it starts where the previous one ended.
                    let angle = 0;
                    spans.forEach((span, i) => {
                        span.style.transform = `rotate(${angle}deg)`;
                        angle += (widths[i] / total) * 360;
                    });
                };

                layoutRing();
                // Widths measured before the webfont arrives belong to the
                // fallback face, so lay the ring out again once it loads.
                if (document.fonts?.ready) {
                    document.fonts.ready.then(layoutRing).catch(() => {});
                }
            });

        /* ---------------- Active Class for intro title spans ---------------- */
        const introSpans =
            document.querySelectorAll<HTMLElement>(".intro-title span");
        const checkActive = () => {
            introSpans.forEach((el) => {
                if (el.classList.contains("active")) return;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                    setTimeout(() => el.classList.add("active"), 300);
                }
            });
        };
        if (introSpans.length) {
            window.addEventListener("scroll", checkActive);
            checkActive();
            cleanups.push(() =>
                window.removeEventListener("scroll", checkActive),
            );
        }

        /* ---------------- Wrap Active (.wrap-hover-award) ---------------- */
        const wrapAwards =
            document.querySelectorAll<HTMLElement>(".wrap-hover-award");
        const onScrollWrap = () => {
            wrapAwards.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const inView = rect.bottom > 0 && rect.top < window.innerHeight;
                el.classList.toggle("active", inView);
            });
        };
        if (wrapAwards.length) {
            window.addEventListener("scroll", onScrollWrap);
            onScrollWrap();
            cleanups.push(() =>
                window.removeEventListener("scroll", onScrollWrap),
            );
        }

        /* ---------------- Scroll-link active highlight ---------------- */
        const scrollLinks =
            document.querySelectorAll<HTMLAnchorElement>("a.scroll-link");
        const onScrollLink = () => {
            scrollLinks.forEach((a) => {
                const href = a.getAttribute("href");
                if (!href || href === "#") return;
                const target = document.querySelector<HTMLElement>(href);
                if (!target) return;
                const rect = target.getBoundingClientRect();
                const scrollPos = window.scrollY;
                const top = scrollPos + rect.top;
                const bottom = top + target.offsetHeight;
                if (scrollPos < bottom - 20 && scrollPos >= top - 20)
                    a.classList.add("active");
                else a.classList.remove("active");
            });
        };
        if (scrollLinks.length) {
            document.addEventListener("scroll", onScrollLink);
            onScrollLink();
            cleanups.push(() =>
                document.removeEventListener("scroll", onScrollLink),
            );
        }

        /* ---------------- Hover cursor img ---------------- */
        const hoverEls =
            document.querySelectorAll<HTMLElement>(".hover-cursor-img");
        const hoverHandlers: Array<[HTMLElement, (e: Event) => void, string]> =
            [];
        hoverEls.forEach((el) => {
            const img = el.querySelector<HTMLElement>(".hover-image");
            if (!img) return;
            const onMove = (e: MouseEvent) => {
                img.style.top = e.clientY + 20 + "px";
                img.style.left = e.clientX + 20 + "px";
            };
            const onEnter = () => {
                img.style.transform = "scale(1)";
                img.style.opacity = "1";
            };
            const onLeave = () => {
                img.style.transform = "scale(0)";
                img.style.opacity = "0";
            };
            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
            hoverHandlers.push([
                el,
                onMove as unknown as (e: Event) => void,
                "mousemove",
            ]);
            hoverHandlers.push([el, onEnter, "mouseenter"]);
            hoverHandlers.push([el, onLeave, "mouseleave"]);
        });
        cleanups.push(() =>
            hoverHandlers.forEach(([el, fn, type]) =>
                el.removeEventListener(type, fn),
            ),
        );

        /* ---------------- Refresh ScrollTrigger after layout settles ---------------- */
        const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 100);
        cleanups.push(() => clearTimeout(refreshTimer));

        return () => {
            cleanups.forEach((fn) => fn());
            triggers.forEach((t) => t.kill());
            splitInstances.forEach((s) => s.revert());
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
}
