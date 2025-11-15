"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, CheckCircle2, Loader2, Briefcase, DollarSign, Calendar } from "lucide-react";
import { ButtonLoader } from "@/components/loading-states";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Business Website",
  "E-commerce Store",
  "Web Application",
  "Mobile App",
  "Portfolio Website",
  "Landing Page",
  "Blog/Content Site",
  "Custom Development",
  "Other",
];

const budgetRanges = [
  "Under ₹5,000",
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP (1-2 weeks)",
  "1 month",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
];

export function EnhancedContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
          setStep(1);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get a Free Quote</CardTitle>
        <CardDescription>
          Tell us about your project and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in fade-in duration-500">
            <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Thank you for reaching out! I'll review your project details and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-6">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`flex items-center ${s < 2 ? 'flex-1' : ''}`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 2 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        step > s ? 'bg-primary' : 'bg-secondary'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Project Details
                </h3>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="projectType">
                    Project Type <span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="projectType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="projectType" aria-label="Select project type">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.projectType && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Budget Range <span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="budget" aria-label="Select budget range">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.budget && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Timeline <span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="timeline" aria-label="Select timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.timeline && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.timeline.message}
                    </p>
                  )}
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full"
                  disabled={!watch('projectType') || !watch('budget') || !watch('timeline')}
                >
                  Next Step
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-red-500" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-500" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Project Inquiry"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-sm text-red-500" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Project Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-500" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      <ButtonLoader />
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </form>
        )}
      </CardContent>
    </Card>
  );
}
