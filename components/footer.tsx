"use client"

import { Instagram, Mail, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-navy text-primary-foreground">
      <div className="absolute top-0 left-0 h-1 w-full bg-gold" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                <span className="font-serif text-lg font-bold text-navy">A</span>
              </div>
              <div>
                <p className="font-serif text-lg font-bold leading-tight">Atlas CNB</p>
                <p className="text-xs leading-tight text-primary-foreground/60">FTC Robotics Team</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              A Romanian FIRST Tech Challenge team from Colegiul National Banatean, Timisoara. Built to carry the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Robot", "Competitions", "Team", "Sponsors"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:atlas.cnb.ftc@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  atlas.cnb.ftc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/atlas.cnb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                  @atlas.cnb
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                Timisoara, Romania
              </li>
            </ul>
          </div>

          {/* FIRST */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">
              FTC
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              FIRST Tech Challenge inspires young people to be science and technology leaders by engaging them in mentor-based programs.
            </p>
            <a
              href="https://www.firstinspires.org/robotics/ftc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              Learn about FTC
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            {new Date().getFullYear()} Atlas CNB. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/atlas.cnb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-navy"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="mailto:atlas.cnb.ftc@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-navy"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
