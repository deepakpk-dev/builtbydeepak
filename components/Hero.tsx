"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/content/site";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-line]", {
            y: 90,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          })
          .from(
            "[data-hero-sub]",
            { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 },
            "-=0.5"
          );
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24 pb-16"
    >
      <p data-hero-sub className="mb-6 font-mono text-sm text-accent">
        {site.name} · {site.location}
      </p>
      <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold leading-[1.02] tracking-tight">
        <span data-hero-line className="block">
          {site.hero.lineOne}
        </span>
        <span data-hero-line className="block text-muted">
          {site.hero.lineTwo}
        </span>
        <span data-hero-line className="block text-accent">
          {site.hero.lineThree}
        </span>
      </h1>
      <p data-hero-sub className="mt-8 max-w-xl text-lg text-muted">
        {site.hero.sub}
      </p>
      <div data-hero-sub className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/#work"
          className="rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition-transform hover:scale-105"
        >
          View my work
        </Link>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-6 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <span className="font-mono text-xs text-muted">
          {site.stack.join(" · ")}
        </span>
      </div>
    </section>
  );
}
