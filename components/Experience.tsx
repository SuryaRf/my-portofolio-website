"use client";

import { motion } from "framer-motion";

const workExperiences = [
  {
    role: "Full Stack Software Developer Intern",
    company: "PT Multi Spunindo Jaya",
    period: "Jan 2026 — Jul 2026",
    description:
      "Developing and maintaining internal web-based applications to support business operations using modern full-stack technologies.",
    achievements: [
      "Developing internal web applications for business operations",
      "Building and consuming REST APIs between frontend and backend services",
      "Collaborating with engineers and operational staff on requirements & delivery",
      "Participating in code reviews, testing, and deployment processes",
    ],
  },
  {
    role: "Full Stack Software Developer",
    company: "PT Leadership Nasional Asia",
    period: "Aug 2025 — Dec 2025",
    description:
      "Developing web & mobile applications with Flutter, React, Laravel, and Node.js. Integrating REST API/GraphQL for real-time data.",
    achievements: [
      "Designed and managed databases (PostgreSQL/MySQL)",
      "Optimized app performance (caching, lazy loading, query optimization)",
      "Deployment & server configuration (VPS/Cloud, CI/CD)",
      "Collaborated closely with QA and Project Managers",
    ],
  },
  {
    role: "Mobile Developer",
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
    role: "Freelance Mobile Developer",
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
    role: "Social Media Specialist",
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
    role: "Business Development",
    company: "Buka Digital",
    period: "Jun 2023 — Jul 2023",
    description:
      "Developing and executing social media strategies and creating engaging content for target audiences.",
    achievements: [
      "Optimized company profiles across social platforms",
      "Analyzed client data and followed social media trends",
    ],
  },
  {
    role: "Data Entry Specialist",
    company: "Badan Pertanahan Nasional Pasuruan",
    period: "Jan 2022 — Apr 2022",
    description:
      "Verifying and ensuring accuracy of data entry. Creating reports for land certificate data.",
    achievements: [
      "Verified data accuracy and corrected errors",
      "Generated land certificate reports (plot, area, owner identity)",
    ],
  },
];

const organizationExperiences = [
  {
    role: "Chairman",
    org: "Kelompok Studi Programer Mobile (KSPM)",
    period: "2025 — 2026",
    achievements: [
      "Led and coordinated the mobile developer student community",
      "Organized workshops and technical learning sessions",
    ],
  },
  {
    role: "External Affairs Staff",
    org: "Polinema Mengajar",
    period: "2024 — 2025",
    achievements: [
      "Managed external partnerships and school outreach programs",
      "Coordinated teaching volunteer activities across partner schools",
    ],
  },
  {
    role: "Sponsorship Department Staff",
    org: "English Community Polinema",
    period: "2023 — 2024",
    achievements: [
      "Secured event sponsorships and managed partner relations",
      "Supported funding strategy for community events",
    ],
  },
  {
    role: "Member",
    org: "Workshop Riset Informatika",
    period: "2023 — 2024",
    achievements: [
      "Participated in research and technology workshops",
      "Contributed to collaborative informatics projects",
    ],
  },
];

const Timeline = ({
  label,
  items,
}: {
  label: string;
  items: typeof workExperiences;
}) => (
  <div className="relative border-l border-zinc-200 ml-2 space-y-14">
    {items.map((item, i) => (
      <motion.div
        key={`${item.role}-${item.company}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="relative pl-8"
      >
        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <p className="font-mono text-xs tracking-wider text-zinc-500 mb-1">
          {item.period}
        </p>
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900">
          {item.role}
        </h3>
        <p className="text-sm font-medium text-emerald-700 mb-3">
          {item.company}
        </p>
        <p className="text-sm leading-relaxed text-zinc-600 mb-4 max-w-xl">
          {item.description}
        </p>
        <ul className="space-y-2 mb-4">
          {item.achievements.map((a) => (
            <li
              key={a}
              className="text-sm text-zinc-600 flex items-start gap-2"
            >
              <span className="mt-[7px] w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              {a}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
    <span className="sr-only">{label}</span>
  </div>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
        03 · Experience
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
        Where I&apos;ve{" "}
        <span className="font-serif italic font-normal text-emerald-600">
          worked
        </span>
      </h2>

      <Timeline label="Work experience" items={workExperiences} />

      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 mt-20 mb-10">
        Beyond{" "}
        <span className="font-serif italic font-normal text-emerald-600">
          work
        </span>
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {organizationExperiences.map((org) => (
          <motion.div
            key={org.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="font-semibold tracking-tight text-zinc-900">
                {org.role}
              </h4>
              <span className="font-mono text-xs text-zinc-500 whitespace-nowrap pt-1">
                {org.period}
              </span>
            </div>
            <p className="text-sm font-medium text-emerald-700 mb-3">
              {org.org}
            </p>
            <ul className="space-y-1.5">
              {org.achievements.map((a) => (
                <li
                  key={a}
                  className="text-sm text-zinc-600 flex items-start gap-2"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
