
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SevenKLifeIcon = () => <Image src="/images/7klife-logo.svg" alt="7K Life Logo" width={32} height={32} />;
const LawPrepIcon = () => <Image src="/images/lawprep-logo.svg" alt="LawPrep Logo" width={32} height={32} />;

const ecosystemComponents = [
  {
    icon: SevenKLifeIcon,
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
    icon: LawPrepIcon,
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
    <section id="ecosystem" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">The 7K Ecosystem Vision</h2>
        <p className="text-xl text-muted-foreground mb-16">
          An interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ecosystemComponents.map((component) => {
          const cardContent = (
            <Card className="text-center h-full border shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary">
              <CardHeader className="items-center">
                <div className="p-4 bg-secondary rounded-full mb-4">
                  <component.icon />
                </div>
                <CardTitle className="font-headline">{component.title}</CardTitle>
                <CardDescription className="mt-2">{component.description}</CardDescription>
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
