import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects, smallProjects } from "@/content/projects";

export default function Work() {
  return (
    <section id="work" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-accent">02 — Featured work</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Production-minded, not portfolio-minded.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Deployed, tested, and documented. Every project ships with
            authentication, validation, and CI — because that&apos;s what real
            software needs.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/50 md:grid-cols-2"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="font-mono text-xs text-accent">
                    {project.accentNote}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                  <p className="mt-4 text-muted">{project.pitch}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 font-medium text-accent">
                    Read the case study{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal stagger="[data-small]" className="mt-8 grid gap-8 sm:grid-cols-2">
          {smallProjects.map((p) => (
            <a
              key={p.name}
              data-small
              href={p.live ?? p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/50"
            >
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-3 text-muted">{p.pitch}</p>
              <p className="mt-4 font-mono text-xs text-muted">
                {p.tech.join(" · ")}
              </p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
