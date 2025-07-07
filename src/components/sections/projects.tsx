import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindow, Bot, GraduationCap, Grid, Sparkles, BookMarked } from "lucide-react";
import Link from "next/link";

const ongoingProjects = [
  {
    icon: AppWindow,
    title: "7K Life App",
    description: "Core application for holistic life management and productivity.",
    href: "https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/",
  },
  {
    icon: GraduationCap,
    title: "CLAT/MHCET Tools",
    description: "Web-based utilities and resources for law aspirants.",
    href: "https://7-klawprep.vercel.app/",
  },
  {
    icon: Bot,
    title: "Stan: AI Assistant",
    description: "An AI running on Android to provide assistance on the go.",
  },
];

const futureProjects = [
    {
        icon: Grid,
        title: "Custom Launcher",
        description: "A minimal and productivity-focused Android launcher.",
    },
    {
        icon: Sparkles,
        title: "Standalone AI Tools",
        description: "A suite of small, powerful AI utilities for specific tasks.",
    },
    {
        icon: BookMarked,
        title: "Smart Journal App",
        description: "An intelligent journaling app with prompts and analysis.",
    }
];

const ProjectCard = ({ icon: Icon, title, description, href }: { icon: React.ElementType, title: string, description: string, href?: string }) => {
    const cardContent = (
        <Card className="h-full border shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                    <div>
                        <CardTitle className="font-headline mb-1">{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {cardContent}
            </Link>
        )
    }

    return cardContent;
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Prototypes & Ideas</h2>
          <p className="text-lg text-muted-foreground mb-12">
            A glimpse into what's currently being built and what the future holds for the 7K Ecosystem.
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
            <TabsTrigger value="ongoing" className="text-md">Ongoing</TabsTrigger>
            <TabsTrigger value="future" className="text-md">Future Ideas</TabsTrigger>
          </TabsList>
          <TabsContent value="ongoing">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ongoingProjects.map(proj => <ProjectCard key={proj.title} {...proj} />)}
              </div>
          </TabsContent>
          <TabsContent value="future">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {futureProjects.map(proj => <ProjectCard key={proj.title} {...proj} />)}
              </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
