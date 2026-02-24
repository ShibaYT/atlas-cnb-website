"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Handshake } from "lucide-react"

const sponsors = [
  { name: "Colegiul National Banatean", tier: "Host School" },
  { name: "Primaria Timisoara", tier: "Gold Sponsor" },
  { name: "Continental Automotive", tier: "Gold Sponsor" },
  { name: "Hella Romania", tier: "Silver Sponsor" },
  { name: "Bitdefender", tier: "Silver Sponsor" },
  { name: "UiPath Foundation", tier: "Bronze Sponsor" },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="greek-pattern relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold tracking-wider text-gold uppercase">
              Partners
            </span>
          </div>
          <h2 className="mb-4 max-w-2xl font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Our Sponsors & Partners
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted-foreground">
            We are grateful to the organizations that support our mission and help us reach new heights every season.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-gold/40 hover:shadow-lg"
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-gold/10">
                  <Image
                    src="/placeholder-logo.svg"
                    alt={sponsor.name}
                    width={40}
                    height={40}
                    className="opacity-60 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">{sponsor.name}</p>
                <p className="text-xs text-muted-foreground">{sponsor.tier}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 flex flex-col items-center rounded-2xl border border-border bg-card p-12 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
              <Handshake className="h-8 w-8 text-gold" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
              Become a Sponsor
            </h3>
            <p className="mb-6 max-w-md text-muted-foreground">
              Support the next generation of engineers and innovators. Partner with Atlas CNB and make a lasting impact on STEM education in Romania.
            </p>
            <a
              href="mailto:atlas.cnb.ftc@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-8 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
