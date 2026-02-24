import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm lg:px-8">
        <p>
          © {new Date().getFullYear()} Atlas CNB · FTC Robotics Team · Timișoara,
          Romania
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/about" className="transition hover:text-sky-300">
            About
          </Link>
          <Link href="/competitions" className="transition hover:text-sky-300">
            Competitions
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sky-300"
          >
            Instagram
          </a>
          <a
            href="mailto:contact@atlascnb.ro"
            className="transition hover:text-sky-300"
          >
            contact@atlascnb.ro
          </a>
        </div>
      </div>
    </footer>
  );
}

