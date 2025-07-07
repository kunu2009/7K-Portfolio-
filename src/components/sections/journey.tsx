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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

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

export default function JourneySection() {
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
    <section id="journey" className="py-24 sm:py-32 bg-secondary/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Find Your Place in the Journey</h2>
          <p className="text-lg text-muted-foreground mb-12">
            The 7K Ecosystem is built for growth. Tell me about yourself, and I'll suggest a personalized starting point for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="border shadow-md">
            <CardHeader>
              <CardTitle>Get Personalized Recommendations</CardTitle>
              <CardDescription>Fill out the form to get an AI-powered recommendation.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Interests</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., AI, productivity, coding, self-improvement..."
                            className="resize-none bg-background"
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
                        <FormLabel>Your Background</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Student, developer, designer, lifelong learner..."
                            className="resize-none bg-background"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full">
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate My Path
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center min-h-[400px] rounded-lg">
              {loading && (
                  <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                      <p className="mt-4 text-muted-foreground">Generating your personalized path...</p>
                  </div>
              )}
              {result && (
                  <Card className="w-full animate-fade-in bg-background shadow-xl border">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                              <Sparkles className="h-6 w-6 text-primary"/>
                              Your Personalized Recommendations
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                              <h4 className="font-semibold mb-2 text-foreground">Recommended for you:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {result.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
                              </ul>
                        </div>
                        <div>
                              <h4 className="font-semibold mb-2 text-foreground">The "Why"</h4>
                              <p className="text-muted-foreground">{result.reasoning}</p>
                        </div>
                      </CardContent>
                  </Card>
              )}
              {!loading && !result && (
                <div className="text-center text-muted-foreground">
                  <Wand2 className="mx-auto h-12 w-12 mb-4" />
                  <p>Your results will appear here.</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
