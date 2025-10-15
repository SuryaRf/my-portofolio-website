"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter/Dart", level: 95 },
        { name: "Kotlin", level: 85 },
        { name: "Java (Android)", level: 82 },
        { name: "GetX/BLoC", level: 90 },
        { name: "Firebase", level: 88 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 88 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Figma", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Laravel", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "PHP", level: 87 },
        { name: "REST API", level: 92 },
        { name: "GraphQL", level: 78 },
      ],
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "NoSQL", level: 80 },
        { name: "SQL Query Optimization", level: 85 },
      ],
    },
    {
      title: "Network & Infrastructure",
      skills: [
        { name: "Network Configuration", level: 85 },
        { name: "Server Management", level: 82 },
        { name: "CI/CD", level: 80 },
        { name: "VPS/Cloud Deployment", level: 83 },
        { name: "PuTTY/WinSCP", level: 88 },
      ],
    },
    {
      title: "Emerging Tech",
      skills: [
        { name: "Blockchain Development", level: 75 },
        { name: "AI/ML Integration", level: 78 },
        { name: "Data Analysis", level: 82 },
        { name: "Smart Contracts", level: 70 },
        { name: "Cloud Computing", level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional tech stack icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Additional Tools & Technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Flutter",
                "React",
                "Next.js",
                "Laravel",
                "Node.js",
                "Tailwind CSS",
                "Astro",
                "MySQL",
                "PostgreSQL",
                "Firebase",
                "Git",
                "Postman",
                "VS Code",
                "Figma",
                "Tableau",
                "Excel",
                "Blockchain",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 1.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-gray-300 text-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
