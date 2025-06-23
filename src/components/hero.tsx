'use client';

import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['autoridade digital', 'clínica desejada', 'marca confiável', 'potência no digital', 'presença imbatível'],
    loop: 0, // Loop infinitely
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-glow/30 rounded-full filter blur-2xl animate-blob-1 opacity-60"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-orange-glow/30 rounded-full filter blur-2xl animate-blob-2 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-glow/20 rounded-full filter blur-xl animate-blob-3 opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-2xl animate-blob-4 opacity-50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          Transforme sua clínica em
          <br className="md:hidden" />
          <span className="font-code text-accent"> {text}</span>
          <Cursor cursorStyle='_' />
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-primary/80 md:text-xl">
          Criamos sites elegantes, rápidos e otimizados que aumentam a confiança dos pacientes e destacam sua autoridade no setor da saúde.
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
