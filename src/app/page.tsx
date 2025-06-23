import DockNav from '@/components/header';
import Hero from '@/components/hero';
import ValueProposition from '@/components/value-proposition';
import Projects from '@/components/projects';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <Projects />
        <Cta />
      </main>
      <DockNav />
      <Footer />
    </div>
  );
}
