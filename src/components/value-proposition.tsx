import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Construa Credibilidade",
    description: "Um site profissional e moderno estabelece confiança e autoridade em seu setor.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Gere Mais Leads",
    description: "Atraia e converta mais visitantes em clientes pagantes com um design focado no usuário.",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Garanta Alto Desempenho",
    description: "Tempos de carregamento rápidos e uma experiência perfeita mantêm os usuários engajados e felizes.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Uma Base Digital Sólida Importa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Seu site é mais do que apenas um URL. É o seu ativo de marketing mais poderoso.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
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
