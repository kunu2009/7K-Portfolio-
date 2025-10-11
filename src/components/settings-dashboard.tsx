
"use client";

import { useState } from "react";
import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AppWindow,
  GraduationCap,
  Bot,
  PlusCircle,
  Trash2,
  Save,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  href: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  longDescription: z.string().min(1, "Long description is required"),
  features: z.array(z.object({ value: z.string().min(1, "Feature cannot be empty") })),
});

const formSchema = z.object({
  projects: z.array(projectSchema),
});

type FormValues = z.infer<typeof formSchema>;

const initialProjects = [
  {
    title: "7K Life App",
    description: "Core application for holistic life management and productivity.",
    href: "https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/",
    longDescription: "The 7K Life App is the cornerstone of the ecosystem. It's designed to be a central hub for your entire life, integrating task management, goal setting, habit tracking, and personal knowledge management into one seamless experience.",
    features: [{ value: "Holistic Task Management"}, { value: "Integrated Goal & Habit Tracking" }, { value: "Personal Knowledge Base" }, { value: "Seamless Syncing" }],
  },
  {
    title: "7KLawPrep",
    description: "Web-based utilities and resources for law aspirants.",
    href: "https://7-klawprep-i1rd7wyj2-kunu2009s-projects.vercel.app/",
    longDescription: "A specialized suite of tools designed to help law aspirants prepare for competitive entrance exams like CLAT and MHCET. Features include mock tests, legal knowledge quizzes, and performance analytics.",
    features: [{ value: "Mock Test Simulators"}, { value: "Legal GK Quizzes" }, { value: "Performance Analytics" }, { value: "Resource Library" }],
  },
  {
    title: "7K Itihaas",
    description: "Explore the rich history of India through interactive timelines.",
    href: "https://7-k-itihaas.vercel.app/",
    longDescription: "7K Itihaas brings Indian history to life with detailed and interactive timelines. Discover the events, rulers, and cultures that have shaped the subcontinent over millennia.",
    features: [{ value: "Interactive Timelines" }, { value: "Detailed Event Descriptions" }, { value: "Dynasty and Era Guides" }, { value: "Visual Historical Maps" }],
  },
  {
    title: "7K Polyglot",
    description: "A fun and engaging way to expand your vocabulary in new languages.",
    href: "https://7-k-polyglot.vercel.app/",
    longDescription: "7K Polyglot is a language-learning companion designed to make vocabulary acquisition easy and enjoyable. Use flashcards, quizzes, and spaced repetition to master new words.",
    features: [{ value: "Flashcard Decks" }, { value: "Spaced Repetition System" }, { value: "Interactive Quizzes" }, { value: "Multiple Language Support" }],
  },
  {
    title: "Stan: AI Assistant",
    description: "An AI running on Android to provide assistance on the go.",
    href: "",
    longDescription: "Stan is an intelligent AI assistant integrated across the ecosystem. It's designed to automate tasks, provide timely information, and offer assistance contextually within other 7K apps, starting with Android.",
    features: [{ value: "Context-Aware Assistance"}, { value: "Task Automation" }, { value: "Cross-App Integration" }, { value: "Natural Language Interface" }],
  },
];

export function SettingsDashboard() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projects: initialProjects,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // In a real application, you would send this data to your backend API.
    console.log(data);
    toast({
      title: "Settings Saved!",
      description: "Your project configurations have been saved locally.",
    });
  };

  const addNewProject = () => {
    append({
      title: "New Project",
      description: "A brief description.",
      href: "",
      longDescription: "A more detailed description of the new project.",
      features: [{ value: "Feature 1" }],
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Settings</h1>
        <p className="text-muted-foreground">
          Manage your website's content here. Changes are not yet persistent.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Projects</CardTitle>
          <CardDescription>
            Add, edit, or remove projects from your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                {fields.map((field, index) => (
                  <Card key={field.id} className="p-6 bg-secondary/50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-headline text-xl">
                        Project #{index + 1}
                      </h3>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`projects.${index}.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`projects.${index}.href`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`projects.${index}.description`}
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Short Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`projects.${index}.longDescription`}
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Long Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={4}/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="md:col-span-2">
                        <FeatureArray index={index} control={form.control} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={addNewProject}
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
                </Button>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper component for managing the features array
function FeatureArray({ index, control }: { index: number; control: any }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `projects.${index}.features`,
  });

  return (
    <div className="space-y-2">
      <FormLabel>Key Features</FormLabel>
      {fields.map((field, featureIndex) => (
        <div key={field.id} className="flex items-center gap-2">
          <FormField
            control={control}
            name={`projects.${index}.features.${featureIndex}.value`}
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input {...field} placeholder={`Feature ${featureIndex + 1}`} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => remove(featureIndex)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
       <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => append({ value: "" })}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Feature
      </Button>
    </div>
  );
}
