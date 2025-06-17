
"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, User, Mail, BookOpen, Building, FileText } from "lucide-react"; // Added FileText
import SmoothScrollLink from "./smooth-scroll-link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const navItems = [
  { href: "#about", label: "About", icon: User },
  { href: "#education", label: "Education", icon: BookOpen },
  { href: "#experience", label: "Experience", icon: Building },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#my-resume", label: "Resume", icon: FileText }, // Added Resume link
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <SmoothScrollLink
            href="#"
            className="text-2xl font-headline font-bold text-foreground hover:text-accent"
            onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
          >
            <span>Dhruv Panchal</span>
          </SmoothScrollLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <SmoothScrollLink
                key={item.label}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-accent hover:bg-transparent transition-colors"
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-6">
                <div className="flex flex-col space-y-6">
                  <SmoothScrollLink
                    href="#"
                    className="flex items-center text-2xl font-headline font-bold text-foreground self-start"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Dhruv Panchal</span>
                  </SmoothScrollLink>
                  {navItems.map((item) => (
                     <SheetClose asChild key={item.label}>
                        <SmoothScrollLink
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-lg font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </SmoothScrollLink>
                     </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
