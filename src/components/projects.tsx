import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projectsData = [
  {
    title: "Plataforma de E-commerce",
    goal: "Aumentar as vendas online e otimizar o processo de checkout.",
    solution: "Um tema Shopify personalizado com foco em UX mobile-first e desempenho rápido.",
    result: "Alcançou um aumento de 40% nas taxas de conversão e reduziu o abandono de carrinho.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ecommerce website"
  },
  {
    title: "Página de Destino SaaS",
    goal: "Impulsionar as inscrições para um novo produto de software.",
    solution: "Um design de página única atraente com CTAs claros e demonstrações interativas.",
    result: "Gerou mais de 10.000 inscrições no primeiro mês após o lançamento.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "saas dashboard"
  },
  {
    title: "Portfólio Criativo",
    goal: "Apresentar o trabalho de um fotógrafo de renome mundial.",
    solution: "Um site minimalista, focado em imagens, com animações elegantes e recursos de galeria.",
    result: "Elogiado por sua arte, ganhando vários prêmios de design.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "photography portfolio"
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
            Transformamos ideias em experiências digitais excepcionais.
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
