"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";

/**
 * Glassmorphic pill navigation for sub-pages (case studies).
 * Home shortcut on the left, the full site menu behind a hamburger on the right.
 * Nav hrefs are rewritten to "/#anchor" so they jump back to the one-pager.
 */
export function PillNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="pill-nav">
        <div className="pill-nav-inner">
          <a href="/" className="pill-nav-home" aria-label="Back to home">
            <i className="icon icon-home" />
            <span className="text-body-3 fw-medium d-none d-sm-inline">Home</span>
          </a>

          <span className="pill-nav-divider" />

          <button
            type="button"
            className="pill-nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <div className={`btn-mobile-menu${open ? " close" : ""}`}>
              <span />
            </div>
          </button>
        </div>

        <div className={`pill-nav-menu${open ? " open" : ""}`}>
          <ul>
            {navItems.map((item, i) => (
              <li key={item.href + i}>
                <a
                  href={`/${item.href}`}
                  className="pill-nav-link text-body-3 text-black-72 fw-medium"
                  onClick={() => setOpen(false)}
                >
                  <i className={`icon ${item.icon}`} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`pill-nav-backdrop${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
