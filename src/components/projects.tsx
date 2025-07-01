import { Carousel, type SlideData } from "@/components/ui/carousel";

const projectsData = [
  {
    title: "Plataforma Financeira Blockchain",
    imageUrl: "https://i.imgur.com/MbnYBmm.png",
    imageHint: "blockchain finance"
  },
  {
    title: "Automação Industrial com IA",
    imageUrl: "https://i.imgur.com/Fq6JI5u.png",
    imageHint: "industrial automation"
  },
  {
    title: "Sistema de Logística Integrada",
    imageUrl: "https://i.imgur.com/0I0yFvV.png",
    imageHint: "logistics system"
  },
];

const projectSlides: SlideData[] = projectsData.map(p => ({
  title: p.title,
  src: p.imageUrl,
  button: "Ver Projeto",
  imageHint: p.imageHint,
}));

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Casos de Sucesso em Inovação Tecnológica
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Transformamos desafios complexos em plataformas digitais seguras, escaláveis e flexíveis.
          </p>
        </div>
        <div className="w-full overflow-hidden py-12">
          <div className="relative mx-auto h-[50vmin] w-full sm:h-[70vmin] sm:w-[70vmin]">
            <Carousel slides={projectSlides} />
          </div>
        </div>
      </div>
    </section>
  );
}
