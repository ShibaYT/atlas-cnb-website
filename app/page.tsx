const competitions = [
  {
    season: "2024–2025",
    game: "FIRST Tech Challenge",
    highlight: "Current season – details coming soon.",
  },
  {
    season: "2023–2024",
    game: "Centerstage",
    highlight: "We refined our drive base, mechanisms, and match strategy.",
  },
  {
    season: "2022–2023",
    game: "PowerPlay",
    highlight: "Our early years learning FTC and building our first full robots.",
  },
];

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45),_transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-240px] top-[40px] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.22),_transparent_62%)] blur-2xl" />
      <div className="pointer-events-none absolute left-[-240px] top-[240px] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.16),_transparent_62%)] blur-2xl" />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-4 py-10 sm:gap-24 sm:px-6 sm:py-14 lg:gap-28 lg:px-8 lg:py-16">
          {/* Hero */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1.15fr)] md:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
                Romanian FTC Robotics · Timișoara
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Atlas CNB:{" "}
                <span className="atlas-text-gradient">we don’t drop the world.</span>
              </h1>
              <p className="mt-4 max-w-xl text-balance text-sm text-slate-300 sm:text-base">
                Atlas CNB is a high‑school robotics team from Colegiul Național
                &bdquo;C. D. Loga&ldquo; in Timișoara, competing in FIRST Tech
                Challenge. We design, build, and code robots that can carry
                their own world on the field.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.55)] transition hover:bg-sky-400"
                >
                  Meet the team
                </a>
                <a
                  href="/competitions"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-sky-300"
                >
                  Season highlights
                  <span className="h-4 w-4 rounded-full border border-sky-400/60 bg-sky-400/20" />
                </a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-xs text-slate-300 sm:text-sm">
                <div>
                  <dt className="font-semibold text-slate-100">Base</dt>
                  <dd className="mt-1 text-slate-400">Timișoara, Romania</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-100">Program</dt>
                  <dd className="mt-1 text-slate-400">FIRST Tech Challenge</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-100">Focus</dt>
                  <dd className="mt-1 text-slate-400">
                    Robotics · Software · Outreach
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 atlas-glow">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-sky-500/25 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.22),_transparent_62%)]" />
                <div className="pointer-events-none absolute -left-12 bottom-4 h-40 w-40 rounded-full border border-indigo-400/15 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.16),_transparent_62%)]" />

                <div className="relative mx-auto flex max-w-[320px] flex-col items-center gap-3 text-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-700/80 bg-slate-950">
                    <Image
                      src="/atlas-logo.jpeg"
                      alt="Atlas CNB team logo"
                      fill
                      sizes="160px"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    The world is on your back
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/40 px-3 py-2">
                    <p className="font-semibold text-slate-100">Build</p>
                    <p className="mt-0.5 text-slate-400">CAD · assembly</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/40 px-3 py-2">
                    <p className="font-semibold text-slate-100">Code</p>
                    <p className="mt-0.5 text-slate-400">autonomous · tele‑op</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/40 px-3 py-2">
                    <p className="font-semibold text-slate-100">Community</p>
                    <p className="mt-0.5 text-slate-400">outreach · events</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About teaser */}
          <section className="scroll-mt-24">
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

          {/* Competitions teaser */}
          <section className="scroll-mt-24">
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
                  </div>
                  <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                    {competition.highlight}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </main>
    </div>
  );
}
