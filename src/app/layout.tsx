import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Volture Hub: Presença Digital Elevada',
  description: "Uma página inicial estilo portfólio que destaca os projetos web concluídos da agência e enfatiza o valor de ter uma presença digital bem construída e confiável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=PT+Sans:wght@400&family=Source+Code+Pro:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-gradient-to-b from-background to-white text-foreground dark:from-background dark:to-black" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
