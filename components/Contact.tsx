import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-accent">04 — Contact</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build something
            <span className="text-accent"> that ships.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            {site.availability}. If you need a developer who understands both
            the codebase and the business, I&apos;d love to talk.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition-transform hover:scale-105"
            >
              {site.email}
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
