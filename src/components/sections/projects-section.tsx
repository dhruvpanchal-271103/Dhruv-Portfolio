
import ProjectCard from "@/components/project-card";
import { type Project } from "@/lib/types";
import SectionWrapper from "@/components/ui/section-wrapper";
import { cn } from "@/lib/utils"; // Import cn utility

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "EasyStay",
    category: "Web Application",
    description: "EasyStay is a responsive hotel and property booking web app built using React.js, Tailwind CSS, and ShadCN UI.",
    imageUrl: "/images/easystay.png",
    imageHint: "hotel booking interface",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://easy-stay-project.vercel.app/",
  },
  {
    id: "2",
    title: "JS Mini Projects Collection",
    category: "Learning Resource",
    description: "A collection of mini JavaScript projects focused on core concepts like DOM manipulation, events, and interactive UI features. Ideal for practicing and strengthening frontend development skills.",
    imageUrl: "/images/Tasks.png",
    imageHint: "JS Mini Projects Collection",
    tags: ["HTML", "TailwindCSS", "JAvaScript"],
    liveUrl: "https://java-script-tasks.vercel.app/",
  },
  //  {
  //   id: "4",
  //   title: "Open Source Portfolio CMS",
  //   description: "A customizable content management system for creatives to easily showcase their work, built with a focus on performance and SEO.",
  //   imageUrl: "https://placehold.co/600x400.png",
  //   imageHint: "cms interface",
  //   tags: ["Astro", "Markdown", "Preact", "Open Source"],
  //   liveUrl: "#",
  // },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">My Projects</h2>
        <p className="text-lg text-muted-foreground mt-2">A selection of my recent work.</p>
      </div>
      <div className={cn(
        "grid gap-8 max-w-7xl mx-auto",
        featuredProjects.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
      )}>
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            style={{ animationDelay: `${index * 150}ms` }}
            className={cn(
              "animate-fade-in opacity-0 w-full md:max-w-2xl md:mx-auto"
            )}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

