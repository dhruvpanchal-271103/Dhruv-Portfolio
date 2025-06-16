
import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Education</h2>
        <p className="text-lg text-muted-foreground mt-2">My academic background and qualifications.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationHistory.map((edu, index) => (
          <Card
            key={edu.id}
            className="bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300 animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-md shrink-0">
                   <School className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl text-foreground">{edu.institution}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            </CardHeader>
            
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
