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
import { Badge, type BadgeProps } from "@/components/ui/badge"
import {
  Rocket,
  Code,
  Flag,
  Target,
  Bot,
  BookOpen,
  Wand2,
  Loader2,
} from "lucide-react"

const journeyData = [
  {
    icon: Flag,
    date: "Q4 2023",
    title: "The Spark",
    description:
      "Conception of the 7K Ecosystem idea — a unified system for productivity and growth.",
    status: "Done",
  },
  {
    icon: Code,
    date: "Q1 2024",
    title: "First Prototypes",
    description:
      "Initial development begins on the 7K Life App and CLAT Prep Tools.",
    status: "Done",
  },
  {
    icon: Rocket,
    date: "Q2 2024",
    title: "Portfolio Launch",
    description:
      "This portfolio website goes live to showcase the vision and ongoing projects.",
    status: "Ongoing",
  },
  {
    icon: Bot,
    date: "Q3 2024",
    title: "Stan AI Integration",
    description:
      "Begin integrating the Stan AI assistant across all ecosystem applications.",
    status: "Upcoming",
  },
  {
    icon: BookOpen,
    date: "Q4 2024",
    title: "Smart Journal App",
    description:
      "Development of a new standalone intelligent journaling application.",
    status: "Upcoming",
  },
  {
    icon: Target,
    date: "2025+",
    title: "Full Ecosystem Realized",
    description:
      "Achieving seamless interconnectedness between all 7K tools and apps.",
    status: "Upcoming",
  },
]

const statusVariants: { [key: string]: BadgeProps["variant"] } = {
  Done: "secondary",
  Ongoing: "default",
  Upcoming: "outline",
}

const formSchema = z.object({
  interests: z.string().min(3, "Please share at least one interest."),
  background: z
    .string()
    .min(10, "Please tell us a bit more about your background."),
})

type FormValues = z.infer<typeof formSchema>

const JourneySection = () => {
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
      id="journey"
      className="py-24 sm:py-32 bg-secondary/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            The Journey & Roadmap
          </h2>
          <p className="text-lg text-muted-foreground mb-20">
            A visual timeline of the 7K Ecosystem's evolution, from a simple
            idea to a suite of interconnected tools.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-4 top-2 h-full w-0.5 bg-border -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {journeyData.map((item) => (
              <div key={item.title} className="relative pl-12">
                {/* Timeline Point */}
                <div className="absolute left-4 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center text-primary z-10">
                  <item.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <Card className="border shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="font-headline text-2xl">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-4">
                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                          {item.date}
                        </p>
                        <Badge variant={statusVariants[item.status]}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-headline text-3xl font-bold mb-4">
              Find Your Place in the Journey
            </h3>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              Tell us about yourself, and our AI will suggest how the 7K
              Ecosystem can best support your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            <Card className="bg-background">
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
                          Generate
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="h-full mt-8 md:mt-0">
              {loading && (
                <div className="flex items-center justify-center h-full rounded-lg border bg-background p-8">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              )}
              {result && (
                <Card className="h-full animate-fade-in bg-background">
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
                <div className="flex items-center justify-center h-full rounded-lg border border-dashed p-8 bg-background">
                  <p className="text-center text-muted-foreground">
                    Your personalized recommendations will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
