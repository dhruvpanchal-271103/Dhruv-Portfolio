
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full p-2 shadow-lg transition-opacity duration-300 bg-card hover:bg-accent hover:text-accent-foreground border-border hover:border-accent',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp className="h-6 w-6 animate-bounce" />
    </Button>
  );
}
