'use client';

import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Beams from './Beams';
import './Beams.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['tecnologia de ponta', 'segurança blockchain', 'automação com IA', 'inovação digital'],
    loop: 0, // Loop infinitely
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
      >
        <Beams
          beamWidth={2.1}
          beamHeight={25}
          beamNumber={20}
          lightColor="#D6B300"
          speed={5.2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          Impulsione seu negócio com
          <br className="md:hidden" />
          <span className="font-code text-accent"> {text}</span>
          <Cursor cursorStyle='_' />
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-primary/80 md:text-xl">
          Da segurança blockchain à automação inteligente: soluções arquitetadas para escalar, proteger e inovar.
        </p>
        <div className="mt-10">
          <GradientButton asChild>
            <Link href="#projects">Conheça nossas Soluções</Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
};
export default Hero;
