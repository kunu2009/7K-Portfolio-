"use client";

import { ArrowLeft, Mail, Github, Linkedin, ExternalLink, Code2, Palette, Layers, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function portfolio-cardStyle1() {
  const skills = [
    { name: "React & Next.js", level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: "Advanced", color: "from-blue-600 to-indigo-500" },
    { name: "UI/UX Design", level: "Advanced", color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", level: "Expert", color: "from-teal-500 to-emerald-500" },
    { name: "Firebase", level: "Advanced", color: "from-orange-500 to-red-500" },
    { name: "Python", level: "Intermediate", color: "from-yellow-500 to-amber-500" },
  ];

  const projects = [
    {
      title: "7K Life Ecosystem",
      description: "Comprehensive productivity suite with 20+ integrated apps",
      tags: ["Next.js", "Firebase", "TypeScript"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "LawPrep CLAT",
      description: "Interactive CLAT preparation platform for law aspirants",
      tags: ["React", "AI", "Education"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Polyglot Learning",
      description: "Multi-language learning platform with AI assistance",
      tags: ["Next.js", "AI/ML", "Education"],
      color: "from-emerald-500 to-teal-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-slate-950 dark:via-gray-950 dark:to-stone-950">
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <Badge variant="outline" className="px-4 py-1.5 bg-primary/5">
            Portfolio Card
          </Badge>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          
          <Card className="mb-12 overflow-hidden border-2 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                
                <div className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 p-12 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.1) 20px, rgba(255,255,255,.1) 40px)`
                    }} />
                  </div>
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-4 border-white/30 shadow-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src="/images/porfolio desgin image.png"
                        alt="Kunal Chheda"
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-2 rounded-full shadow-lg border-2 border-teal-500">
                      <span className="font-bold text-teal-600 dark:text-teal-400">Available for Work</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        Kunal Chheda
                      </h1>
                      <p className="text-xl text-muted-foreground font-medium">
                        Full-Stack Developer & Designer
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        12th Grade Student ΓÇó Mumbai, India
                      </p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      Student developer building 20+ productivity apps in the 7K Ecosystem. 
                      Passionate about creating intuitive user experiences and solving real-world 
                      problems through technology. Currently preparing for CLAT while developing 
                      innovative web applications.
                    </p>

                    <div className="grid grid-cols-3 gap-4 py-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-600">20+</div>
                        <div className="text-sm text-muted-foreground">Apps Built</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-600">2+</div>
                        <div className="text-sm text-muted-foreground">Years Coding</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-600">Γê₧</div>
                        <div className="text-sm text-muted-foreground">Ideas</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button 
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                        asChild
                      >
                        <a href="mailto:7kmindbeatss@gmail.com">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Me
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://github.com/kunu2009" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.linkedin.com/in/kunal-chheda-b36731388" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-6 w-6 text-teal-600" />
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} mb-4 flex items-center justify-center`}>
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="h-6 w-6 text-cyan-600" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-2 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Palette className="h-12 w-12 mx-auto mb-4 text-teal-600" />
              <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in collaborating or have a project in mind? 
                I'm always open to discussing new opportunities and innovative ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                  asChild
                >
                  <a href="mailto:7kmindbeatss@gmail.com">
                    Get In Touch
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">
                    View Full Portfolio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>┬⌐ 2025 Kunal Chheda ΓÇó 7K Studios ΓÇó All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
