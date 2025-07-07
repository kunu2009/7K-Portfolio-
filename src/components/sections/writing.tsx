import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Writing = {
  title: string;
  quote: string;
  coverImage: string;
  hint?: string;
};

const writings: Writing[] = [
  {
    title: "Wolf and the Fox",
    quote: "In a world of shadows, even the brightest light can be deceiving.",
    coverImage: "https://storage.googleapis.com/fantastic-images/4df3a39e-d71d-407b-832f-b883c79a296a.jpeg",
    hint: "wolf moon",
  },
  {
    title: "Lavender Skies",
    quote: "Their love story was written in the stars, under lavender skies.",
    coverImage: "https://storage.googleapis.com/fantastic-images/ac229712-40a8-443b-821f-0a0e9118d53b.jpeg",
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="container py-16 md:py-24">
       <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Books & Writing</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Exploring worlds and ideas through the written word.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {writings.map((writing) => (
          <Card key={writing.title} className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">
              <Image
                src={writing.coverImage}
                alt={`${writing.title} book cover`}
                width={400}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint={writing.hint}
              />
            </div>
            <div className="sm:w-2/3 flex flex-col p-6">
                <CardContent className="flex-grow p-0">
                    <h3 className="font-headline text-2xl font-bold mb-4">{writing.title}</h3>
                    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
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
