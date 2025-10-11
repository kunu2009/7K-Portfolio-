import { Badge } from "@/components/ui/badge";
import { Wrench, Gamepad2, Music, Crown, AppWindow, Target } from "lucide-react";

const interests = [
  { icon: Target, text: "Productivity" },
  { icon: AppWindow, text: "App Design" },
  { icon: Gamepad2, text: "Game Dev" },
  { icon: Wrench, text: "Handyman Skills" },
  { icon: Music, text: "Music" },
  { icon: Crown, text: "Chess" },
];

const AboutSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            I'm a 12th-standard Arts student with a vision to become a corporate lawyer. My journey isn't just about law; it's about a relentless pursuit of knowledge and a passion for building things. I thrive on learning diverse skills, from artificial intelligence to the nuances of language. My ultimate goal is to create the 7K Ecosystem: a powerful, integrated system of digital and physical tools designed to enhance productivity, fuel personal growth, and unlock creative freedom.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground">
           "I didn’t build a product. I built a place to not feel so alone and helpless while I’m incompetent. These apps aren’t—they’re steady, reliable, and never fail me."
          </blockquote>
        </div>
        <div className="flex flex-col gap-6">
            <h3 className="font-headline text-2xl font-semibold">My Interests</h3>
            <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
                <Badge key={interest.text} variant="secondary" className="text-md py-2 px-4 gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                    <interest.icon className="h-4 w-4 text-primary" />
                    {interest.text}
                </Badge>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
