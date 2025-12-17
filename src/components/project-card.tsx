
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
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-foreground">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="border-accent text-accent bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {project.category && project.category.map((cat) => (
            <Badge 
              key={cat}
              variant="secondary" 
              className="text-sm rounded-md"
            >
              {cat}
            </Badge>
          ))}
        </div>
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
