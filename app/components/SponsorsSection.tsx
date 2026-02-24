"use client"

import { motion } from "framer-motion"

const sponsors = [
  { name: "Colegiul National Banatean", tier: "Host Institution" },
  { name: "Tech Solutions SRL", tier: "Gold Sponsor" },
  { name: "Mecanex Industries", tier: "Silver Sponsor" },
  { name: "Digital Robotics", tier: "Silver Sponsor" },
  { name: "Timisoara Innovation Hub", tier: "Bronze Sponsor" },
  { name: "3D Print Lab", tier: "Bronze Sponsor" },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
}

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative scroll-mt-20 py-20 lg:py-28">
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
            className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Our Sponsors
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-4 text-center font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-balance">
              Powered by <span className="atlas-text-gradient">our partners</span>
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          >
            We are grateful to the organizations and individuals who support our
            mission and help us compete at the highest level.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              variants={fadeInUp}
              custom={i}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 transition-all hover:border-gold/40 hover:shadow-lg"
            >
              {/* Logo placeholder */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                <svg className="h-10 w-10 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-center font-serif text-base font-semibold text-card-foreground">
                {sponsor.name}
              </h3>
              <span className="mt-1 rounded-full bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold">
                {sponsor.tier}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto max-w-lg rounded-2xl border border-gold/30 bg-card p-8 gold-glow">
            <h3 className="font-serif text-xl font-bold text-card-foreground">
              Become a Sponsor
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Support the next generation of engineers and innovators. Your
              partnership makes a lasting impact.
            </p>
            <a
              href="mailto:contact@atlascnb.ro"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/30"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
