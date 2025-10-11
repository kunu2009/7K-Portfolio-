"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  generatePersonalizedRecommendations,
  type PersonalizedRecommendationsOutput,
} from "@/ai/flows/personalized-recommendations"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Loader2 } from "lucide-react"

const formSchema = z.object({
  interests: z.string().min(3, "Please share at least one interest."),
  background: z
    .string()
    .min(10, "Please tell us a bit more about your background."),
})

type FormValues = z.infer<typeof formSchema>

const RecommendationsSection = () => {
  const { toast } = useToast()
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] =
    React.useState<PersonalizedRecommendationsOutput | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      background: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    setLoading(true)
    setResult(null)
    try {
      const recommendations = await generatePersonalizedRecommendations(values)
      setResult(recommendations)
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "An error occurred.",
        description: "Failed to generate recommendations. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="recommendations"
      className="py-24 sm:py-32 bg-background opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Find Your Place in the Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Not sure where to start? Tell us about yourself, and our AI will
            suggest how the 7K Ecosystem can best support your personal journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle>Get Your Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Interests</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., AI, Productivity, Chess"
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
                            placeholder="Briefly describe your background, e.g., 'Student preparing for exams', 'Developer interested in AI tools'."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate Your Path
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="h-full mt-8 md:mt-0">
            {loading && (
              <div className="flex items-center justify-center h-full rounded-lg border bg-secondary/20 p-8">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            )}
            {result && (
              <Card className="h-full animate-fade-in bg-secondary/50">
                <CardHeader>
                  <CardTitle>Your Custom Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">
                      Recommendations:
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {result.recommendations}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">
                      Why these are for you:
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {result.reasoning}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
            {!loading && !result && (
              <div className="flex items-center justify-center h-full rounded-lg border border-dashed p-8 bg-secondary/20">
                <p className="text-center text-muted-foreground">
                  Your personalized recommendations will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
