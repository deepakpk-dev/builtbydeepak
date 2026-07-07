"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger children matching this selector instead of animating the wrapper. */
  stagger?: string;
  delay?: number;
};

/**
 * Fades content up as it scrolls into view. Skipped entirely when the
 * user prefers reduced motion.
 */
export default function Reveal({ children, className, stagger, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? ref.current!.querySelectorAll(stagger) : ref.current;
        gsap.from(targets, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay,
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
