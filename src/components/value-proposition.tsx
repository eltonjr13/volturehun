import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Zap, SearchCheck, Trophy, LayoutDashboard } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const benefits = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Construa Confiança com seus Pacientes",
    description: "Um site profissional transmite segurança e credibilidade desde o primeiro clique.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Aumente os Agendamentos",
    description: "Design focado em conversão e navegação intuitiva que facilita a marcação de consultas.",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Garanta Alta Performance e Acessibilidade",
    description: "Sites rápidos, responsivos e compatíveis com todos os dispositivos — essenciais para pacientes em movimento.",
  },
  {
    icon: <SearchCheck className="h-10 w-10 text-accent" />,
    title: "Melhore seu SEO Local",
    description: "Otimização técnica e de conteúdo para sua clínica ser encontrada facilmente no Google.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-accent" />,
    title: "Fortaleça sua Imagem Profissional",
    description: "Destaque sua especialidade, equipe e diferenciais com um visual moderno e confiável.",
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-accent" />,
    title: "Facilite a Experiência do Paciente",
    description: "Informações claras, rotas de contato acessíveis e integração com WhatsApp, Google Maps e formulários.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Seu site é mais do que apenas um endereço digital.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            É a primeira impressão da sua clínica — e o ativo mais estratégico no marketing médico.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative rounded-lg">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.2}
                borderWidth={1}
              />
              <Card className="text-center bg-card shadow-lg h-full">
                <CardHeader className="items-center p-8">
                  {benefit.icon}
                  <CardTitle className="mt-4 font-headline">{benefit.title}</CardTitle>
                  <CardDescription className="mt-2">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}