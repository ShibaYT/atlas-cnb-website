"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="greek-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 0h20v20H0V0zm20 20h20v20H20V20zm20-20h20v20H40V0zm20 20h20v20H60V20z" fill="#f5a623" fillOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#greek-grid)" />
        </svg>
      </div>

      {/* Atlas silhouette - decorative */}
      <div className="absolute right-0 bottom-0 h-[70vh] w-[40vw] opacity-[0.06] lg:opacity-[0.08]">
        <svg viewBox="0 0 400 600" fill="currentColor" className="h-full w-full text-gold">
          <path d="M200 50c-30 0-50 20-50 50s20 50 50 50 50-20 50-50-20-50-50-50zm-80 120c-10 0-20 10-20 20v120c0 10 5 20 15 25l65 40v175c0 10 10 20 20 20s20-10 20-20V425l65-40c10-5 15-15 15-25V190c0-10-10-20-20-20H120zm80 40c25 0 45 20 45 45s-20 45-45 45-45-20-45-45 20-45 45-45z" />
          <ellipse cx="200" cy="80" rx="120" ry="60" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.5" />
          <path d="M80 80c0-50 54-60 120-60s120 10 120 60" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3" />
        </svg>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gold" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium tracking-wider text-gold uppercase">
            FIRST Tech Challenge
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          Atlas CNB{" "}
          <span className="text-gold">{"—"}</span>{" "}
          <br className="hidden sm:block" />
          Built to Carry the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 sm:text-xl"
        >
          A Romanian FTC robotics team from Timisoara pushing the boundaries of innovation through engineering, code, and teamwork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#team"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-8 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Meet the Team
          </a>
          <a
            href="#competitions"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-primary-foreground/20 px-8 text-sm font-semibold text-primary-foreground transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            Our Competitions
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
