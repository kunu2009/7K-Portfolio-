"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Languages, 
  Target, 
  AppWindow, 
  Gamepad2, 
  Wrench, 
  Crown,
  GraduationCap,
  MapPin,
  Briefcase,
  CheckCircle2,
  Brain
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { portfolioSections } from "@/lib/sections-data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: PERSONAL_INFO.skills.frontend,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend",
    icon: AppWindow,
    skills: PERSONAL_INFO.skills.backend,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: PERSONAL_INFO.skills.tools,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI/ML",
    icon: Target,
    skills: PERSONAL_INFO.skills.ai,
    color: "from-orange-500 to-red-500"
  }
];

const interests = [
  { icon: Target, text: "Productivity", color: "text-blue-500" },
  { icon: AppWindow, text: "App Design", color: "text-purple-500" },
  { icon: Gamepad2, text: "Game Dev", color: "text-green-500" },
  { icon: Wrench, text: "Handyman Skills", color: "text-orange-500" },
  { icon: Crown, text: "Chess (1300)", color: "text-yellow-500" },
  { icon: Brain, text: "Problem Solving", color: "text-pink-500" },
];

const AboutSection = () => {
  const { about } = portfolioSections;
  
  // Don't render if disabled
  if (!about.enabled) return null;
  
  return (
    <section id="about" className="container py-16 md:py-24 lg:py-32">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeInUp}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {about.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left Column: Bio & Info */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            {/* Bio Text */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {about.description}
              </p>
            </div>

            {/* Quote */}
            <Card className="border-l-4 border-primary bg-primary/5">
              <CardContent className="pt-6">
                <blockquote className="italic text-base md:text-lg text-foreground">
                  {about.quote || "I didn't build a product. I built a place to not feel so alone and helpless while I'm incompetent. These apps aren't just tools—they're steady, reliable, and never fail me."}
                </blockquote>
              </CardContent>
            </Card>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Education</p>
                      <p className="text-foreground">{PERSONAL_INFO.education}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Status</p>
                      <p className="text-foreground">{PERSONAL_INFO.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Role</p>
                      <p className="text-foreground">{PERSONAL_INFO.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: Languages */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            {/* Programming Languages */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <h3 className="font-headline text-xl font-semibold">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.languages.programming.map((lang) => (
                    <Badge 
                      key={lang} 
                      variant="secondary" 
                      className="text-sm py-1.5 px-3 bg-background/50 hover:bg-background transition-colors"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What I'm Exploring Now */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-accent" />
                  <h3 className="font-headline text-xl font-semibold">What I'm Exploring Now</h3>
                </div>
                <ul className="space-y-3">
                  {PERSONAL_INFO.exploring.map((item) => (
                    <li 
                      key={item}
                      className="text-sm text-muted-foreground flex items-start space-x-3 group"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                      <span className="group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Interests */}
            <div>
              <h3 className="font-headline text-xl font-semibold mb-4 flex items-center space-x-2">
                <Crown className="h-5 w-5 text-primary" />
                <span>My Interests</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Badge 
                    key={interest.text} 
                    variant="outline" 
                    className="text-sm py-2 px-4 gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default border-primary/20 hover:border-primary/40"
                  >
                    <interest.icon className={`h-4 w-4 ${interest.color}`} />
                    {interest.text}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:shadow-lg hover:shadow-primary/10 border-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="text-sm text-muted-foreground flex items-start space-x-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
