import Link from "next/link";
import { ArrowRight, BookOpen, Telescope } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const styles = [
  {
    icon: BookOpen,
    title: "The Storyteller",
    description: "A guided, narrative journey through my work, philosophy, and ambitions. Best for a detailed, linear experience.",
    href: "/story",
    status: "live",
  },
  {
    icon: Telescope,
    title: "The Innovator",
    description: "An experimental, non-linear exploration of projects and ideas. Best for the curious mind. (Coming Soon)",
    href: "/innovator",
    status: "soon",
  },
];

export default function GatewayPage() {
  return (
    <div className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-background p-8">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      </div>
       <div className="z-10 text-center animate-fade-in-up">
        <h1 className="font-headline text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
          Choose Your Experience
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-16">
          My digital universe has multiple entry points. Select the one that best fits how you'd like to explore my work and vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {styles.map((style) => (
            <Link key={style.title} href={style.href} className={style.status === 'soon' ? 'pointer-events-none' : ''}>
              <Card className="h-full text-left bg-secondary/50 hover:ring-2 hover:ring-primary hover:scale-[1.03] transition-all duration-300 ease-in-out">
                <CardHeader>
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-background rounded-full">
                        <style.icon className="h-6 w-6 text-primary" />
                     </div>
                     <div className="flex-1">
                        <CardTitle className="font-headline text-2xl mb-2">{style.title}</CardTitle>
                        <CardDescription>{style.description}</CardDescription>
                         {style.status === 'soon' && (
                            <p className="text-xs text-primary font-bold mt-2">COMING SOON</p>
                         )}
                     </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
       </div>
    </div>
  );
}
