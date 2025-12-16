import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AchievementsSection } from "@/components/achievements-section"
import { TeamSection } from "@/components/team-section" // 1. لازم تستدعيه هنا
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AchievementsSection />
      <TeamSection /> {/* 2. ولازم تحطه هنا عشان يظهر في الصفحة */}
      <Footer />
    </main>
  )
}