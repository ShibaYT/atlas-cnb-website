const values = [
  {
    title: "Carrying the mission",
    description:
      "Like Atlas holding the sky, we take responsibility for every subsystem of our robot — from CAD and wiring to code and match strategy.",
  },
  {
    title: "Strength in teamwork",
    description:
      "No one carries the world alone. Mechanical, software, and outreach work together as one unit, learning from every scrim and event.",
  },
  {
    title: "Curiosity as our compass",
    description:
      "We experiment, prototype, and iterate quickly, turning failed attempts into better designs, more reliable mechanisms, and smarter code.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]" />

        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            About Atlas CNB
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The team carrying{" "}
            <span className="bg-gradient-to-tr from-sky-400 to-indigo-300 bg-clip-text text-transparent">
              big ideas
            </span>{" "}
            into the FTC arena.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Atlas CNB is a Romanian FIRST Tech Challenge team from Timișoara.
            We are high‑school students who love robotics, programming, and
            solving difficult problems together — supported by mentors, alumni,
            and our local community.
          </p>
        </header>

        <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-5 text-sm text-slate-300 sm:text-base">
            <p>
              Our name and mascot are inspired by the Titan Atlas, who holds the
              celestial sphere. For us, Atlas is a symbol of{" "}
              <span className="font-semibold text-sky-300">
                resilience, precision, and responsibility
              </span>{" "}
              &mdash; the same qualities we strive for when we design, build,
              and drive our robots.
            </p>
            <p>
              Each season, we split into subteams to focus on mechanical design,
              electronics, software, and outreach. We document our work, share
              our learnings, and collaborate with other FTC teams in Romania and
              beyond.
            </p>
            <p>
              Whether we are routing cables, tuning PID, or presenting to
              judges, we keep the same goal in mind:{" "}
              <span className="font-semibold text-sky-300">
                to grow as engineers and as people
              </span>
              , and to inspire more students to explore STEM.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.35),_transparent_55%)]" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.95)]">
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-sky-500/40 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4),_rgba(15,23,42,1)_65%)] shadow-[0_0_60px_rgba(56,189,248,0.45)]">
                <div className="absolute inset-6 rounded-full border border-sky-300/30" />
                <div className="absolute inset-10 rounded-full border border-indigo-400/25" />
                <div className="relative flex flex-col items-center text-center text-xs text-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Atlas
                  </span>
                  <span className="mt-1 text-sm font-semibold">
                    Systems Map
                  </span>
                  <p className="mt-2 max-w-[8.5rem] text-[11px] text-slate-200/90">
                    Drive train · Manipulators · Vision · Strategy · Outreach
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-300 sm:text-sm">
                We imagine Atlas supporting a world filled with{" "}
                <span className="font-semibold text-sky-300">
                  lines of code, gear trains, and orbital game pieces
                </span>
                . That image guides how we design our robots and how we show up
                at every event.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800/80 pt-10">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            What we stand for
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div className="pointer-events-none absolute -top-10 right-0 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_60%)]" />
                <h3 className="text-sm font-semibold text-slate-100">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

