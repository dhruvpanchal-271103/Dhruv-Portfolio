
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-accent/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-fit transition-transform duration-500 hover:scale-105 p-1 rounded-xl"
            data-ai-hint={project.imageHint || "technology project"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 text-foreground">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="border-accent text-accent bg-background hover:bg-accent hover:text-accent-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        {project.category && (
          <Badge 
            variant="secondary" 
            className="text-sm rounded-md"
          >
            {project.category}
          </Badge>
        )}
        <div className="flex space-x-3">
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Site
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted/50 hover:text-foreground">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
