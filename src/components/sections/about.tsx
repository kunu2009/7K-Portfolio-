import { Badge } from "@/components/ui/badge";
import { Code, Crown, Languages, Scale, Sparkles, Target } from "lucide-react";

const interests = [
  { icon: Sparkles, text: "AI" },
  { icon: Target, text: "Productivity" },
  { icon: Scale, text: "Law" },
  { icon: Crown, text: "Chess" },
  { icon: Languages, text: "Languages" },
  { icon: Code, text: "Tech Building" },
];

const AboutSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a 12th-standard Arts student with a vision to become a corporate lawyer. My journey isn't just about law; it's about a relentless pursuit of knowledge and a passion for building things. I thrive on learning diverse skills, from artificial intelligence to the nuances of language. My ultimate goal is to create the 7K Ecosystem: a powerful, integrated system of digital and physical tools designed to enhance productivity, fuel personal growth, and unlock creative freedom.
          </p>
        </div>
        <div className="flex flex-col gap-6">
            <h3 className="font-headline text-2xl font-semibold">My Interests</h3>
            <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
                <Badge key={interest.text} variant="secondary" className="text-md py-2 px-4 gap-2 transition-transform hover:scale-105 cursor-default">
                    <interest.icon className="h-4 w-4 text-primary" />
                    {interest.text}
                </Badge>
            ))}
            <Badge variant="secondary" className="text-md py-2 px-4 transition-transform hover:scale-105 cursor-default">Self-Improvement</Badge>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
