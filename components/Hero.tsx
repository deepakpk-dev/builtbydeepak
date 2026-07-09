"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { site } from "@/content/site";

gsap.registerPlugin(SplitText, useGSAP);

const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Auth & RBAC",
  "Prisma",
  "Testing",
  "CI/CD",
  "Tailwind",
  "GSAP",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const headline = ref.current!.querySelector<HTMLElement>("[data-headline]")!;
      const lineWraps = gsap.utils.toArray<HTMLElement>("[data-line-wrap]", ref.current);
      let split: SplitText | null = null;

      // On md+ screens, scale each line so it fills the container edge-to-edge.
      // Below that, fall back to the CSS clamp size with natural wrapping.
      const fit = () => {
        const wide = window.innerWidth >= 768;
        const cw = headline.clientWidth;
        for (const wrap of lineWraps) {
          const inner = wrap.firstElementChild as HTMLElement;
          if (!wide) {
            wrap.style.fontSize = "";
            inner.style.whiteSpace = "";
            continue;
          }
          inner.style.whiteSpace = "nowrap";
          wrap.style.fontSize = "100px";
          const natural = inner.getBoundingClientRect().width;
          wrap.style.fontSize = `${(100 * cw) / natural}px`;
        }
      };

      // Hide until fitted (useGSAP runs pre-paint); SSR markup stays visible without JS.
      headline.style.visibility = "hidden";
      const fontsReady = Promise.race([
        document.fonts.ready,
        new Promise((r) => setTimeout(r, 1200)),
      ]);

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      fontsReady.then(() => {
        fit();
        headline.style.visibility = "visible";
        if (reduceMotion) return;

        split = new SplitText("[data-line]", { type: "chars,words" });
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(split.chars, {
            yPercent: 130,
            rotate: 6,
            duration: 1.1,
            stagger: { each: 0.016, from: "start" },
          })
          .fromTo(
            "[data-strike]",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.7, ease: "power3.inOut", transformOrigin: "left center" },
            "-=0.35"
          )
          .from("[data-hero-sub]", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.4");
      });

      const onResize = () => {
        split?.revert();
        split = null;
        fit();
      };
      window.addEventListener("resize", onResize);

      if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
        // Cursor-tracking glow
        const xTo = gsap.quickTo(glowRef.current, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(glowRef.current, "y", { duration: 0.6, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = ref.current!.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
        };
        ref.current!.addEventListener("pointermove", move);

        // Magnetic CTAs
        ref.current!.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
          const mx = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
          const my = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
          el.addEventListener("pointermove", (e) => {
            const r = el.getBoundingClientRect();
            mx((e.clientX - (r.left + r.width / 2)) * 0.3);
            my((e.clientY - (r.top + r.height / 2)) * 0.3);
          });
          el.addEventListener("pointerleave", () => {
            mx(0);
            my(0);
          });
        });
      }

      return () => window.removeEventListener("resize", onResize);
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,241,236,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(242,241,236,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      {/* Cursor glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -left-[300px] h-[600px] w-[600px] rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(201,247,58,0.13), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 pb-28">
        <div data-hero-sub className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-mono text-sm text-muted">
            {site.name} · {site.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            open to roles
          </span>
        </div>

        <h1
          data-headline
          className="font-display font-extrabold uppercase leading-[0.98] tracking-tight text-[clamp(1.8rem,8.2vw,3.4rem)]"
        >
          <span data-line-wrap className="block overflow-hidden pb-[0.08em]">
            <span data-line className="inline-block">
              {site.hero.lineOne}
            </span>
          </span>
          <span data-line-wrap className="block overflow-hidden pb-[0.08em]">
            {/* Below md the line can wrap, so the absolute bar would land between
                rows — use native line-through there and the animated bar from md up. */}
            <span data-line data-line-strike className="relative inline-block text-muted">
              {site.hero.lineTwo}
              <span
                data-strike
                aria-hidden
                className="absolute left-[-1%] top-1/2 hidden h-[0.075em] w-[102%] -translate-y-1/2 rounded-full bg-accent md:block"
              />
            </span>
          </span>
          <span data-line-wrap className="block overflow-hidden pb-[0.08em]">
            <span data-line className="inline-block text-accent">
              {site.hero.lineThree}
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <p data-hero-sub className="max-w-xl text-lg text-muted">
            {site.hero.sub}
          </p>
          <div data-hero-sub className="flex flex-wrap items-center gap-4">
            <Link
              data-magnetic
              href="/#work"
              className="inline-block rounded-full bg-accent px-7 py-3.5 font-medium text-on-accent"
            >
              View my work
            </Link>
            <a
              data-magnetic
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-line px-7 py-3.5 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Stack marquee */}
      <div className="absolute inset-x-0 bottom-0 border-t border-line bg-background/60 backdrop-blur-sm">
        <div className="marquee flex overflow-hidden py-4" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-track flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-6 pr-6 font-mono text-sm uppercase tracking-[0.2em] text-muted"
                >
                  {item}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
