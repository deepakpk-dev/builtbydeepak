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
