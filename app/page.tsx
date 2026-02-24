import SiteNav from "./components/SiteNav"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import RobotShowcase from "./components/RobotShowcase"
import CompetitionsSection from "./components/CompetitionsSection"
import TeamSection from "./components/TeamSection"
import SponsorsSection from "./components/SponsorsSection"
import SiteFooter from "./components/SiteFooter"

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <RobotShowcase />
        <CompetitionsSection />
        <TeamSection />
        <SponsorsSection />
      </main>
      <SiteFooter />
    </>
  )
}
