import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-code text-2xl font-bold tracking-tighter">
          Volture
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#home" className="text-foreground/70 transition-colors hover:text-accent" aria-label="Home">
            <Home className="h-5 w-5" />
          </Link>
          <Link href="#projects" className="text-foreground/70 transition-colors hover:text-accent" aria-label="Projects">
            <Briefcase className="h-5 w-5" />
          </Link>
          <Link href="#contact" className="text-foreground/70 transition-colors hover:text-accent" aria-label="Contact">
            <Mail className="h-5 w-5" />
          </Link>
        </nav>
        <Button asChild size="sm">
          <Link href="#contact">
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
