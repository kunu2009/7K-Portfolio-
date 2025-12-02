"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Testimonial data structure - replace with real testimonials
export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany?: string;
  clientPhoto?: string;
  rating: number;
  text: string;
  projectType: string;
  date: string;
  featured: boolean;
}

// Real testimonials from actual clients
const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "GiftsKraft",
    clientRole: "Gifting Business",
    clientCompany: "GiftsKraft India",
    clientPhoto: "/images/clients/giftskraft-logo.png",
    rating: 5,
    text: "7K transformed our online presence completely. The new app and website they built for us increased our customer engagement by 3x and made our ordering process seamless. Their attention to detail and understanding of our brand was exceptional. Highly recommend working with them!",
    projectType: "App & Web Development",
    date: "2024",
    featured: true,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface TestimonialsSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export default function TestimonialsSection({ limit = 3, showTitle = true }: TestimonialsSectionProps) {
  const displayTestimonials = testimonials.slice(0, limit);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        )}

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className={`grid gap-6 max-w-6xl mx-auto ${
            displayTestimonials.length === 1 
              ? 'grid-cols-1 max-w-2xl' 
              : displayTestimonials.length === 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {/* Client Photo */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                      {testimonial.clientPhoto ? (
                        <Image
                          src={testimonial.clientPhoto}
                          alt={testimonial.clientName}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-lg font-bold text-primary">
                          {testimonial.clientName.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Client Details */}
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {testimonial.clientName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.clientRole}
                        {testimonial.clientCompany && `, ${testimonial.clientCompany}`}
                      </p>
                    </div>

                    {/* Project Type Badge */}
                    <div className="hidden sm:block">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {testimonial.projectType}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to write a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Worked with us? We'd love to hear your feedback!
          </p>
          <a
            href="https://wa.me/918591247148?text=Hi%20Kunal!%20I%20want%20to%20share%20my%20feedback%20about%20our%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Share Your Experience →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
