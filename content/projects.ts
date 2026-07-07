export type CaseSection = {
  heading: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  pitch: string;
  tech: string[];
  live: string;
  repo: string;
  image: string;
  imageAlt: string;
  accentNote: string;
  caseStudy: {
    intro: string;
    sections: CaseSection[];
  };
};

export const projects: Project[] = [
  {
    slug: "lumen",
    name: "Lumen",
    tagline: "Offline-first health tracking, private by architecture",
    pitch:
      "A women's-health PWA covering the full reproductive lifecycle — cycle, fertility, pregnancy, postpartum. All data stays on-device; sync is end-to-end encrypted. 400+ tests.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Dexie / IndexedDB",
      "PBKDF2",
      "Vitest",
      "PWA",
    ],
    live: "https://lumen-pi-one.vercel.app",
    repo: "https://github.com/deepakpk-dev/lumen",
    image: "/projects/lumen.png",
    imageAlt: "Lumen app — cycle tracking dashboard",
    accentNote: "400+ tests · E2E encrypted · zero tracking",
    caseStudy: {
      intro:
        "Cycle and pregnancy data is among the most sensitive personal data there is — and most trackers monetize it. Lumen takes the opposite stance: privacy as architecture, not as a settings toggle. It runs as an installable PWA, stores every health record on the user's device, and ships with no ads, no paywall, and no third-party tracking.",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Popular period trackers upload intimate health data to servers where it can be sold, breached, or subpoenaed. Users shouldn't have to trade their most personal data for accurate predictions.",
            "The design constraint I set myself: the app must be fully useful with zero backend — and when the user opts into multi-device sync, the server must never be able to read the data.",
          ],
        },
        {
          heading: "Architecture: a React-free domain core",
          paragraphs: [
            "All prediction, fertility, and pregnancy logic lives in a pure TypeScript domain core with no React, no browser APIs, and no persistence concerns. That's what makes 400+ fast, deterministic unit tests possible — and it means the 'IP' of the app is portable and independently verifiable.",
            "The UI layer (Next.js 16 / React 19) consumes the core through a thin data layer built on Dexie over IndexedDB, so the whole app works offline as an installed PWA with a service worker.",
          ],
        },
        {
          heading: "End-to-end encrypted sync",
          paragraphs: [
            "Optional cross-device sync encrypts everything client-side — keys are derived with PBKDF2 from the user's passphrase, and the server only ever stores ciphertext it cannot decrypt. Losing the passphrase means losing the data; that's a conscious tradeoff, documented in the README, because recoverability would mean the server could read your health history.",
          ],
        },
        {
          heading: "What it demonstrates",
          paragraphs: [
            "Separation of concerns taken seriously (domain core vs. UI vs. persistence), a real testing strategy rather than token coverage, offline-first engineering, applied cryptography with honest tradeoffs, and product thinking about a genuinely sensitive domain.",
          ],
        },
      ],
    },
  },
  {
    slug: "rype",
    name: "Rype",
    tagline: "Ecommerce storefront with a real admin behind it",
    pitch:
      "A grocery storefront paired with a role-aware admin panel — persistent cart, checkout that creates real orders, live inventory, and a CI pipeline running lint, typecheck, build, unit, and E2E.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Auth.js v5",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Zod",
      "Vitest",
      "Playwright",
    ],
    live: "https://rype-one.vercel.app",
    repo: "https://github.com/deepakpk-dev/rype",
    image: "/projects/rype.png",
    imageAlt: "Rype storefront — product catalog",
    accentNote: "RBAC admin · real order flow · full CI",
    caseStudy: {
      intro:
        "Most portfolio ecommerce projects are static storefront mockups. Rype is built to behave like a production product: a public shopping experience, checkout that creates real orders and decrements stock, and an authenticated admin surface where access depends on your role.",
      sections: [
        {
          heading: "The storefront",
          paragraphs: [
            "Product catalog with filtering, sorting, and fuzzy search (Fuse.js), a persistent cart drawer backed by Zustand and localStorage, wishlist and compare flows, and a multi-step checkout with Zod validation on both client and server.",
          ],
        },
        {
          heading: "The admin panel — where it gets real",
          paragraphs: [
            "Auth.js v5 handles authentication; roles are enforced server-side. An admin gets full access to orders, inventory, and users; staff can only see orders. Every mutation is validated on the server — the UI hiding a button is never the security boundary.",
            "Orders are created transactionally in Postgres via Prisma, with automatic stock decrement after checkout, so inventory can't drift from reality.",
          ],
        },
        {
          heading: "Quality pipeline",
          paragraphs: [
            "GitHub Actions runs lint, typecheck, build, Vitest unit tests, and Playwright end-to-end tests on every push. The E2E suite drives the real flows — browsing, cart, checkout, admin sign-in — against a real database.",
          ],
        },
        {
          heading: "What it demonstrates",
          paragraphs: [
            "Full-stack data modeling with Prisma/Postgres, authentication and role-based authorization done properly, server-side validation as a habit, state management patterns, and a CI discipline you can inspect commit by commit.",
          ],
        },
      ],
    },
  },
  {
    slug: "jilebi",
    name: "Jilebi",
    tagline: "Restaurant reservations that can't overbook",
    pitch:
      "A bilingual (DE/EN) booking platform for a restaurant — secure admin access, transactional email, and overbooking protection enforced at the database level with PostgreSQL triggers and Row Level Security.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Resend",
      "Jest",
      "Playwright",
    ],
    live: "https://project-jilebi.vercel.app",
    repo: "https://github.com/deepakpk-dev/project-jilebi",
    image: "/projects/jilebi.png",
    imageAlt: "Jilebi restaurant website — reservation flow",
    accentNote: "DE/EN bilingual · Postgres triggers · RLS",
    caseStudy: {
      intro:
        "A production-style reservation platform for a restaurant, built Germany-first: fully bilingual German/English UX, transactional confirmation emails, and a hard guarantee that two guests can never book the same capacity — enforced where it can't be bypassed: in the database.",
      sections: [
        {
          heading: "The core problem: race conditions",
          paragraphs: [
            "Two guests submitting a reservation for the last table at the same moment is the classic concurrency bug. Checking availability in application code and then inserting is a race — both requests pass the check, both insert, the restaurant is overbooked.",
            "Jilebi solves it at the source of truth: a PostgreSQL trigger validates capacity inside the insert transaction itself. No matter how many app instances are running or how requests interleave, the database refuses the booking that would exceed capacity.",
          ],
        },
        {
          heading: "Security with Row Level Security",
          paragraphs: [
            "Supabase RLS policies mean data access rules live in Postgres, not just in API routes. Guests can only touch their own reservations; admin capabilities require an authenticated, authorized session. Even a bug in the API layer can't leak another guest's data.",
          ],
        },
        {
          heading: "The product around it",
          paragraphs: [
            "Bilingual DE/EN interface (built for a German audience), transactional emails via Resend for confirmations, an admin view for managing bookings, and Jest + Playwright coverage of the critical booking flows.",
          ],
        },
        {
          heading: "What it demonstrates",
          paragraphs: [
            "Real database engineering beyond ORM basics — triggers, RLS, transactional thinking — plus internationalization, email integration, and building for an actual business workflow rather than a demo.",
          ],
        },
      ],
    },
  },
];

export type SmallProject = {
  name: string;
  pitch: string;
  tech: string[];
  live?: string;
  repo: string;
};

export const smallProjects: SmallProject[] = [
  {
    name: "Weather App",
    pitch: "Forecast + air-quality dashboard with city search, geolocation, and an interactive map.",
    tech: ["Next.js", "TypeScript", "Open-Meteo", "Leaflet", "SWR"],
    repo: "https://github.com/deepakpk-dev/weather-app",
  },
  {
    name: "VELOX",
    pitch: "Animated marketing landing page — a single-file design handoff ported to a typed Next.js project with scoped GSAP animations.",
    tech: ["Next.js", "GSAP", "TypeScript"],
    live: "https://velox-ochre.vercel.app",
    repo: "https://github.com/deepakpk-dev/velox",
  },
];
