"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specializations = [
  {
    title: "Software Engineering",
    skills: [
      "Full Stack Development",
      "Mobile Development",
      "Web Development",
      "REST API & GraphQL",
      "Backend & Frontend",
      "CI/CD & Deployment",
    ],
  },
  {
    title: "AI & Intelligent Systems",
    skills: [
      "LLM API Integration",
      "AI-powered Features",
      "AI Chatbot Development",
      "Document Analysis",
      "Intelligent Automation",
      "Gemini AI · ML Integration",
    ],
  },
  {
    title: "Data",
    skills: [
      "Data Analysis",
      "Database Design",
      "Query Optimization",
      "Data Migration",
      "Business Data Processing",
      "Dashboard & Visualization",
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      "Kotlin · Java",
      "Dart · Flutter",
      "JavaScript · PHP",
      "React · Laravel",
      "Node.js / Express",
    ],
  },
];

const stackGroups = [
  {
    label: "Database & Infrastructure",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "CI/CD"],
  },
  {
    label: "Tools & Platforms",
    items: ["VS Code", "Tableau", "Postman", "PuTTY", "WinSCP", "Laragon", "Notion", "Git"],
  },
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
            Core{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              specializations
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {specializations.map((spec, i) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-4 leading-relaxed">
                  {spec.title}
                </h3>
                <ul className="space-y-2">
                  {spec.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-zinc-600 flex items-start gap-2"
                    >
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="space-y-5">
            {stackGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 shrink-0 sm:w-52">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-600 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
