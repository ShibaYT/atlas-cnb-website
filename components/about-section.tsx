"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Target, Lightbulb, Users, Wrench } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To inspire the next generation of engineers and innovators through competitive robotics and hands-on STEM education.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push creative boundaries in mechanical design, software engineering, and strategic thinking every season.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Like Atlas carrying the world, we succeed together — sharing knowledge, supporting each other, and growing as a unit.",
  },
  {
    icon: Wrench,
    title: "Engineering",
    description:
      "From CAD design to autonomous programming, we master every aspect of building competition-ready robots.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="greek-pattern relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold tracking-wider text-gold uppercase">
              About Us
            </span>
          </div>
          <h2 className="mb-6 max-w-2xl font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Carrying the World of Robotics Forward
          </h2>
        </AnimatedSection>

        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atlas CNB is a FIRST Tech Challenge robotics team based at{" "}
                <span className="font-semibold text-foreground">
                  Colegiul National Banatean
                </span>{" "}
                in Timisoara, Romania. Named after the Greek titan who held up the heavens, we carry forward a legacy of innovation, perseverance, and technical excellence.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded by a group of passionate students, our team brings together diverse talents in mechanical engineering, software development, 3D design, and strategic outreach. We compete nationally and internationally, representing Romania on the global robotics stage.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every season, we design, build, and program a competitive robot from scratch while also engaging our community through STEM workshops, mentorship programs, and public demonstrations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold dark:bg-gold/10 dark:text-gold">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
