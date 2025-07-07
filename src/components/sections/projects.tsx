import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindow, Bot, GraduationCap, Grid, Sparkles, BookMarked } from "lucide-react";

const ongoingProjects = [
  {
    icon: AppWindow,
    title: "7K Life App",
    description: "Core application for holistic life management and productivity.",
  },
  {
    icon: GraduationCap,
    title: "CLAT/MHCET Tools",
    description: "Web-based utilities and resources for law aspirants.",
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

const ProjectCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <Card className="h-full">
        <CardHeader>
            <div className="flex items-start gap-4">
                <Icon className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                    <CardTitle className="font-headline mb-1">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </div>
        </CardHeader>
    </Card>
)

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-16 md:py-24 bg-card border-y">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Prototypes & Ideas</h2>
        <p className="text-lg text-muted-foreground mb-8">
          A glimpse into what's currently being built and what the future holds for the 7K Ecosystem.
        </p>
      </div>

      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="future">Future Ideas</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ongoingProjects.map(proj => <ProjectCard key={proj.title} {...proj} />)}
            </div>
        </TabsContent>
        <TabsContent value="future">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {futureProjects.map(proj => <ProjectCard key={proj.title} {...proj} />)}
            </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProjectsSection;
