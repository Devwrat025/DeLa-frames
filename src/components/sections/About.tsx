import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Designing brands and <br className="d-none d-lg-block" />
        websites with clarity, creativity, <br className="d-none d-lg-block" />
        and no-code speed
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        I combine web design, brand identity, and no-code development to help
        <br className="d-none d-lg-block" /> businesses move faster while staying true to their personality. <br />
        <br />
        Every project is approached with both strategy and style—making sure <br className="d-none d-lg-block" />
        design isn’t just good-looking, but also purposeful and effective.
      </p>
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item hover-cursor-img" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{a.name}</h6>
              <p className="award_desc text-black-56">{a.publisher}</p>
            </div>
            <h6 className="award_year text-black-72">{a.year}</h6>
            <div className="award_img hover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" width={158} height={224} src={a.image} alt={a.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
