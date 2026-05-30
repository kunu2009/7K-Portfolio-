import React from 'react';
import { CheckCircle, Activity, Languages, Smartphone, Globe, Code2, LineChart, PenTool, Rocket, Layout } from 'lucide-react';

export const appsData = [
  {
    title: "FocusMate",
    description: "Deep work timer & task manager.",
    category: "Productivity",
    icon: <CheckCircle size={18} />,
  },
  {
    title: "FitTrack Pro",
    description: "Advanced workout & nutrition tracking.",
    category: "Fitness",
    icon: <Activity size={18} />,
  },
  {
    title: "LingoLearn",
    description: "Bite-sized daily language lessons.",
    category: "Learning",
    icon: <Languages size={18} />,
  },
  {
    title: "HabitForge",
    description: "Build lasting routines effortlessly.",
    category: "Lifestyle",
    icon: <Smartphone size={18} />,
  }
];

export const booksData = [
  {
    title: "The Indie Builder's Playbook",
    description: "A complete guide to launching side projects and building a comprehensive digital ecosystem.",
    year: "2024",
  },
  {
    title: "Mastering Zero-Cost Tech",
    description: "How to leverage open-source and free tiers to run a profitable digital business.",
    year: "2023",
  }
];

export const servicesData = [
  { title: "Web Development", icon: <Globe size={18} /> },
  { title: "App Development", icon: <Code2 size={18} /> },
  { title: "SEO & Marketing", icon: <LineChart size={18} /> },
  { title: "UI/UX Design", icon: <PenTool size={18} /> },
  { title: "Performance Optimization", icon: <Rocket size={18} /> },
  { title: "Tech Consulting", icon: <Layout size={18} /> },
];

export const templatesData = [
  { name: "Second Brain Builder", platform: "Notion", price: "Free" },
  { name: "SaaS Starter Kit", platform: "React + Tailwind", price: "Free" },
  { name: "Freelance Tracker", platform: "Sheets / Airtable", price: "Free" }
];
