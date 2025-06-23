import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projectsData = [
  {
    title: "Clínica Odontológica Premium",
    goal: "Aumentar os agendamentos e valorizar o posicionamento premium da clínica.",
    solution: "Site institucional elegante, com integração de WhatsApp, SEO local e portfólio de sorrisos.",
    result: "Dobro de agendamentos online em menos de 60 dias.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dental clinic"
  },
  {
    title: "Clínica de Estética Avançada",
    goal: "Posicionar-se como referência em procedimentos não invasivos.",
    solution: "Página com agendamento integrado, depoimentos de pacientes e blog educativo.",
    result: "Aumento de 45% nos contatos via site e destaque em buscas regionais.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "aesthetics clinic"
  },
  {
    title: "Consultório Médico Multiprofissional",
    goal: "Reunir todas as especialidades em uma experiência clara e organizada.",
    solution: "Design modular, bios profissionais, agenda online e integração com mapa.",
    result: "Mais visibilidade e menor taxa de desistência em agendamentos.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "medical office"
  },
];

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
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-card shadow-lg flex flex-col transition-all duration-300 hover:scale-105">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h3 className="font-bold text-sm">Meta</h3>
                  <p className="text-muted-foreground text-sm">{project.goal}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Solução</h3>
                  <p className="text-muted-foreground text-sm">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Resultado</h3>
                  <p className="text-muted-foreground text-sm">{project.result}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver Projeto</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}