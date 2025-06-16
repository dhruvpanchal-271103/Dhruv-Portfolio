
import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "dhruvpan2711@gmail.com",
    href: "mailto:dhruvpan2711@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9714172527",
    href: "tel:+919714172527",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dhruv2711",
    href: "https://www.linkedin.com/in/dhruv2711/",
    target: "_blank",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dhruvpanchal-271103",
    href: "https://github.com/dhruvpanchal-271103",
    target: "_blank",
  },
];

export default function ContactSection() {
  const firstRowItems = contactItems.slice(0, 2); // Email, Phone
  const secondRowItems = contactItems.slice(2, 4); // LinkedIn, GitHub

  return (
    <SectionWrapper id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2">Feel free to reach out to me.</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              {/* Line 1: Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {firstRowItems.map((item) => {
                  const Icon = item.icon; // Capitalized for JSX
                  return (
                    <div key={item.label} className="flex items-start space-x-4">
                      <Icon className="w-7 h-7 text-accent mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{item.label}</h4>
                        <Link
                          href={item.href}
                          target={item.target}
                          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-accent transition-colors break-all"
                        >
                          {item.value}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Line 2: LinkedIn and GitHub */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {secondRowItems.map((item) => {
                  const Icon = item.icon; // Capitalized for JSX
                  return (
                    <div key={item.label} className="flex items-start space-x-4">
                      <Icon className="w-7 h-7 text-accent mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{item.label}</h4>
                        <Link
                          href={item.href}
                          target={item.target}
                          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-accent transition-colors break-all"
                        >
                          {item.value}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
       
      </div>
    </SectionWrapper>
  );
}
