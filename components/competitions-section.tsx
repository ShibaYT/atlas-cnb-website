"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Trophy, Medal, Award, MapPin } from "lucide-react"

interface Competition {
  season: string
  name: string
  location: string
  date: string
  placement: number | string
  award?: string
}

const competitions: Competition[] = [
  {
    season: "2024-25",
    name: "FTC Regional Qualifier",
    location: "Timisoara, Romania",
    date: "November 2024",
    placement: 2,
    award: "Inspire Award",
  },
  {
    season: "2024-25",
    name: "FTC Inter-County Championship",
    location: "Cluj-Napoca, Romania",
    date: "January 2025",
    placement: 1,
    award: "Think Award",
  },
  {
    season: "2024-25",
    name: "FTC National Championship",
    location: "Bucharest, Romania",
    date: "March 2025",
    placement: 3,
    award: "Design Award",
  },
  {
    season: "2023-24",
    name: "FTC Regional Qualifier",
    location: "Timisoara, Romania",
    date: "November 2023",
    placement: 1,
  },
  {
    season: "2023-24",
    name: "FTC National Championship",
    location: "Bucharest, Romania",
    date: "February 2024",
    placement: 5,
    award: "Connect Award",
  },
  {
    season: "2023-24",
    name: "FTC Central European Championship",
    location: "Budapest, Hungary",
    date: "April 2024",
    placement: 8,
  },
]

function PlacementBadge({ placement }: { placement: number | string }) {
  if (placement === 1) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1">
        <Trophy className="h-4 w-4 text-gold" />
        <span className="text-sm font-bold text-gold">1st Place</span>
      </div>
    )
  }
  if (placement === 2) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-foreground/5 px-3 py-1 dark:bg-foreground/10">
        <Medal className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-bold text-muted-foreground">2nd Place</span>
      </div>
    )
  }
  if (placement === 3) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-amber-700/10 px-3 py-1">
        <Award className="h-4 w-4 text-amber-700 dark:text-amber-500" />
        <span className="text-sm font-bold text-amber-700 dark:text-amber-500">3rd Place</span>
      </div>
    )
  }
  return (
    <div className="rounded-full bg-muted px-3 py-1">
      <span className="text-sm font-semibold text-muted-foreground">
        {placement}th Place
      </span>
    </div>
  )
}

export function CompetitionsSection() {
  return (
    <section id="competitions" className="greek-pattern relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold tracking-wider text-gold uppercase">
              Competitions
            </span>
          </div>
          <h2 className="mb-4 max-w-2xl font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Competing on Every Stage
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted-foreground">
            From regional qualifiers to international championships, Atlas CNB consistently delivers strong performances.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((comp, index) => (
            <AnimatedSection key={`${comp.name}-${comp.season}`} delay={index * 0.05}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-md bg-navy/10 px-2.5 py-1 text-xs font-bold tracking-wider text-navy uppercase dark:bg-gold/10 dark:text-gold">
                    {comp.season}
                  </span>
                  <PlacementBadge placement={comp.placement} />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                  {comp.name}
                </h3>
                <div className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {comp.location}
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{comp.date}</p>
                {comp.award && (
                  <div className="mt-auto">
                    <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold text-gold">
                      {comp.award}
                    </span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
