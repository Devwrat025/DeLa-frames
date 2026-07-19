import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Designing enterprise products <br className="d-none d-lg-block" />
        with AI-native speed <br className="d-none d-lg-block" />
        and enterprise-grade clarity
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        I&apos;m a Senior UI/UX Designer with 5+ years delivering enterprise B2B, B2C, and SaaS products
        <br className="d-none d-lg-block" /> across HR tech, legal, operations, and nonprofit domains. <br />
        <br />
        I pioneer AI-native design—building Claude-powered automation pipelines that turn complex <br className="d-none d-lg-block" />
        business requirements into design systems, RBAC-aware platforms, and zero-friction dev handoff.
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
