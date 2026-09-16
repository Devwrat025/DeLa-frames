export type CaseStudyPhase = {
  label: string;
  title: string;
  description: string;
  points: string[];
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyColor = {
  name: string;
  hex: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  scope: string[];
  heroImage: string;
  summary: string;
  businessGoal: string;
  problemStatement: string;
  challenges: string[];
  phases: CaseStudyPhase[];
  images: { src: string; caption: string }[];
  typography: { name: string; usage: string }[];
  colors: CaseStudyColor[];
  /** Hard numbers, where the engagement actually produced them. */
  stats?: CaseStudyStat[];
  /** Qualitative close-out, used when the project has no published metrics. */
  outcome?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cdg",
    title: "Cyber Defense Group — Enterprise UX Redesign",
    client: "Cyber Defense Group (CDG)",
    role: "Senior UI Designer",
    year: "2025",
    scope: ["UX Audit", "Information Architecture", "Design System", "Figma"],
    heroImage: "/assets/images/case-studies/cdg-hero.png",
    summary:
      "CDG is a focused cybersecurity consultancy that partners with clients to deliver a holistic approach to risk and threat management, providing education, maintenance, and support for data protection. The brief was to optimize their website to increase customer engagement and offer a seamless user experience.",
    businessGoal:
      "Provide end-to-end security expertise through the world's best security technology, combined with trusted consulting experience and service excellence.",
    problemStatement:
      "How might we strengthen the structure and improve the navigation and information architecture of the website so users have an intuitive experience—one that generates leads and increases CDG's customer base?",
    challenges: ["Visual Appeal", "Functionality", "Navigation"],
    phases: [
      {
        label: "Discover",
        title: "UX audit & competitor analysis",
        description:
          "Ran a full audit of the existing site using heuristic principles and a competitive analysis against other security consultancies (Praetorian, Chariot, Laminar) to find opportunity areas.",
        points: [
          "Conducted a UX audit and competitor analysis",
          "Gathered insights and requirements for the new site",
          "Focused on meeting user expectations for a seamless experience",
          "Mapped CDG's own expectations for website functionality",
        ],
      },
      {
        label: "Define",
        title: "Information architecture & brand color system",
        description:
          "Converted the audit findings into a coherent site structure—restructuring navigation, defining a sitemap by service category, and refining the color system so it could carry visual hierarchy, not just brand identity.",
        points: [
          "Conducted stakeholder interviews on service offerings and structure",
          "Redesigned the top-level navigation and full sitemap",
          "Refined the color palette to add visual hierarchy",
        ],
      },
      {
        label: "Design",
        title: "Wireframes, typography & functional patterns",
        description:
          "Built low- to high-fidelity wireframes for every core page, paired Montserrat headlines with Nunito body copy, and designed the functional patterns—breadcrumbs, CTA placement, infographics—that the old site was missing.",
        points: [
          "Designed low- to high-fidelity pages for the full site",
          "Restructured the menu into clear, relatable categories",
          "Added breadcrumb navigation for orientation on deep pages",
          "Placed assertive, specific CTAs at the point of decision",
          "Replaced dense text blocks with infographics for key content",
        ],
      },
      {
        label: "Deliver",
        title: "Launch",
        description:
          "Shipped a responsive, user-centric site across desktop, tablet, and mobile after a round of QA across devices.",
        points: [
          "Launched the CDG website as a significant milestone in the engagement",
          "Verified responsive behaviour across devices before handoff",
        ],
      },
    ],
    images: [
      {
        src: "/assets/images/case-studies/cdg-ia-before-after.png",
        caption:
          "Top navigation before and after: from an unlabeled dropdown-heavy menu to clear, categorized service groups.",
      },
      {
        src: "/assets/images/case-studies/cdg-wireframes.png",
        caption: "Low-fidelity wireframes covering the homepage, careers, blog, and service detail pages.",
      },
    ],
    typography: [
      { name: "Montserrat", usage: "Headlines" },
      { name: "Nunito", usage: "Paragraph copy" },
    ],
    colors: [
      { name: "Royal Blue Dark", hex: "#131751" },
      { name: "Light Green", hex: "#00EC72" },
      { name: "Alice Blue", hex: "#E9F2FD" },
      { name: "Mint S Ruby", hex: "#EEF8F2" },
    ],
    stats: [
      { value: "1.9–2.2%", label: "Conversion rate increase in the first 6 months" },
      { value: "40–45%", label: "Increase in engagement rate" },
      { value: "$3M+", label: "Business opportunity through generated leads" },
      { value: "40%", label: "Increase in website traffic within 6 months" },
      { value: "12–15", label: "Quality leads generated per month" },
    ],
  },
  {
    slug: "bgcsv",
    title: "Boys & Girls Clubs of Silicon Valley — Nonprofit Platform Redesign",
    client: "Boys & Girls Clubs of Silicon Valley (BGCSV)",
    role: "Senior UI Designer",
    year: "2024",
    scope: ["UX Audit", "Information Architecture", "User Flows", "Brand"],
    heroImage: "/assets/images/case-studies/bgcsv-hero.jpg",
    summary:
      "A redesign aimed at lifting engagement through streamlined navigation, refined graphics, and stronger page design—all built on the Boys & Girls Clubs brand palette. The site had to serve three audiences arriving with completely different intent: donors, parents, and volunteers.",
    businessGoal:
      "Highlight BGCSV's vision, mission, core beliefs, and community impact to raise awareness of what the organisation offers—deepening engagement with existing community members while expanding the member base.",
    problemStatement:
      "How might we strengthen the website's structure, improve navigation, and refine the information architecture to create an intuitive experience—one that boosts lead generation and grows BGCSV's community?",
    challenges: [
      "Catering to Diverse User Groups",
      "Enhanced User Journey",
      "Content Readability & Accessibility",
      "Mobile Responsiveness",
    ],
    phases: [
      {
        label: "Discover",
        title: "Assessment & competitive analysis",
        description:
          "Examined the existing navigation structure, the requirements of the site and its programs, and studied peer and competitor organisations to find patterns worth borrowing.",
        points: [
          "Analysed the current site alongside competitor and peer nonprofit sites",
          "Outlined specific requirements tailored to the BGCSV audience",
          "Captured the client's expectations for site functionality",
          "Set project goals: user journey, readability and accessibility, SEO",
        ],
      },
      {
        label: "Define",
        title: "Navigation architecture & user flows",
        description:
          "Turned the findings into a navigation architecture and look-and-feel direction built on the existing brand colors, then mapped user flows per audience to drive the menu structure.",
        points: [
          "Conducted stakeholder interviews",
          "Redesigned the information architecture across eight top-level sections",
          "Identified primary users and created user flow diagrams",
          "Defined the top navigation menu structure",
        ],
      },
      {
        label: "Design",
        title: "A youthful, brand-true visual system",
        description:
          "Developed a unified visual framework: low-fidelity options to settle the typeface, brand colors carried through into graphics, and the Silicon Valley sense of place worked into the illustration style.",
        points: [
          "Designed low- to high-fidelity pages across the site",
          "Chose clean, simple typefaces for headings and long-form copy",
          "Applied the established brand color system to shapes and cards",
          "Replaced dense text blocks with infographics for key content",
          "Trimmed the crowded top nav to priority items, with the rest in a hamburger",
        ],
      },
      {
        label: "Deliver",
        title: "Responsive build & launch",
        description:
          "Developed the site, made it responsive across screen sizes, and ran rigorous QA/QC across devices before launch.",
        points: [
          "Verified smooth functionality across devices through QA/QC",
          "Launched a site matching the client's “youthful and sophisticated” brief",
        ],
      },
    ],
    images: [
      {
        src: "/assets/images/case-studies/bgcsv-ia.jpg",
        caption:
          "Redesigned information architecture: eight top-level sections mapped down to individual page titles.",
      },
      {
        src: "/assets/images/case-studies/bgcsv-wireframes.jpg",
        caption: "Wireframes for the homepage, program detail, and club locator pages.",
      },
    ],
    typography: [
      { name: "Josefin Sans", usage: "Title headings" },
      { name: "Nunito Sans Caps", usage: "Short titles" },
      { name: "Nunito Sans Light", usage: "Paragraph copy" },
    ],
    colors: [
      { name: "Primary Blue", hex: "#0081C6" },
      { name: "Deep Navy", hex: "#004B87" },
      { name: "Accent Orange", hex: "#FF8200" },
      { name: "Accent Purple", hex: "#492F92" },
      { name: "Accent Lime", hex: "#C2D500" },
      { name: "Sky Tint", hex: "#BDDEF5" },
    ],
    outcome:
      "The delivered site embodies the “youthful and sophisticated” aesthetic the client asked for, with an architecture that gives donors, parents, and volunteers each a clear path from landing to action.",
  },
  {
    slug: "positioningpoint",
    title: "PositioningPoint — B2B SaaS Homepage Redesign",
    client: "PositioningPoint (Silky Agarwal)",
    role: "UX Research · UI Design · IA",
    year: "2025",
    scope: ["Heuristic Evaluation", "Information Architecture", "Messaging", "Figma"],
    heroImage: "/assets/images/case-studies/pp-hero.jpg",
    summary:
      "PositioningPoint is the consulting practice of Silky Agarwal, a B2B SaaS positioning and messaging specialist with 12+ years of experience who has advised challenger SaaS companies including Freshworks, Precoro, RippleHire, and NextBillion. The service was sharp and genuinely different—the homepage failed to show it. The right content already existed, but it sat in the wrong order, with the wrong emphasis, and without enough specificity.",
    businessGoal:
      "Turn a homepage that explained a methodology into one that converts founder-CEOs of pre-scale B2B SaaS companies into booked intro calls.",
    problemStatement:
      "How might we restructure the page so a skeptical, time-pressed founder recognises their own problem, trusts the proof, understands the engagement, and knows exactly what to do next?",
    challenges: [
      "A headline that buried the lead",
      "Flat information hierarchy",
      "Audience ambiguity",
      "Framework visuals that confused",
      "Scattered social proof",
      "No process transparency",
    ],
    phases: [
      {
        label: "Audit",
        title: "Heuristic evaluation of the original homepage",
        description:
          "Before changing any visuals, we audited the existing homepage against the Nielsen Norman Group's 10 usability heuristics. Six clear violations explained why strong content was failing to convert.",
        points: [
          "Match between system & real world: the headline spoke in positioning theory, not founder language",
          "Recognition rather than recall: framework diagrams appeared before the problem was explained",
          "Aesthetic & minimalist design: every section demanded equal attention, so nothing stood out",
          "Visibility of system status: no view of what happens after the intro call",
          "Consistency & standards: proof appeared in no deliberate order",
          "Flexibility & efficiency: a single footer CTA forced everyone through the full scroll",
        ],
      },
      {
        label: "Define",
        title: "Four design goals",
        description:
          "Set the bar for what the redesigned page had to do before a single section was drawn.",
        points: [
          "Make the value instantly clear—who it's for and what they gain, within five seconds",
          "Build a narrative funnel: pain, then solution, then proof, then process, then action",
          "Surface specificity: name the exact audience, problem, and outcome",
          "Earn trust progressively, so proof backs each claim as it is made",
        ],
      },
      {
        label: "Restructure",
        title: "Rebuilding the page flow",
        description:
          "The most impactful decision was not visual, it was structural. We rethought the entire content sequence to mirror how a skeptical founder actually evaluates a service provider—methodology visuals and framework diagrams now come after testimonials and proof, not before.",
        points: [
          "Rewrote the hero around the outcome, in the founder's own vocabulary",
          "Added a pain-framing section so visitors recognise the problem before the pitch",
          "Layered proof: client logos, then a stats bar, then video testimonials, then named engagements",
          "Moved the framework visuals late, once the method had earned the right to be explained",
          "Added a “three phases in our engagement” section for process transparency",
        ],
      },
      {
        label: "Design",
        title: "Key UI decisions",
        description:
          "A disciplined visual system that supports scanning and reserves emphasis for the moments that matter.",
        points: [
          "Typography hierarchy: clear contrast in size and weight gives every section an entry point",
          "Color discipline: the yellow accent marks CTAs, key callouts, and section markers only",
          "Section rhythm: alternating light and dark backgrounds signal a change of topic",
          "Contextual CTAs placed right after the most convincing sections, not just the footer",
          "Scenario mapping so founders can find their exact situation on the page",
        ],
      },
    ],
    images: [
      {
        src: "/assets/images/case-studies/pp-page-flow.jpg",
        caption:
          "The structural change: original page order versus the redesigned narrative sequence.",
      },
      {
        src: "/assets/images/case-studies/pp-heuristics.jpg",
        caption:
          "Heuristic audit extract: each violation paired with the design response that answers it.",
      },
    ],
    typography: [{ name: "Poppins", usage: "Headings & body copy" }],
    colors: [
      { name: "Brand Yellow", hex: "#FFD15B" },
      { name: "Ink", hex: "#222222" },
      { name: "Accent Indigo", hex: "#4D61FC" },
      { name: "Light Surface", hex: "#EEEEEE" },
    ],
    outcome:
      "The core challenge was never aesthetic. The original site had strong content—the real problem was that the content was not structured to convert. The redesign meant understanding how a skeptical, analytical SaaS founder evaluates a consultant, and building the page to match that exact mental sequence.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
