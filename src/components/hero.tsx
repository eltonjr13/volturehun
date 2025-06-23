import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-glow/30 rounded-full filter blur-2xl animate-blob-1 opacity-60"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-orange-glow/30 rounded-full filter blur-2xl animate-blob-2 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-glow/20 rounded-full filter blur-xl animate-blob-3 opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-2xl animate-blob-4 opacity-50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          Eleve sua
          <br className="md:hidden" />
          <span className="font-code text-accent"> presença</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary/80 md:text-xl">
          Construímos sites deslumbrantes e de alto desempenho que geram confiança e impulsionam resultados para o seu negócio.
        </p>
        <div className="mt-10">
          <GradientButton asChild>
            <Link href="#projects">Ver Projetos</Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
};
export default Hero;
