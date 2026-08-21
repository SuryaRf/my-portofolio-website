"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Mobile",
    skills: ["Flutter/Dart", "Kotlin", "Java (Android)", "GetX/BLoC", "Firebase"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "PHP", "REST API", "GraphQL"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "Firebase", "NoSQL", "Query Optimization"],
  },
  {
    title: "Infrastructure",
    skills: ["Network Configuration", "Server Management", "CI/CD", "VPS/Cloud"],
  },
  {
    title: "Emerging Tech",
    skills: ["Blockchain", "AI/ML Integration", "Data Analysis", "Smart Contracts"],
  },
];

const tools = [
  "Git", "Postman", "VS Code", "Figma", "Tableau", "Excel", "Astro", "Next.js",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-zinc-50/70 border-y border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
            02 · Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
            Tools I{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              work with
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-zinc-600 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-500 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
