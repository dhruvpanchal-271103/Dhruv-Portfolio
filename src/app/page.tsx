
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import EducationSection from "@/components/sections/education-section"; // Import EducationSection
import ExperienceSection from "@/components/sections/experience-section"; // Import ExperienceSection
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";

export default function PortfolioProPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EducationSection /> {/* Add EducationSection here */}
        <ExperienceSection /> {/* Add ExperienceSection here */}
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
