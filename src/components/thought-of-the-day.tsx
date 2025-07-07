"use client";

import { useEffect, useState } from "react";
import { generateThoughtOfTheDay, type ThoughtOfTheDayOutput } from "@/ai/flows/thought-of-the-day-flow";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb } from "lucide-react";

export function ThoughtOfTheDay() {
  const [data, setData] = useState<ThoughtOfTheDayOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchThought() {
      try {
        setLoading(true);
        const thought = await generateThoughtOfTheDay();
        setData(thought);
      } catch (error) {
        console.error("Failed to fetch thought of the day", error);
        setData({
            thought: "The greatest productivity hack is a good night's sleep.",
            author: "An Ancient Proverb"
        });
      } finally {
        setLoading(false);
      }
    }
    fetchThought();
  }, []);

  return (
    <div className="w-full max-w-2xl text-center">
        <div className="inline-flex items-center justify-center mb-4">
            <Lightbulb className="h-6 w-6 text-primary mr-3"/>
            <h3 className="font-headline text-2xl font-semibold">A Thought for the Day</h3>
        </div>
      {loading ? (
        <div className="space-y-2">
            <Skeleton className="h-5 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/4 mx-auto" />
        </div>
      ) : (
        <figure>
          <blockquote className="text-lg italic text-foreground">
            “{data?.thought}”
          </blockquote>
          <figcaption className="mt-2 text-sm text-muted-foreground">
            — {data?.author}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
