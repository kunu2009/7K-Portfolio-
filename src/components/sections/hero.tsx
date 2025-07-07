import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[calc(100dvh-4rem)] min-h-[500px] w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-muted/50 -z-10"></div>
      <div className="container flex h-full flex-col items-center justify-center text-center">
        <Avatar className="h-32 w-32 mb-6 border-4 border-primary/50">
          <AvatarImage src="https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png" alt="Kunal" data-ai-hint="portrait" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
          Hi, I’m Kunal.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
          Building the 7K Ecosystem — one idea at a time.
        </p>
        <Button asChild size="lg">
          <Link href="#about">
            Discover More <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
