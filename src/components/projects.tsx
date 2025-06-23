import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projectsData = [
  {
    title: "E-commerce Platform",
    goal: "Increase online sales and streamline the checkout process.",
    solution: "A custom Shopify theme with a focus on mobile-first UX and fast performance.",
    result: "Achieved a 40% increase in conversion rates and reduced cart abandonment.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ecommerce website"
  },
  {
    title: "SaaS Landing Page",
    goal: "Drive sign-ups for a new software product.",
    solution: "A compelling, single-page design with clear CTAs and interactive demos.",
    result: "Generated over 10,000 sign-ups in the first month post-launch.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "saas dashboard"
  },
  {
    title: "Creative Portfolio",
    goal: "Showcase the work of a world-renowned photographer.",
    solution: "A minimal, image-forward website with elegant animations and gallery features.",
    result: "Praised for its artistry, winning multiple design awards.",
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
            Our Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We transform ideas into exceptional digital experiences.
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
                  <h3 className="font-bold text-sm">Goal</h3>
                  <p className="text-muted-foreground text-sm">{project.goal}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Solution</h3>
                  <p className="text-muted-foreground text-sm">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Result</h3>
                  <p className="text-muted-foreground text-sm">{project.result}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
