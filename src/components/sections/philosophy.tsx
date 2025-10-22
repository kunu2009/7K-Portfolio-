import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Zap, Gift, LucideIcon } from "lucide-react";
import { portfolioSections } from "@/lib/sections-data";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  target: Target,
  zap: Zap,
  gift: Gift,
};

const PhilosophySection = () => {
  const { philosophy } = portfolioSections;
  
  // Don't render if disabled
  if (!philosophy.enabled) return null;
  
  return (
    <section id="philosophy" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">{philosophy.title}</h2>
        <p className="text-xl text-muted-foreground mb-16">
          {philosophy.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {philosophy.philosophies.map((principle) => {
          const IconComponent = principle.icon ? iconMap[principle.icon.toLowerCase()] || Target : Target;
          return (
            <Card key={principle.title} className="text-center h-full border-0 bg-secondary/50 shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-secondary">
              <CardHeader className="items-center">
                <div className="p-4 bg-background rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{principle.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                    {principle.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default PhilosophySection;
