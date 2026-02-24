"use client"

import { motion } from "framer-motion"

const robotStats = [
  {
    label: "Autonomous Score",
    value: "45+",
    detail: "Points per match",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    label: "Driver Control",
    value: "85+",
    detail: "Points per match",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    label: "Programming",
    value: "Java",
    detail: "FTC SDK + OpenCV",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    label: "Season",
    value: "2024-25",
    detail: "INTO THE DEEP",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
}

export default function RobotShowcase() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="section-separator" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Our Robot
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-4 text-center font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-balance">
              Meet the <span className="atlas-text-gradient">Machine</span>
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          >
            Every season, we engineer a new robot designed to dominate the field.
            Here is a look at our current competition machine.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]"
        >
          {/* Robot image placeholder */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="aspect-[4/3] w-full bg-accent/50">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                <svg className="h-20 w-20 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                <p className="text-center text-sm text-muted-foreground">
                  Robot image coming soon
                </p>
                <p className="text-center text-xs text-muted-foreground/60">
                  High-resolution photos from competition day
                </p>
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute left-4 top-4 rounded-lg bg-gold/90 px-3 py-1.5 text-xs font-bold text-navy shadow-lg">
              INTO THE DEEP 2024-25
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {robotStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i + 1}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  {stat.icon}
                </div>
                <p className="mt-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-card-foreground">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
