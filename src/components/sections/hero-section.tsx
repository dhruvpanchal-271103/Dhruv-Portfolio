import { Button } from "@/components/ui/button";
import SmoothScrollLink from "@/components/layout/smooth-scroll-link";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Mail, Download } from "lucide-react"; // Changed ArrowDown to Mail
import Link from "next/link";

export default function HeroSection() {
  return (
    <SectionWrapper
      as="section"
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-primary via-background to-background relative overflow-hidden px-4"
    >
      <div className="absolute inset-0 opacity-10">
        {/* You can add a subtle background pattern or image here if desired */}
      </div>
      <div className="relative z-10">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 animate-fade-in">
          Welcome to Dhruv's Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Crafting Clean Interfaces with React & Tailwind
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary w-full sm:w-auto">
            <SmoothScrollLink href="#contact">
              Contact Me <Mail className="ml-2 h-5 w-5" />
            </SmoothScrollLink>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary w-full sm:w-auto">
            <Link href="/Dhruv-Panchal.pdf" target="_blank" rel="noopener noreferrer" download>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
