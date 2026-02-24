"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Cpu, Gamepad2, Code, Calendar } from "lucide-react"

const stats = [
  {
    icon: Cpu,
    label: "Autonomous Score",
    value: "45+",
    description: "Points per match",
  },
  {
    icon: Gamepad2,
    label: "Driver Control",
    value: "120+",
    description: "Points per match",
  },
  {
    icon: Code,
    label: "Programming",
    value: "Java",
    description: "Primary language",
  },
  {
    icon: Calendar,
    label: "Season",
    value: "2024-25",
    description: "INTO THE DEEP",
  },
]

export function RobotSection() {
  return (
    <section id="robot" className="relative bg-muted py-24 lg:py-32">
      <div className="greek-border absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold tracking-wider text-gold uppercase">
              Our Robot
            </span>
          </div>
          <h2 className="mb-12 max-w-2xl font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Engineered for Competition
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Robot Image */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <div className="absolute top-4 left-4 z-10 rounded-lg bg-navy/90 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-wider text-gold uppercase">
                  Season 2024-25
                </span>
              </div>
              <Image
                src="/images/robot-showcase.jpg"
                alt="Atlas CNB FTC competition robot"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Stats Cards */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-gold/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold dark:bg-gold/10 dark:text-gold">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                    <p className="font-serif text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="greek-border absolute bottom-0 left-0 w-full" />
    </section>
  )
}
