"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements; // Allow specifying the element type
  animationDelay?: string; // e.g., "200ms", "0.5s"
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  as: Element = 'section',
  id,
  animationDelay,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const style = animationDelay ? { animationDelay } as React.CSSProperties : {};

  return (
    <Element
      id={id}
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 opacity-0 transform translate-y-5 transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0 animate-fade-in',
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Element>
  );
};

export default SectionWrapper;
