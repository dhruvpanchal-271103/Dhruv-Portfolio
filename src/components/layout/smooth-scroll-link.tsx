"use client";
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;
type SmoothScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren<{
  activeClass?: string;
  className?: string;
}>;

const SmoothScrollLink = ({ children, className, ...props }: SmoothScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 80; // Adjust this value based on your fixed header's height
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link {...props} onClick={props.href.startsWith("#") ? handleScroll : undefined} className={cn("transition-colors hover:bg-white", className)}>
      {children}
    </Link>
  );
};
export default SmoothScrollLink;
