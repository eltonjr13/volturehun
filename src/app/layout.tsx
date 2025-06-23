import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Volture Hub: Digital Presence Elevated',
  description: "A portfolio-style homepage that highlights the agency's completed web projects and emphasizes the value of having a well-built and trusted digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=PT+Sans:wght@400&family=Source+Code+Pro:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-gradient-to-b from-background to-white text-foreground dark:from-background dark:to-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
