"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { generatePersonalizedRecommendations } from "@/ai/flows/personalized-recommendations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const formSchema = z.object({
  interests: z.string().min(10, {
    message: "Please tell us a bit more about your interests.",
  }),
  background: z.string().min(10, {
    message: "Please tell us a bit more about your background.",
  }),
});

type RecommendationOutput = {
  recommendations: string[];
  reasoning: string;
};

export default function AIRecommendationsSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      background: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
        const response = await generatePersonalizedRecommendations(values);
        const recommendationsList = response.recommendations.split(',').map(item => item.trim()).filter(Boolean);
        setResult({
            recommendations: recommendationsList,
            reasoning: response.reasoning
        });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="journey" className="container py-16 md:py-24 bg-card border-y">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Join the 7K Journey</h2>
        <p className="text-lg text-muted-foreground mb-8">
          The 7K Ecosystem is built for growth. Tell me about yourself, and I'll suggest a personalized path for you within the ecosystem.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Your Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., AI, productivity, coding, self-improvement..."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="background"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Your Background</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Student, developer, designer, lifelong learner..."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} size="lg" className="w-full">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generate My Path
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center">
            {loading && (
                <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-muted-foreground">Generating your personalized path...</p>
                </div>
            )}
            {result && (
                <Card className="w-full animate-fade-in bg-background">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                            <Sparkles className="h-6 w-6 text-accent"/>
                            Your Personalized Recommendations
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       <div>
                            <h4 className="font-semibold mb-2">Recommended for you:</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {result.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
                            </ul>
                       </div>
                       <div>
                            <h4 className="font-semibold mb-2">Why?</h4>
                            <p className="text-muted-foreground">{result.reasoning}</p>
                       </div>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
    </section>
  );
}
