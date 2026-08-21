"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const workExperiences: ExperienceItem[] = [
  {
    title: "Full Stack Software Developer",
    company: "PT Leadership Nasional Asia",
    period: "Aug 2025 — Dec 2025",
    description:
      "Developing web & mobile applications with Flutter, React, Laravel, and Node.js. Integrating REST API/GraphQL for real-time data.",
    achievements: [
      "Designed and managed databases (PostgreSQL/MySQL)",
      "Optimized app performance (caching, lazy loading, query optimization)",
      "Deployment & server configuration (VPS/Cloud, CI/CD)",
      "Collaborated with UI/UX, QA, and Project Managers",
    ],
  },
  {
    title: "Mobile Developer",
    company: "Profile Image Studio",
    period: "Aug 2025 — Dec 2025",
    description:
      "Developing Android/iOS applications using Flutter. Implementing state management and integrating REST APIs.",
    achievements: [
      "Integrated REST API for real-time data exchange",
      "Implemented state management (GetX/Provider/BLoC)",
      "Optimized app performance for responsiveness",
    ],
  },
  {
    title: "Freelance Mobile Developer",
    company: "Self-Employed",
    period: "Dec 2023 — Present",
    description:
      "Leading project teams and developing Flutter applications with GetX, Firebase, and REST API integration.",
    achievements: [
      "Built business management apps (flower shop, warehouse, etc.)",
      "Developed multiple Flutter apps with GetX, Firebase, REST API",
      "Successfully led project teams",
    ],
  },
  {
    title: "Social Media Specialist",
    company: "Singhasari SEZ — AWS SEAL",
    period: "Dec 2023 — Mar 2024",
    description:
      "Conducting market research and social media trend analysis. Creating content plans and managing social media accounts.",
    achievements: [
      "Developed creative social media strategies and content plans",
      "Created and edited visual content (images, videos, designs)",
      "Managed cross-platform accounts (FB, IG, X, LinkedIn)",
    ],
  },
  {
    title: "Business Development",
    company: "Buka Digital",
    period: "Jun 2023 — Jul 2023",
    description:
      "Developing and executing social media strategies and creating engaging content for target audiences.",
    achievements: [
      "Optimized company profiles across social platforms",
      "Analyzed client data and followed social media trends",
    ],
  },
];

const organizationExperiences: ExperienceItem[] = [
  {
    title: "Google Student Ambassador",
    company: "Google Indonesia",
    period: "Aug 2025 — Present",
    description:
      "Representing Google on campus to introduce Google's technology ecosystem through seminars, workshops, hackathons, and study jams.",
    achievements: [
      "Conducting technical training (Flutter, Firebase, Google Cloud, AI/ML)",
      "Building active campus developer community",
      "Collaborating with Google team and ambassadors nationally",
    ],
  },
  {
    title: "Chairman",
    company: "KSPM Politeknik Negeri Malang",
    period: "Feb 2025 — Feb 2026",
    description:
      "Leading organization activities and organizing seminars, workshops, and stock classes to enhance student investment literacy.",
    achievements: [
      "Developed strategies to increase student investment literacy",
      "Built relationships with IDX, OJK, securities, and external organizations",
      "Drove internal digital innovation (member management system, internal apps)",
    ],
  },
  {
    title: "Public Relations",
    company: "IT Department English Community",
    period: "2023 — 2024",
    description:
      "Managing public relations and communications for the IT Department's English learning community.",
    achievements: [
      "Coordinated communication with external stakeholders",
      "Promoted community events and activities",
    ],
  },
  {
    title: "Staff Eksternal",
    company: "Polinema Mengajar",
    period: "2024 — 2025",
    description:
      "Managing external relations and partnerships for a volunteer teaching program, coordinating with schools and educational institutions.",
    achievements: [
      "Built partnerships with schools and educational institutions",
      "Coordinated volunteer teaching programs",
    ],
  },
];

const Timeline = ({
  items,
  inView,
}: {
  items: ExperienceItem[];
  inView: boolean;
}) => (
  <div className="space-y-10 border-l border-zinc-200 ml-1">
    {items.map((exp, i) => (
      <motion.div
        key={`${exp.company}-${exp.title}`}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: i * 0.06 }}
        className="relative pl-8"
      >
        <span className="absolute -left-[4.5px] top-2 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h4 className="text-base font-medium text-zinc-900">{exp.title}</h4>
          <span className="text-sm text-zinc-300">·</span>
          <span className="text-sm font-medium text-emerald-700">
            {exp.company}
          </span>
        </div>
        <p className="font-mono text-xs text-zinc-400 mb-3">{exp.period}</p>
        <p className="text-sm text-zinc-500 leading-relaxed mb-3 max-w-2xl">
          {exp.description}
        </p>
        <ul className="space-y-1.5">
          {exp.achievements.map((achievement) => (
            <li
              key={achievement}
              className="text-sm text-zinc-400 flex items-start gap-2"
            >
              <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16"
        >
          <div>
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
                03 · Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
                Where I&apos;ve{" "}
                <span className="font-serif italic font-normal text-emerald-600">
                  worked
                </span>
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed hidden lg:block">
                Five years of hands-on experience across companies,
                organizations, and freelance work.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-8">
                Work
              </h3>
              <Timeline items={workExperiences} inView={isInView} />
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-8">
                Organization
              </h3>
              <Timeline items={organizationExperiences} inView={isInView} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
