import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/competitions", label: "Competitions" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/65 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700/80 bg-slate-900 atlas-glow">
            <Image
              src="/atlas-logo.png"
              alt="Atlas CNB logo"
              fill
              sizes="40px"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Atlas CNB
            </span>
            <span className="text-xs text-slate-300">
              FTC Robotics · Timișoara
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-sky-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold tracking-wide text-slate-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

