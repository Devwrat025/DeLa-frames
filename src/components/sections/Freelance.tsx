import { profile } from "@/data/profile";

export function Freelance() {
  return (
    <div id="freelance" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-quote" />
        The DeLa Frames Philosophy
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Every pixel, <br className="d-none d-lg-block" />
        perfectly framed.
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        Like a photographer who sees the shot before lifting the camera, I frame every product
        <br className="d-none d-lg-block" /> decision with intention, precision, and care&mdash;that&apos;s the idea behind
        <br className="d-none d-lg-block" /> DeLa Frames, the practice behind this portfolio. <br />
        <br />
        Full-time at KSolves, and open alongside it to select freelance and contract work&mdash;
        <br className="d-none d-lg-block" /> audits, design systems, AI-native workflow builds, or a second pair of
        <br className="d-none d-lg-block" /> expert eyes on something you&apos;re shipping.
      </p>
      <div className="freelance-cta effectFade fadeUp no-div">
        <p className="avaiable-dot text-body-3 text-black-56 fw-medium">
          <span className="dot" />
          <span>{profile.availability}</span>
        </p>
        <a href="#contact" className="tf-btn-action">
          <span className="ic-wrap">
            <i className="icon icon-arrow-right-top" />
          </span>
          <span className="text text-body-3 letter-space--05 fw-medium">
            Let&rsquo;s talk about your project
          </span>
          <span className="ic-wrap">
            <i className="icon icon-arrow-right-top" />
          </span>
        </a>
      </div>
    </div>
  );
}
