export const site = {
  name: "Deepak Prabhakaran",
  brand: "builtbydeepak",
  role: "Full-Stack Developer",
  stack: ["TypeScript", "React", "Next.js", "PostgreSQL"],
  location: "Stuttgart, Germany",
  availability: "Open to full-stack roles — Germany / remote",
  email: "deepakp.tvla@gmail.com",
  url: "https://builtbydeepak.vercel.app",
  links: {
    github: "https://github.com/deepakpk-dev",
    linkedin: "https://www.linkedin.com/in/deepakpk",
  },
  hero: {
    lineOne: "I spent 8 years",
    lineTwo: "selling products.",
    lineThree: "Now I build them.",
    sub: "Full-stack developer building production-minded web apps — authentication, data integrity, testing, and CI included by default, not bolted on.",
  },
} as const;

export type TimelineEntry = {
  period: string;
  title: string;
  body: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2014 — 2018",
    title: "Sales, genomics",
    body: "B2B sales at MedGenome and Strand Life Sciences. Managed ~150 clinician relationships, named top salesperson of the year. Learned the skill that still shapes how I build: listening to what users actually need.",
  },
  {
    period: "2018 — 2024",
    title: "Marketing & growth leadership",
    body: "Head of Performance Marketing at an agency, then Head of Marketing & Growth at a D2C bike brand. Owned six-figure ad budgets, built GA4 and Looker Studio dashboards, ran hundreds of A/B tests, lifted a client's lead generation 10×. And I kept gravitating toward the technical side — landing pages, tracking, automation.",
  },
  {
    period: "2024",
    title: "The switch",
    body: "I realized the part of every job I loved most was building things. So I went all-in: taught myself software engineering properly — not just syntax, but testing, security, databases, and deployment.",
  },
  {
    period: "2025 — now",
    title: "Shipping production apps",
    body: "Lumen, Rype, Jilebi — deployed, tested, documented. Auth and role-based access, database-level integrity, unit and E2E suites, CI on every repo. Built the way software should be built.",
  },
];

export type MarketingService = {
  title: string;
  body: string;
  skills: string[];
};

export const marketing = {
  intro:
    "The first eight years didn't disappear. Before I wrote production code, I ran marketing for brands and agency clients — owning budgets, funnels, and growth targets. I take on select freelance marketing projects, and it's a rare combination: a marketer who can also build your landing pages, tracking, and automations.",
  availability: "Available for freelance marketing projects — remote",
  services: [
    {
      title: "Performance marketing & paid ads",
      body: "Full-funnel campaigns on Google Ads (Search, Shopping, Display, YouTube), Meta (Facebook & Instagram), LinkedIn, and Amazon Ads. Budget management, bid strategy, and continuous optimization — I've lifted a client's lead generation 10× and sustained positive ROAS on six-figure budgets.",
      skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Amazon Ads", "Google Shopping", "Remarketing"],
    },
    {
      title: "SEO & content",
      body: "Keyword research, on-page optimization, technical site audits, and content strategy that compounds. Backed by the engineering skills to actually fix what the audit finds — Core Web Vitals, structured data, site architecture.",
      skills: ["SEO", "Technical audits", "Content strategy", "Core Web Vitals"],
    },
    {
      title: "Analytics & CRO",
      body: "GA4 and Looker Studio dashboards that turn data into decisions. Conversion rate optimization through A/B testing, audience segmentation, landing page design, and funnel analysis — hundreds of tests run.",
      skills: ["GA4", "Looker Studio", "A/B testing", "CRO", "Conversion tracking"],
    },
    {
      title: "Branding & strategy",
      body: "Brand positioning, go-to-market strategy, value-proposition messaging, and integrated campaign planning across paid, social, email, and events. Led brand marketing end-to-end as Head of Marketing at a D2C brand.",
      skills: ["Brand strategy", "GTM", "Positioning", "Email marketing", "Marketing automation"],
    },
  ] satisfies MarketingService[],
};

export type Principle = {
  title: string;
  body: string;
  proof: string;
};

export const principles: Principle[] = [
  {
    title: "Security is table stakes",
    body: "Authentication, role-based access control, server-side validation, Row Level Security. Never trust the client.",
    proof: "Auth.js RBAC in Rype · RLS + PBKDF2 in my other work",
  },
  {
    title: "Integrity lives in the database",
    body: "Constraints, transactions, and triggers where they belong — so the data stays correct even when the app layer has a bad day.",
    proof: "Postgres trigger-based overbooking protection in Jilebi",
  },
  {
    title: "Tested by default",
    body: "Pure, framework-independent domain logic covered by unit tests; critical flows covered end-to-end.",
    proof: "400+ tests in Lumen · Vitest + Playwright in Rype",
  },
  {
    title: "CI on everything",
    body: "Lint, typecheck, build, unit, and E2E on every push. If it's not green, it doesn't ship.",
    proof: "GitHub Actions across all flagship repos",
  },
  {
    title: "Built with business sense",
    body: "Eight years owning revenue targets and conversion funnels means I build features that serve a goal — and I can explain them to non-technical stakeholders.",
    proof: "Ex-Head of Marketing & Growth",
  },
  {
    title: "Documented decisions",
    body: "READMEs that explain the architecture and the tradeoffs, not just the setup steps.",
    proof: "Design notes & conscious tradeoffs in every project",
  },
];
