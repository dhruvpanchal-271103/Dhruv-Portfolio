
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/dhruvpanchal-271103" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dhruv2711/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-sm">
            &copy; {currentYear} Dhruv Panchal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/80">Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
