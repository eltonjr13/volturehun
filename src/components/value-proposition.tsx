import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Zap, Trophy, Network, ServerCog } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Segurança Criptográfica & Blockchain",
    description: "Proteção imutável e descentralizada para seus dados sensíveis.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Arquiteturas Escaláveis",
    description: "Infraestrutura resiliente que cresce com sua demanda, sem gargalos.",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Automação Inteligente & IA",
    description: "Agentes e algoritmos para otimizar processos e reduzir custos.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-accent" />,
    title: "Experiência de Uso Premium",
    description: "Interfaces intuitivas que aceleram adoção e impulsionam resultados.",
  },
  {
    icon: <Network className="h-10 w-10 text-accent" />,
    title: "Integrações de Sistemas Complexos",
    description: "Conectamos plataformas e APIs para um fluxo de trabalho unificado.",
  },
  {
    icon: <ServerCog className="h-10 w-10 text-accent" />,
    title: "Monitoramento & Suporte 24/7",
    description: "Observabilidade contínua e manutenção proativa para uptime garantido.",
  },
];

export default function ValueProposition() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologia que Transforma. Resultados que Impressionam.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Construímos as bases para que sua empresa inove com segurança e eficiência.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card 
              key={benefit.title} 
              className="text-center bg-card shadow-lg h-full transition-all duration-300 ease-out hover:border-2 hover:border-orange-500 hover:ring-2 hover:ring-orange-500/75 hover:shadow-xl hover:shadow-orange-500/50"
            >
              <CardHeader className="items-center p-8">
                {benefit.icon}
                <CardTitle className="mt-4 font-headline">{benefit.title}</CardTitle>
                <CardDescription className="mt-2">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
