import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.pitch,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.pitch,
      images: [{ url: project.image }],
    },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">Case study</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-3 text-xl text-muted">{project.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-transform hover:scale-105"
          >
            View live ↗
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Source code ↗
          </a>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <p className="text-lg leading-relaxed text-muted">
          {project.caseStudy.intro}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>

      {project.caseStudy.sections.map((section) => (
        <Reveal key={section.heading} className="mt-14">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {section.heading}
          </h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>
      ))}

      <Reveal className="mt-20 border-t border-line pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/#work" className="text-muted hover:text-accent transition-colors">
            ← All work
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group font-display text-xl font-bold hover:text-accent transition-colors"
          >
            Next: {next.name}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
