"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="greek-pattern pointer-events-none absolute inset-0" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-navy/5 blur-3xl dark:bg-gold/5" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Romanian FTC Robotics - Timisoara
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-balance">Atlas CNB</span>
            <br />
            <span className="atlas-text-gradient text-balance">
              Built to Carry the Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            A Romanian FTC robotics team from Timisoara pushing the boundaries
            of innovation, one competition at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/30"
            >
              Meet the Team
            </a>
            <a
              href="#competitions"
              className="inline-flex items-center justify-center rounded-lg border-2 border-navy/20 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold dark:border-foreground/20"
            >
              Our Competitions
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
          >
            {[
              { label: "Base", value: "Timisoara" },
              { label: "Program", value: "FIRST Tech Challenge" },
              { label: "School", value: "CNB" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Atlas silhouette + logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-1 items-center justify-center"
        >
          {/* Decorative ring */}
          <div className="absolute h-80 w-80 rounded-full border border-gold/20 sm:h-96 sm:w-96" />
          <div className="absolute h-64 w-64 rounded-full border border-navy/10 dark:border-gold/10 sm:h-80 sm:w-80" />

          {/* Atlas silhouette SVG */}
          <div className="relative z-10 flex flex-col items-center">
            <svg
              viewBox="0 0 300 400"
              className="h-72 w-56 sm:h-96 sm:w-72"
              aria-hidden="true"
            >
              {/* Globe */}
              <circle
                cx="150"
                cy="100"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-gold/40"
              />
              <circle
                cx="150"
                cy="100"
                r="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-navy/30 dark:text-gold/20"
                strokeDasharray="4 6"
              />
              {/* Globe latitude lines */}
              <ellipse
                cx="150"
                cy="100"
                rx="70"
                ry="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-gold/25"
              />
              <ellipse
                cx="150"
                cy="100"
                rx="70"
                ry="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-gold/20"
              />
              {/* Globe longitude lines */}
              <ellipse
                cx="150"
                cy="100"
                rx="25"
                ry="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-gold/20"
              />
              {/* Atlas figure */}
              <g className="text-foreground/60 dark:text-foreground/40">
                {/* Head */}
                <circle cx="150" cy="195" r="14" fill="currentColor" />
                {/* Neck */}
                <line x1="150" y1="209" x2="150" y2="220" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                {/* Body */}
                <path
                  d="M150 220 L150 300"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                {/* Arms reaching up to hold globe */}
                <path
                  d="M150 235 C130 220 110 195 105 170"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M150 235 C170 220 190 195 195 170"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Legs */}
                <path
                  d="M150 300 L125 370"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M150 300 L175 370"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
              {/* Gear symbol on globe center */}
              <circle cx="150" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50" />
              <circle cx="150" cy="100" r="4" className="fill-gold/40" />
            </svg>

            {/* Logo overlay on the globe */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 sm:top-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/30 bg-card shadow-lg sm:h-24 sm:w-24">
                <Image
                  src="/atlas-logo.jpeg"
                  alt="Atlas CNB logo"
                  fill
                  sizes="96px"
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
          <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
