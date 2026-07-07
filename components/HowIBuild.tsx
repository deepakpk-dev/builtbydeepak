import Reveal from "@/components/Reveal";
import { principles } from "@/content/site";

export default function HowIBuild() {
  return (
    <section id="how" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-sm text-accent">03 — How I build</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            The unglamorous parts, done properly.
          </h2>
        </Reveal>
        <Reveal stagger="[data-principle]" className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <article key={p.title} data-principle className="bg-surface p-8">
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted">{p.body}</p>
              <p className="mt-4 font-mono text-xs text-accent">{p.proof}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
