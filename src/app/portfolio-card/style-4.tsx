"use client";

import { motion } from "framer-motion";

export default function PortfolioCardStyle3() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-xl"
            >
              👨‍💻
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-2">Kunal Chheda</h1>
            <p className="text-gray-300 text-lg">Full Stack Developer</p>
          </div>

          {/* Content Section */}
          <div className="p-12 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">About</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate developer with expertise in modern web technologies. 
                Building scalable applications and beautiful user interfaces. 
                Creator of the 7K Ecosystem.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 dark:border-gray-700"></div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Core Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "Firebase", "Tailwind CSS", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 dark:border-gray-700"></div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Key Projects</h2>
              <div className="space-y-3">
                {[
                  { name: "7K Life", desc: "Life management ecosystem" },
                  { name: "7K Money", desc: "Finance tracking platform" },
                  { name: "7K Game Hub", desc: "Student gaming community" },
                  { name: "7K Ecosystem", desc: "Unified app platform" },
                ].map((project) => (
                  <div key={project.name} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white">{project.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{project.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 dark:border-gray-700"></div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl">📧</span>
                  <span>7kmindbeatss@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl">🌐</span>
                  <span>7kc.me</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl">💻</span>
                  <span>github.com/kunu2009</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="mailto:7kmindbeatss@gmail.com"
                className="block w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center py-4 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
              >
                Send Message
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-gray-500 dark:text-gray-600 text-sm"
        >
          Available for freelance projects and collaborations
        </motion.p>
      </div>
    </div>
  );
}
