import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { Icons } from "./icons";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Pronto para elevar sua empresa ao próximo nível tecnológico?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Fale com nossos especialistas em soluções de alta complexidade.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="mailto:hello@volture.hub">
              <Mail className="mr-2 h-5 w-5" />
              Vamos Conversar
            </Link>
          </Button>
        </div>
        <div className="mt-12 flex justify-center items-center space-x-6">
          <Link href="mailto:hello@volture.hub" className="text-muted-foreground hover:text-primary transition-colors">
            hello@volture.hub
          </Link>
          <div className="h-6 w-px bg-border"></div>
          <div className="flex items-center space-x-4">
            <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
              <Icons.whatsapp className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
