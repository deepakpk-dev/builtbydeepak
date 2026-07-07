import Reveal from "@/components/Reveal";
import { marketing, site } from "@/content/site";

export default function Marketing() {
  return (
    <section id="marketing" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-accent">04 — Marketing</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            The marketer didn&apos;t retire.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">{marketing.intro}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent">
            {marketing.availability}
          </p>
        </Reveal>
        <Reveal
          stagger="[data-service]"
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
        >
          {marketing.services.map((service) => (
            <article key={service.title} data-service className="bg-surface p-8">
              <h3 className="font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-muted">{service.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
        <Reveal className="mt-10">
          <a
            href={`mailto:${site.email}?subject=Freelance marketing project`}
            className="font-medium text-accent hover:underline"
          >
            Need marketing help? Let&apos;s talk →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
