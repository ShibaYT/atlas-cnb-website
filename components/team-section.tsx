"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

interface TeamMember {
  name: string
  role: string
  grade: string
}

const teamMembers: TeamMember[] = [
  { name: "Alexandru Popescu", role: "Team Captain & Mechanical Lead", grade: "12th Grade" },
  { name: "Maria Ionescu", role: "Software Engineer", grade: "11th Grade" },
  { name: "Andrei Moldovan", role: "CAD Designer", grade: "12th Grade" },
  { name: "Elena Dragomir", role: "Electrical Engineer", grade: "11th Grade" },
  { name: "Stefan Barbu", role: "Driver & Mechanical", grade: "10th Grade" },
  { name: "Ana Cristea", role: "Outreach & Marketing", grade: "11th Grade" },
  { name: "Mihai Dumitrescu", role: "Autonomous Programmer", grade: "12th Grade" },
  { name: "Ioana Radu", role: "3D Printing Specialist", grade: "10th Grade" },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
}

export function TeamSection() {
  return (
    <section id="team" className="relative bg-muted py-24 lg:py-32">
      <div className="greek-border absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold tracking-wider text-gold uppercase">
              Our Team
            </span>
          </div>
          <h2 className="mb-4 max-w-2xl font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            The Titans Behind Atlas
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted-foreground">
            A dedicated group of students from Colegiul National Banatean, united by a passion for engineering and innovation.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.05}>
              <div className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-gold/40 hover:shadow-lg">
                {/* Avatar placeholder */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-navy text-gold transition-transform group-hover:scale-105">
                  <Image
                    src="/placeholder-user.jpg"
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 font-serif text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm font-medium text-gold">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">{member.grade}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <div className="greek-border absolute bottom-0 left-0 w-full" />
    </section>
  )
}
