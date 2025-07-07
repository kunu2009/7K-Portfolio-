import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Writing = {
  title: string;
  quote: string;
  coverImage: string;
  hint: string;
};

const writings: Writing[] = [
  {
    title: "Wolf and the Fox",
    quote: "In a world of shadows, even the brightest light can be deceiving.",
    coverImage: "https://placehold.co/800x1200.png",
    hint: "dark abstract shapes",
  },
  {
    title: "Lavender Skies",
    quote: "Their love story was written in the stars, under lavender skies.",
    coverImage: "https://placehold.co/800x1200.png",
    hint: "glowing geometric pattern",
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
       <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Books & Writing</h2>
        <p className="text-lg text-muted-foreground mb-16">
          Exploring worlds and ideas through the written word.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {writings.map((writing) => (
          <Card key={writing.title} className="overflow-hidden group bg-secondary/50 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col sm:flex-row hover:ring-2 hover:ring-primary">
            <div className="sm:w-1/3">
              <Image
                src={writing.coverImage}
                alt={`${writing.title} book cover`}
                width={800}
                height={1200}
                className="w-full h-full object-cover"
                data-ai-hint={writing.hint}
              />
            </div>
            <div className="sm:w-2/3 flex flex-col p-8">
                <CardContent className="flex-grow p-0">
                    <h3 className="font-headline text-2xl font-bold mb-4">{writing.title}</h3>
                    <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
                        {writing.quote}
                    </blockquote>
                </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WritingSection;
