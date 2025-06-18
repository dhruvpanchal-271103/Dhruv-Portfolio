
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Code, Palette, Wind } from "lucide-react";

const skills = [
  { name: "React.JS", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "TailwindCSS", icon: Wind },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">About</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-stretch">
        <div className="md:col-span-2 flex justify-center md:justify-start h-full">
          <Image
            src="/images/Dhruv_Pic.png"
            alt="Dhruv Panchal - Professional Headshot"
            width={320}
            height={320}
            className="rounded-lg shadow-2xl border-4 border-border object-cover aspect-square animate-fade-in opacity-0 h-full"
            data-ai-hint="male portrait"
            priority
            style={{ animationDelay: '50ms' }}
          />
        </div>

        <div className="md:col-span-3 h-full">
          <Card
            className="h-full flex flex-col bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300 animate-fade-in opacity-0"
            style={{ animationDelay: '150ms' }}
          >
            <CardContent className="p-6 md:p-8 flex-grow">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Hello! I&apos;m Dhruv Panchal, a passionate Frontend Developer with a strong interest in building clean, responsive, and user-friendly web interfaces.
                I have experience with React.js, Tailwind CSS, and ShadCN UI, and I enjoy turning ideas into real, working websites. I love learning new technologies and continuously improving my skills.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I aim to write clean, maintainable code and create seamless user experiences. When I&apos;m not coding, I enjoy exploring new tools, watching tech tutorials, and improving my problem-solving skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-headline text-3xl font-semibold text-center text-foreground mb-8">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="w-full sm:w-[calc(50%_-_0.75rem)] lg:w-72 bg-card/50 hover:shadow-accent/20 hover:shadow-lg transition-shadow duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <skill.icon className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground">{skill.name}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
