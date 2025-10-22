"use client"

import * as React from "react"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Rocket,
  Code,
  Flag,
  Target,
  Bot,
  BookOpen,
  Calendar,
} from "lucide-react"
import { portfolioSections } from "@/lib/sections-data"

const statusVariants: { [key: string]: BadgeProps["variant"] } = {
  Done: "secondary",
  Ongoing: "default",
  Upcoming: "outline",
}

const JourneySection = () => {
  const { journey } = portfolioSections;
  
  // Don't render if disabled
  if (!journey.enabled) return null;
  
  return (
    <section
      id="journey"
      className="py-24 sm:py-32 bg-secondary/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            {journey.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-20">
            {journey.subtitle}
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-4 top-2 h-full w-0.5 bg-border -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {journey.milestones.map((item) => (
              <div key={item.title} className="relative pl-12">
                <div className="absolute left-4 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center text-primary z-10">
                  <Calendar className="h-5 w-5" />
                </div>

                <Card className="border shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="font-headline text-2xl">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-4">
                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                          {item.year}
                        </p>
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
      </div>
    </section>
  )
}

export default JourneySection
