import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="h-dvh min-h-[600px] w-full flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center text-center">
        <Avatar className="h-36 w-36 mb-8 border-4 border-secondary">
          <AvatarImage src="https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png" alt="Kunal" data-ai-hint="portrait" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          Hi, I’m Kunal.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
          Building the 7K Ecosystem — one idea at a time.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="#about">
            Discover More <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
