import { ImageSwitch } from "@/components/ImageSwitch";

export function Footer() {
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">“</span>
          Design is not just what it looks like and feels like. Design is how it works.
          <span className="text-black-56">“</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">Steve Jobs</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <a href="#" className="f-logo effectFade fadeZoom">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/logo.svg"
              dark="/assets/images/logo/logo-2.svg"
              width={32}
              height={32}
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          All rights reserved <br />© 2026 Devwrat Pandey
        </p>
      </div>
    </div>
  );
}
