"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    title: "Engineering & Design",
    description: "From CAD and prototyping to manufacturing and testing, we design robots that are reliable, serviceable, and competition-ready.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0L18 9.73m-6.58 5.44L6.2 20.39a2.121 2.121 0 11-3-3l5.22-5.22" />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description: "Our programmers build autonomous routines, tele-op control systems, and tools that help us analyze matches and improve strategy.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Outreach & Community",
    description: "We promote STEM in our community through workshops, demos, and collaborations with local schools and organizations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Team Culture",
    description: "We value curiosity, fairness, and gracious professionalism both on and off the field. No one carries the world alone.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
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

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 lg:py-28">
      <div className="greek-pattern pointer-events-none absolute inset-0" />
      <div className="section-separator" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left */}
          <div>
            <motion.p
              variants={fadeInUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              About Us
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              <span className="text-balance">
                Who we are{" "}
                <span className="atlas-text-gradient">& our mission</span>
              </span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              custom={2}
              className="mt-6 space-y-4 text-muted-foreground"
            >
              <p>
                Atlas CNB is a student-run FTC robotics team from Colegiul National
                Banatean in Timisoara, Romania. Our name and identity are inspired by
                the Titan Atlas, who holds the celestial sphere -- a symbol of
                resilience, precision, and responsibility.
              </p>
              <p>
                Founded with a passion for engineering and innovation, we bring
                together students who love designing, building, and coding robots.
                Each season, we split into subteams for mechanical design, electronics,
                software, and community outreach.
              </p>
              <p>
                Whether we are routing cables, tuning PID controllers, or presenting
                to judges, we keep the same goal in mind: to grow as engineers and
                people, and to inspire more students to explore STEM.
              </p>
            </motion.div>
          </div>

          {/* Right: Pillar cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                variants={fadeInUp}
                custom={i + 2}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  {pillar.icon}
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-card-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
