import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { RobotSection } from "@/components/robot-section"
import { CompetitionsSection } from "@/components/competitions-section"
import { TeamSection } from "@/components/team-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RobotSection />
        <CompetitionsSection />
        <TeamSection />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  )
}
