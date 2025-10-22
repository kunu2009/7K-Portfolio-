"use client";

import { motion } from "framer-motion";
import { Mail, Github, Globe, Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function PortfolioCardStyle1() {
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Firebase", level: 88 },
  ];

  const projects = [
    { name: "7K Life", desc: "Life management ecosystem", tech: "Next.js, Firebase" },
    { name: "7K Money", desc: "Finance tracking platform", tech: "React, Node.js" },
    { name: "7K Game Hub", desc: "Gaming community", tech: "Next.js, PostgreSQL" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
              👨‍💻
            </div>
            <h1 className="text-2xl font-bold mb-2">Kunal Chheda</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer</p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="h-4 w-4" />
              <span>India</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <GraduationCap className="h-4 w-4" />
              <span>Computer Science</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Briefcase className="h-4 w-4" />
              <span>3+ Years Experience</span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:7kmindbeatss@gmail.com"
              className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Mail className="h-5 w-5 text-blue-500" />
              <span className="text-sm">Email Me</span>
            </a>
            <a
              href="https://7kc.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Globe className="h-5 w-5 text-green-500" />
              <span className="text-sm">Portfolio</span>
            </a>
            <a
              href="https://github.com/kunu2009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Content Cards */}
        <div className="md:col-span-2 space-y-6">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate full-stack developer building modern web applications. 
              Specialized in React ecosystem and creating seamless user experiences. 
              Currently working on the 7K Ecosystem - a suite of applications designed 
              to make life easier and more productive.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech) => (
                      <span key={tech} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
