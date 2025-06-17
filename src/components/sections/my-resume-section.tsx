
import SectionWrapper from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card components

export default function MyResumeSection() {
  return (
    <SectionWrapper id="my-resume" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center"> {/* Centering container for the card */}
        <Card 
          className="bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300 animate-fade-in opacity-0"
          style={{ animationDelay: '100ms' }}
        >
          <CardHeader>
            <CardTitle className="font-headline text-4xl md:text-5xl font-bold text-foreground">My Resume</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 pt-0">
            <p className="text-lg text-muted-foreground">
              Ready to learn more about my qualifications? Download my resume.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-white hover:text-primary"
            >
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
