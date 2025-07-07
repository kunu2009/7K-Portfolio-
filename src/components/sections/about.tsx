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
    <section id="about" className="container py-16 md:py-24 bg-card border-y">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a 12th-standard Arts student with a vision to become a corporate lawyer. My journey isn't just about law; it's about a relentless pursuit of knowledge and a passion for building things. I thrive on learning diverse skills, from artificial intelligence to the nuances of language. My ultimate goal is to create the 7K Ecosystem: a powerful, integrated system of digital and physical tools designed to enhance productivity, fuel personal growth, and unlock creative freedom.
          </p>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="font-headline text-2xl font-semibold">My Interests</h3>
            <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
                <Badge key={interest.text} variant="secondary" className="text-sm py-2 px-4 gap-2">
                    <interest.icon className="h-4 w-4" />
                    {interest.text}
                </Badge>
            ))}
            <Badge variant="secondary" className="text-sm py-2 px-4">Self-Improvement</Badge>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
