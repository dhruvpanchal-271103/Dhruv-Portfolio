
import ProjectCard from "@/components/project-card";
import { type Project } from "@/lib/types";
import SectionWrapper from "@/components/ui/section-wrapper";
import { cn } from "@/lib/utils"; // Import cn utility

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "EasyStay",
    description: "EasyStay is a responsive hotel and property booking web app built using React.js, Tailwind CSS, and ShadCN UI.",
    imageUrl: "/images/easystay.png",
    imageHint: "hotel booking interface",
    tags: ["React.js", "JavaScript",  "Tailwind CSS" ],
    liveUrl: "https://easy-stay-project.vercel.app/",
  },
  // {
  //   id: "2",
  //   title: "Interactive Data Visualization Dashboard",
  //   description: "A real-time analytics dashboard for visualizing complex datasets, providing actionable insights through an intuitive interface.",
  //   imageUrl: "https://placehold.co/600x400.png",
  //   imageHint: "data dashboard",
  //   tags: ["React", "D3.js", "Node.js", "WebSocket"],
  //   liveUrl: "#",
  // },
  // {
  //   id: "3",
  //   title: "Mobile-First Social Networking App",
  //   description: "A responsive social app designed for community engagement, featuring media sharing and real-time chat functionalities.",
  //   imageUrl: "https://placehold.co/600x400.png",
  //   imageHint: "mobile app",
  //   tags: ["React Native", "Firebase", "GraphQL", "UX Design"],
  // },
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
        "grid gap-8",
        featuredProjects.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
      )}>
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id} 
            style={{ animationDelay: `${index * 150}ms` }} 
            className={cn(
              "animate-fade-in opacity-0 w-full",
              featuredProjects.length === 1 && "md:max-w-xl md:mx-auto"
            )}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
