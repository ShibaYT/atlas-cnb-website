const seasons = [
  {
    season: "2024–2025",
    game: "FIRST Tech Challenge",
    theme: "Current season",
    notes:
      "We are actively building, testing, and competing. This section is a good place to add this season’s robot name, strategy, and results.",
    highlights: [
      "Game overview and field elements",
      "Robot concept and key mechanisms",
      "Events we are attending this season",
    ],
  },
  {
    season: "2023–2024",
    game: "Centerstage",
    theme: "Previous season",
    notes:
      "Use this card to summarize what went well, what you learned, and how the robot evolved during the year.",
    highlights: [
      "Robot role on the field (scoring, support, etc.)",
      "Major improvements made during the season",
      "Favorite matches or moments",
    ],
  },
  {
    season: "2022–2023",
    game: "PowerPlay",
    theme: "Early seasons",
    notes:
      "Your first years in FTC are where you find your workflow: how you prototype, organize meetings, and prepare for events.",
    highlights: [
      "First full robots and early mechanisms",
      "How the team structure took shape",
      "Key lessons that shaped future seasons",
    ],
  },
];

export default function CompetitionsPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_60%)]" />

        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            Competitions
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Seasons where we{" "}
            <span className="bg-gradient-to-tr from-sky-400 to-indigo-300 bg-clip-text text-transparent">
              carried our robots
            </span>{" "}
            into the arena.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Each FIRST Tech Challenge game is different. We treat every season
            as a new world Atlas has to hold up: new rules, new mechanisms, new
            strategies, and new lessons.
          </p>
        </header>

        <section className="space-y-5">
          {seasons.map((season) => (
            <article
              key={season.season}
              className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 px-5 py-5 sm:px-6 sm:py-6"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-sky-500/35 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.22),_transparent_62%)]" />
              <div className="pointer-events-none absolute -right-3 top-10 h-24 w-24 rounded-full border border-indigo-400/25" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                    {season.season}
                  </p>
                  <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">
                    {season.game}
                  </h2>
                  <p className="text-xs text-sky-300 sm:text-sm">
                    {season.theme}
                  </p>
                </div>
                <div className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  Continuous improvement mindset
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-300 sm:text-sm">
                {season.notes}
              </p>
              <ul className="mt-4 grid gap-2 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
                {season.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-slate-800/80 bg-slate-950/40 px-3 py-2"
                  >
                    <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

