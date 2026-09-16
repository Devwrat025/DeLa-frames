"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

// FormSubmit relays the form straight to the inbox below — no backend needed,
// which keeps the site a pure static export. The /ajax/ endpoint returns JSON
// instead of redirecting, so the visitor never leaves the page.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="section-contact flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-send" />
        Contact
      </div>
      <h4 className="s-title letter-space--2 split-text effect-blur-fade">
        If you have a general or project <br className="d-none d-lg-block" />
        enquiry, please drop me an email <br className="d-none d-lg-block" />
        or fill the form - available now
      </h4>
      <form className="form-contact" id="contactform" onSubmit={handleSubmit} noValidate>
        {status === "sent" && (
          <div className="flat-alert msg-success" style={{ marginBottom: 16 }}>
            Thanks for reaching out — your message is on its way. I&rsquo;ll get back to you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="flat-alert msg-error" style={{ marginBottom: 16 }}>
            Something went wrong sending that. Please email me directly at {profile.email}.
          </div>
        )}

        {/* FormSubmit configuration */}
        <input type="hidden" name="_subject" value="New enquiry from delaframes.com" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* Honeypot: bots fill this, humans never see it */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <div className="form-content effectFade fadeUp no-div">
          <fieldset className="field-ip">
            <input type="text" name="name" id="name" placeholder="Your Name *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="email" name="email" id="email" placeholder="Email Address *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="text" name="message" id="message" placeholder="Project Description" />
          </fieldset>
        </div>
        <div className="form-action effectFade fadeUp no-div">
          <div className="send-wrap">
            <button
              type="submit"
              className="tf-btn animate-btn animate-dark"
              disabled={status === "sending"}
            >
              <span className="text-body-3">
                {status === "sending" ? "Sending…" : "Send Message"}
              </span>
            </button>
          </div>
          <a href={`mailto:${profile.email}`} className="text-body-1 link letter-space--2 text-black-72">
            {profile.email}
          </a>
        </div>
      </form>
    </div>
  );
}
