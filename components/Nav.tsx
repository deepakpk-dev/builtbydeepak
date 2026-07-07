import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/#story", label: "Story" },
  { href: "/#work", label: "Work" },
  { href: "/#how", label: "How I Build" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight hover:text-accent transition-colors"
        >
          builtbydeepak
        </Link>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
