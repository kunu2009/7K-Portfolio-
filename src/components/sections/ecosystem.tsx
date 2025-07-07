import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AppWindow, Bot, BookOpenCheck, Network } from "lucide-react";
import Link from "next/link";

const ecosystemComponents = [
  {
    icon: AppWindow,
    title: "7K Life App",
    description: "A central hub for managing tasks, goals, and personal knowledge.",
    href: "https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/",
  },
  {
    icon: Bot,
    title: "Stan AI Assistant",
    description: "An intelligent companion integrated across the ecosystem to automate and assist.",
  },
  {
    icon: BookOpenCheck,
    title: "CLAT Prep Tools",
    description: "Specialized resources and tools for law entrance exam preparation.",
    href: "https://7-klawprep.vercel.app/",
  },
  {
    icon: Network,
    title: "Interconnectedness",
    description: "Seamless flow of information and habits between all tools and apps.",
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">The 7K Ecosystem Vision</h2>
        <p className="text-xl text-muted-foreground mb-12">
          An interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ecosystemComponents.map((component) => {
          const cardContent = (
            <Card className="text-center h-full hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-muted rounded-full mb-4">
                  <component.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{component.title}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
            </Card>
          );

          if (component.href) {
            return (
              <Link key={component.title} href={component.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {cardContent}
              </Link>
            )
          }
          
          return <div key={component.title} className="h-full">{cardContent}</div>;
        })}
      </div>
    </section>
  );
};

export default EcosystemSection;
