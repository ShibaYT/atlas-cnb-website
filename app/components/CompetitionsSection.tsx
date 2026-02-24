"use client"

import { motion } from "framer-motion"

const competitions = [
  {
    season: "2024-2025",
    game: "INTO THE DEEP",
    events: [
      { name: "Regional Qualifier - Timisoara", placement: 2, date: "Nov 2024" },
      { name: "Interregional Meet", placement: 3, date: "Jan 2025" },
      { name: "National Championship (upcoming)", placement: null, date: "Mar 2025" },
    ],
  },
  {
    season: "2023-2024",
    game: "CENTERSTAGE",
    events: [
      { name: "Regional Qualifier - Timisoara", placement: 1, date: "Nov 2023" },
      { name: "Interregional Championship", placement: 3, date: "Feb 2024" },
      { name: "National Championship", placement: 8, date: "Mar 2024" },
    ],
  },
  {
    season: "2022-2023",
    game: "POWERPLAY",
    events: [
      { name: "Regional Qualifier - Timisoara", placement: 4, date: "Nov 2022" },
      { name: "Interregional Meet", placement: 6, date: "Jan 2023" },
    ],
  },
]

function PlacementBadge({ placement }: { placement: number | null }) {
  if (placement === null) {
    return (
      <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
        Upcoming
      </span>
    )
  }

  const badgeClass =
    placement === 1
      ? "badge-1st"
      : placement === 2
        ? "badge-2nd"
        : placement === 3
          ? "badge-3rd"
          : "bg-muted text-muted-foreground"

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${badgeClass}`}
    >
      {placement === 1 ? "1st" : placement === 2 ? "2nd" : placement === 3 ? "3rd" : `${placement}th`}
    </span>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
}

export default function CompetitionsSection() {
  return (
    <section id="competitions" className="relative scroll-mt-20 py-20 lg:py-28">
      <div className="section-separator" />
      <div className="greek-pattern pointer-events-none absolute inset-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Competitions
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-balance">
              Our <span className="atlas-text-gradient">Competition Journey</span>
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-4 max-w-2xl text-muted-foreground"
          >
            Each season brings new challenges, new robots, and new opportunities
            to prove ourselves on the field.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 space-y-8">
          {competitions.map((season, sIdx) => (
            <motion.div
              key={season.season}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Season card */}
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* Season header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-accent/50 px-6 py-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {season.season}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-card-foreground">
                      {season.game}
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228M18.75 4.236V2.721" />
                    </svg>
                  </div>
                </div>

                {/* Events */}
                <div className="divide-y divide-border">
                  {season.events.map((event, eIdx) => (
                    <motion.div
                      key={event.name}
                      variants={fadeInUp}
                      custom={sIdx + eIdx + 1}
                      className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 transition-colors hover:bg-accent/30"
                    >
                      <div className="flex items-center gap-4">
                        <div className="hidden h-2 w-2 rounded-full bg-gold sm:block" />
                        <div>
                          <p className="text-sm font-medium text-card-foreground">
                            {event.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.date}
                          </p>
                        </div>
                      </div>
                      <PlacementBadge placement={event.placement} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
