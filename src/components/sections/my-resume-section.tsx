
import SectionWrapper from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card components

export default function MyResumeSection() {
  return (
    <SectionWrapper id="my-resume" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
          <CardHeader className="mb-4">
            <CardTitle className="font-headline text-4xl md:text-5xl font-bold text-foreground">My Resume</CardTitle>
            <p className="text-lg text-muted-foreground">
              Want to know more about me? Check out my resume.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col items-center"> {/* Added py-8 for more vertical padding */}
           
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-white hover:text-primary"
            >
              <Link href="/Dhruv-Panchal.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </CardContent>
      </div>
    </SectionWrapper>
  );
}
