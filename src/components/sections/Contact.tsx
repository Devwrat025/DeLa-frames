"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
        {submitted && (
          <div className="flat-alert msg-success" style={{ marginBottom: 16 }}>
            Thanks for reaching out! (UI demo — no email is actually sent.)
          </div>
        )}
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
            <button type="submit" className="tf-btn animate-btn animate-dark">
              <span className="text-body-3">Send Message</span>
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
