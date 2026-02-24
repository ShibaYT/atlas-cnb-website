"use client"

import { motion } from "framer-motion"

const teamMembers = [
  { name: "Alex Popescu", grade: "12th Grade", role: "Team Captain & Mechanical Lead" },
  { name: "Maria Ionescu", grade: "11th Grade", role: "Software Lead" },
  { name: "Andrei Stoica", grade: "12th Grade", role: "Driver & Electronics" },
  { name: "Elena Radu", grade: "11th Grade", role: "CAD Designer" },
  { name: "Stefan Muresan", grade: "10th Grade", role: "Programmer" },
  { name: "Ana Voicu", grade: "12th Grade", role: "Outreach Lead" },
  { name: "Mihai Dinu", grade: "10th Grade", role: "Build Team" },
  { name: "Ioana Popa", grade: "11th Grade", role: "Documentation & Strategy" },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
}

export default function TeamSection() {
  return (
    <section id="team" className="relative scroll-mt-20 py-20 lg:py-28">
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
            Our Team
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-4 text-center font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-balance">
              The people <span className="atlas-text-gradient">behind Atlas</span>
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          >
            A team of passionate students from Colegiul National Banatean,
            united by a shared love for robotics and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.name}
              variants={fadeInUp}
              custom={i}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-gold/40 hover:shadow-lg"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[4/3] w-full bg-accent/50">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform group-hover:scale-110">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                {/* Role badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded-md bg-navy/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-warm-white dark:bg-gold/90 dark:text-navy">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-serif text-base font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {member.grade}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
