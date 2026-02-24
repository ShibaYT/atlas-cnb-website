"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#competitions", label: "Competitions" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#contact", label: "Contact" },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-10 w-10" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-accent"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.svg
            key="moon"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-5 w-5 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-5 w-5 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gold/30 bg-card">
            <Image
              src="/atlas-logo.jpeg"
              alt="Atlas CNB logo"
              fill
              sizes="40px"
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-wide text-foreground">
              Atlas CNB
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              FTC Robotics
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <motion.div className="flex flex-col gap-1.5" animate={mobileOpen ? "open" : "closed"}>
              <motion.span
                className="block h-0.5 w-5 bg-foreground"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 4 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-foreground"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-foreground"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -4 },
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
