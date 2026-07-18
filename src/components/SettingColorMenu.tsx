"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { colorSwatches } from "@/data/colors";

const STORAGE_KEY = "isak-color-variant";
const DEFAULT_BODY_CLASS = "body-default";

type SettingColorMenuProps = {
    leftBarClass?: string;
};

export function SettingColorMenu({
    leftBarClass = "",
}: SettingColorMenuProps = {}) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const { setTheme } = useTheme();

    const applyBodyClass = (cls: string | null) => {
        const body = document.body;

        body.classList.forEach((c) => {
            if (
                c === DEFAULT_BODY_CLASS ||
                c.startsWith("body-v") ||
                c.startsWith("dark-v")
            ) {
                body.classList.remove(c);
            }
        });

        body.classList.add(cls || DEFAULT_BODY_CLASS);
    };

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved) {
            setActive(saved);
            applyBodyClass(saved);
        } else {
            setActive(null);
            applyBodyClass(null);
        }
    }, []);

    const handleChoose = (bodyClass: string) => {
        const swatch = colorSwatches.find(
            (item) => item.bodyClass === bodyClass
        );

        if (!swatch) return;

        setTheme(swatch.mode);
        setActive(swatch.bodyClass);
        applyBodyClass(swatch.bodyClass);
        localStorage.setItem(STORAGE_KEY, swatch.bodyClass);
    };

    return (
        <>
            <div
                className={`tf-left-bar${leftBarClass ? " " + leftBarClass : ""}`}
            >
                <button
                    type="button"
                    className="btn-setting-color tf-btn-icon style-2"
                    onClick={() => setOpen(true)}
                    aria-label="Open color settings"
                >
                    <i className="icon-gear" />
                </button>
            </div>

            <div
                className={`offcanvas offcanvas-end offcanvas-color${open ? " show" : ""}`}
                id="settingColorMenu"
                style={{
                    visibility: open ? "visible" : "hidden",
                    transform: open ? "none" : undefined,
                }}
            >
                <div className="offcanvas-content">
                    <div className="canvas-header">
                        <h5 className="letter-space--2">Configuration</h5>
                        <span
                            className="icon-close-popup"
                            onClick={() => setOpen(false)}
                            role="button"
                            tabIndex={0}
                        >
                            <i className="icon-close" />
                        </span>
                    </div>

                    <div className="canvas-body">
                        <h6 className="title">Color</h6>
                        <div className="settings-color list-choose">
                            {colorSwatches.map((swatch) => (
                                <button
                                    key={swatch.bodyClass}
                                    type="button"
                                    className={`btn-color theme-${swatch.mode} choose-item${
                                        active === swatch.bodyClass
                                            ? " active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleChoose(swatch.bodyClass)
                                    }
                                >
                                    <span
                                        className={`color ${swatch.className}`}
                                    />
                                    <span className="text">{swatch.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {open && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
