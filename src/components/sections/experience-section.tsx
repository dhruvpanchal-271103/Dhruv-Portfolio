
import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { type ExperienceItem } from "@/lib/types";
import { Briefcase } from "lucide-react";

const workExperience: ExperienceItem[] = [
  {
    id: "exp1",
    company: "7Span",
    role: "Frontend Developer Intern",
    startDate: "January 2025",
    endDate: "Present",
    responsibilities: [
      "Developed responsive user interfaces using React.js, improving the overall look and feel of the web app.",
      "Used Tailwind CSS and ShadCN UI to build clean, reusable components and consistent design patterns.",
      "Collaborated with teammates using Git and GitHub for version control and project management.",
      "Worked with API integration and handled dynamic data rendering in different UI components.",
      "Participated in daily stand-ups and learned how to manage tasks using tools like Trello or Jira.",
      "Improved debugging skills and learned to solve real-world problems through hands-on experience.",
      "Focused on writing clean, readable code and followed best practices in component structure.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
        <p className="text-lg text-muted-foreground mt-2">My professional journey and roles.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {workExperience.map((exp, index) => (
            <div
              key={exp.id}
              className="flex animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Left Column: Timeline marker and connecting line */}
              <div className="flex flex-col items-center mr-6 w-12"> {/* Added fixed width for alignment */}
                <div className="bg-primary/10 p-2.5 rounded-full ring-4 ring-background z-10">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                {index < workExperience.length - 1 && (
                  <div className="w-px flex-1 bg-border/70 mt-2"></div>
                )}
              </div>

              {/* Right Column: Content Card */}
              <Card className="flex-1 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-xl md:text-2xl text-foreground mb-1">{exp.role}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-2 gap-y-1">
                    <CardDescription className="text-base text-muted-foreground font-medium">{exp.company}</CardDescription>
                    <p className="text-sm text-muted-foreground/80 sm:mt-0 shrink-0 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/90 leading-relaxed">
                    {exp.responsibilities.map((responsibility, rIndex) => (
                      <li key={rIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
