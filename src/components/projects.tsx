import { Carousel, type SlideData } from "@/components/ui/carousel";

const projectsData = [
  {
    title: "Clínica Odontológica Premium",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dental clinic"
  },
  {
    title: "Clínica de Estética Avançada",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "aesthetics clinic"
  },
  {
    title: "Consultório Médico Multiprofissional",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "medical office"
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
            Nossos Projetos em Destaque
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Transformamos clínicas e profissionais da saúde em marcas de autoridade online.
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
