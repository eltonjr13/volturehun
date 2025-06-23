import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Build Credibility",
    description: "A professional, modern website establishes trust and authority in your industry.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Generate More Leads",
    description: "Attract and convert more visitors into paying customers with a user-focused design.",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Ensure High Performance",
    description: "Fast loading times and a seamless experience keep users engaged and happy.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A Strong Digital Foundation Matters
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your website is more than just a URL. It's your most powerful marketing asset.
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
