
import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type EducationItem } from "@/lib/types";
import { School } from "lucide-react";

const educationHistory: EducationItem[] = [
  {
    id: "edu1",
    institution: "Sal College Of Engineering",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Computer Engineering",
    startDate: "August 2022",
    endDate: "May 2025",
  },
  {
    id: "edu2",
    institution: "Government Polytechnic",
    degree: "Diploma",
    fieldOfStudy: "Computer Engineering",
    startDate: "August 2019",
    endDate: "May 2022",
  },
  {
    id: "edu3",
    institution: "Shree New Vidhya Vihar School",
    degree: "10th Std.",
    fieldOfStudy: "S.S.C",
    startDate: "June 2018",
    endDate: "May 2019",
  },
];

export default function EducationSection() {
  return (
    <SectionWrapper id="education" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Education</h2>
        <p className="text-lg text-muted-foreground mt-2">My academic background and qualifications.</p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-16">
        {educationHistory.map((edu, index) => (
          <div 
            key={edu.id} 
            className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 items-start animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Timeline Gutter */}
            <div className="flex flex-col items-center self-stretch pt-1"> {/* self-stretch to make gutter full height of row */}
              <div className="bg-accent text-accent-foreground rounded-full p-0 shadow-lg flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <School className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              {index < educationHistory.length - 1 && (
                <div className="w-0.5 grow bg-border mt-4"></div> 
              )}
            </div>

            {/* Content Card */}
            <Card className="bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300 w-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-foreground mb-1">
                  {edu.institution}
                </CardTitle>
                <CardDescription className="text-base text-foreground/90">
                  {edu.degree}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {edu.fieldOfStudy && (
                  <p className="text-sm text-muted-foreground mb-1">{edu.fieldOfStudy}</p>
                )}
                <p className="text-xs text-muted-foreground/80">
                  {edu.startDate} - {edu.endDate}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
