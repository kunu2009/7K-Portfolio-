import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Zap, Gift } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Radical Productivity",
    description: "Building tools that don't just manage tasks, but amplify focus and eliminate friction to help you achieve deep, meaningful work.",
  },
  {
    icon: Zap,
    title: "Continuous Growth",
    description: "Creating an ecosystem that encourages learning and self-improvement, turning everyday habits into a path for personal evolution.",
  },
  {
    icon: Gift,
    title: "Creative Freedom",
    description: "Designing a system that organizes the chaos of life, freeing up mental space for creativity, innovation, and the pursuit of new ideas.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">The Philosophy</h2>
        <p className="text-xl text-muted-foreground mb-16">
          The 'why' behind the 7K Ecosystem. These are the core principles that guide every project and idea.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((principle) => (
            <Card key={principle.title} className="text-center h-full border-0 bg-secondary/50 shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-secondary">
              <CardHeader className="items-center">
                <div className="p-4 bg-background rounded-full mb-4">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{principle.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                    {principle.description}
                </CardDescription>
              </CardHeader>
            </Card>
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
