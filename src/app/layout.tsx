import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

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
    <html lang="en" className="dark">{/* Apply dark class for default dark theme */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Remove existing Inter font link if Manrope is primary */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster /> {/* Add Toaster here for global access */}
      </body>
    </html>
  );
}
