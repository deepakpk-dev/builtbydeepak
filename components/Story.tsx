import Reveal from "@/components/Reveal";
import { timeline } from "@/content/site";

export default function Story() {
  return (
    <section id="story" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-accent">01 — The story</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            I came to code the long way around.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Eight years on the business side of tech taught me what most
            developers never learn: why software gets built, who pays for it,
            and what makes users actually convert. Then I switched sides.
          </p>
        </Reveal>
        <Reveal stagger="[data-entry]" className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {timeline.map((entry) => (
            <article key={entry.period} data-entry className="bg-surface p-8">
              <p className="font-mono text-xs text-accent">{entry.period}</p>
              <h3 className="mt-3 font-display text-xl font-bold">
                {entry.title}
              </h3>
              <p className="mt-3 text-muted">{entry.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
