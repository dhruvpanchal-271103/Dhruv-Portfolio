
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; 
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

export const metadata: Metadata = {
  title: 'Dhruv Panchal',
  description: 'A professional portfolio website with AI-powered cover letter generation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster /> 
        <ScrollToTopButton />
      </body>
    </html>
  );
}
