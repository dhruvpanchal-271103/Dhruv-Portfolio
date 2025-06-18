
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import EducationSection from "@/components/sections/education-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";

export default function PortfolioProPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
