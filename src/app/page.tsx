const navLinks = [
  { href: "#about", label: "About" },
  { href: "#competitions", label: "Competitions" },
  { href: "#contact", label: "Contact" },
];

const competitions = [
  {
    season: "2024–2025",
    game: "FIRST Tech Challenge",
    highlight: "Romanian Regional Qualifiers",
    result: "Design Award – Finalist",
  },
  {
    season: "2023–2024",
    game: "Centerstage",
    highlight: "National Championship Timișoara",
    result: "Inspire Award – Finalist Alliance",
  },
  {
    season: "2022–2023",
    game: "PowerPlay",
    highlight: "Regional Events Across Romania",
    result: "Multiple judged and performance awards",
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-500 text-lg font-bold tracking-tight">
                AC
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Atlas CNB
                </span>
                <span className="text-xs text-slate-300">
                  FTC Robotics · Timișoara
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-sky-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 py-10 sm:py-14 lg:py-16">
          {/* Hero */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] md:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
                Romanian FTC Robotics · Timișoara
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Atlas CNB
              </h1>
              <p className="mt-4 max-w-xl text-balance text-sm text-slate-300 sm:text-base">
                We are a high‑school robotics team from Colegiul Național &bdquo;C. D. Loga&ldquo;,
                competing in FIRST Tech Challenge and building robots that solve real‑world
                challenges through engineering, teamwork, and creativity.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                >
                  Learn more about us
                </a>
                <a
                  href="#competitions"
                  className="inline-flex text-sm font-medium text-slate-200 transition hover:text-sky-400"
                >
                  See our competitions
                </a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-xs text-slate-300 sm:text-sm">
                <div>
                  <dt className="font-semibold text-slate-100">Founded</dt>
                  <dd className="mt-1 text-slate-400">Timișoara, Romania</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-100">Program</dt>
                  <dd className="mt-1 text-slate-400">FIRST Tech Challenge</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-100">Focus</dt>
                  <dd className="mt-1 text-slate-400">Robotics · Outreach · STEM</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.16),_transparent_55%)]" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
                <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-3 text-xs text-slate-300">
                  <span className="font-medium text-slate-100">
                    Atlas CNB · Robot system overview
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                    Live
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>
                <div className="space-y-4 px-5 py-4 text-xs text-slate-200 sm:text-sm">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Drive Train
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Precise mecanum drive for agile movement and fast autonomous paths.
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Manipulators
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Custom intake and arm mechanisms for reliable game‑piece handling.
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Software
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Advanced autonomous routines with vision, localization, and telemetry.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] text-sky-200/90">
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5">
                      Java · FTC SDK
                    </span>
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5">
                      Road Runner
                    </span>
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5">
                      Computer Vision
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About section */}
          <section id="about" className="scroll-mt-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  About Atlas CNB
                </h2>
                <p className="mt-3 text-sm text-slate-300 sm:text-base">
                  Atlas CNB is a student‑run FTC robotics team from Timișoara, Romania.
                  We bring together passionate students who love engineering, coding,
                  and problem‑solving, guided by dedicated mentors and teachers.
                </p>
              </div>
              <div className="grid flex-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Engineering & Design
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    From CAD and prototyping to manufacturing and testing, we design
                    robots that are reliable, serviceable, and competition‑ready.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Software Development
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    Our programmers build autonomous routines, tele‑op control systems,
                    and tools that help us analyze matches and improve strategy.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Outreach & Community
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    We promote STEM in our community through workshops, demos, and
                    collaborations with local schools and partners.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Team Culture
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    We value curiosity, fairness, and gracious professionalism both
                    on and off the field.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Competitions section */}
          <section id="competitions" className="scroll-mt-24">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Competitions & Highlights
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                  Each season we design a new robot, refine our strategy, and compete
                  alongside teams from across Romania and beyond.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:mt-8">
              {competitions.map((competition) => (
                <article
                  key={competition.season}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 transition hover:border-sky-500/60 hover:bg-slate-900"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                        {competition.game}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                        {competition.season}
                      </p>
                    </div>
                    <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                      {competition.result}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                    {competition.highlight}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t border-slate-800/80 py-6 text-xs text-slate-400 sm:text-sm"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Atlas CNB · FTC Robotics Team · Timișoara, Romania
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-400"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-400"
              >
                Facebook
              </a>
              <a
                href="mailto:contact@atlascnb.ro"
                className="transition hover:text-sky-400"
              >
                contact@atlascnb.ro
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

