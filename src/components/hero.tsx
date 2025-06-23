import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div style={{ animationDelay: '0s' }} className="absolute top-[-10%] left-[5%] w-72 h-72 bg-accent/20 rounded-full filter blur-3xl animate-blob opacity-70"></div>
        <div style={{ animationDelay: '2s' }} className="absolute top-[10%] right-[10%] w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob opacity-50"></div>
        <div style={{ animationDelay: '4s' }} className="absolute bottom-[-5%] left-[20%] w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-blob opacity-60"></div>
        <div style={{ animationDelay: '1s' }} className="absolute bottom-[15%] right-[25%] w-64 h-64 bg-primary/5 rounded-full filter blur-2xl animate-blob opacity-50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          Elevate your
          <br className="md:hidden" />
          <span className="font-code text-accent"> presence</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary/80 md:text-xl">
          We build stunning, high-performance websites that build trust and drive results for your business.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
