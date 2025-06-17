
import SectionWrapper from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function MyResumeSection() {
  return (
    <SectionWrapper id="my-resume" className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">My Resume</h2>
        <p className="text-lg text-muted-foreground mt-2">Ready to learn more about my qualifications? Download my resume.</p>
      </div>
      <Button 
        asChild 
        size="lg" 
        className="bg-accent text-accent-foreground hover:bg-white hover:text-primary animate-fade-in opacity-0" 
        style={{ animationDelay: '300ms' }}
      >
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
          <Download className="mr-2 h-5 w-5" />
          Download My Resume
        </Link>
      </Button>
    </SectionWrapper>
  );
}
