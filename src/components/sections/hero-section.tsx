
import { Button } from "@/components/ui/button";
import SmoothScrollLink from "@/components/layout/smooth-scroll-link";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Download, ArrowDown, ChevronDown } from "lucide-react"; 
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
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 animate-fade-in">
          Welcome to Dhruv's Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Crafting Clean Interfaces with React & Tailwind
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary w-full sm:w-auto">
            <SmoothScrollLink href="#contact">
              Contact Me <ArrowDown className="ml-2 h-5 w-5 animate-subtle-float" />
            </SmoothScrollLink>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary w-full sm:w-auto">
            <Link href="/Dhruv-Panchal.pdf" target="_blank" rel="noopener noreferrer" download>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <SmoothScrollLink
          href="#projects"
          aria-label="Scroll to projects"
          className="p-2 rounded-full text-foreground/70 hover:text-accent hover:bg-card/80 backdrop-blur-sm transition-colors"
        >
          <ChevronDown size={32} />
        </SmoothScrollLink>
      </div>
    </SectionWrapper>
  );
}
