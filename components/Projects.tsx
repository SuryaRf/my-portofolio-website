"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImageCarousel from "./ImageCarousel";
import ProjectVisual from "./ProjectVisual";

const getProjectImages = (folderName: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/${folderName}/${i + 1}.png`);

interface Project {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  monogram?: string;
  steps?: string[];
}

const featuredWide: Project = {
  title: "AIHubBPD — AI Credit Document Analysis",
  description:
    "AI-powered web platform that automates the analysis of bank credit submission and regulatory documents. It ingests Excel/PDF policy files, evaluates compliance requirements using LLM technology, and generates structured Excel & PDF evaluation reports — replacing a slow, error-prone manual review process.",
  tags: ["LLM API", "Document Analysis", "Compliance Evaluation", "Excel/PDF Output"],
  monogram: "Ah",
  steps: ["Document Input", "AI Analysis", "Compliance Check", "Structured Reports"],
};

const featuredProjects: Project[] = [
  {
    title: "Leadnex Learning Platform",
    description:
      "Full-featured Learning Management System for Leadership Nasional Asia, combining learning management with AI-driven recommendations, certification tracking, and revenue monitoring.",
    images: getProjectImages("leadnex", 5),
    tags: ["Laravel", "Inertia.js", "React", "PostgreSQL", "AI Recommendations"],
  },
  {
    title: "LNA Corporate Platform",
    description:
      "Integrated corporate platform for Leadership Nasional Asia — dynamic news management, assessment center, user & role management, and event information on a responsive interface.",
    tags: ["Corporate Platform", "CMS", "Assessment Center"],
    monogram: "Ln",
  },
  {
    title: "KarbonCx — Digital ESG Platform",
    description:
      "ESG platform aligned with OJK standards for monitoring carbon emissions — Scope 1, 2 & 3 tracking, real-time dashboards, portfolio management, and compliance report generation.",
    tags: ["ESG Platform", "Scope 1–3 Tracking", "Dashboards", "Report Generation"],
    monogram: "Kc",
  },
  {
    title: "PROBISDI — Community Platform",
    description:
      "Digital community platform for Perkumpulan Profesi Bisnis Digital Indonesia, connecting professionals, academics, and business owners with member management, event registration, and publication center.",
    tags: ["Community Platform", "Membership", "Event Registration", "CMS"],
    monogram: "Pr",
  },
  {
    title: "AGROW — Smart Farming App",
    description:
      "Smart farming application with AI chatbot integration — plant growth tracking, visualization, farmer profit calculation, and watering reminders.",
    images: [
      "/images/agrow/1 (1).png",
      "/images/agrow/2.png",
      "/images/agrow/7 (1).png",
      "/images/agrow/8.png",
      "/images/agrow/12.png",
      "/images/agrow/14.png",
      "/images/agrow/15 (1).png",
      "/images/agrow/19 (1).png",
      "/images/agrow/22.png",
      "/images/agrow/24.png",
      "/images/agrow/29.png",
    ],
    tags: ["Flutter", "AI Chatbot", "Firebase"],
  },
  {
    title: "EZ PARKY — Smart Parking",
    description:
      "Smart parking application integrated with IoT — nearby parking discovery, booking, navigation, slot availability, and on-site QR flow.",
    images: getProjectImages("ezparky", 5),
    tags: ["Flutter", "IoT", "Navigation", "Firebase"],
  },
  {
    title: "NusantaraGPS",
    description:
      "GPS-based navigation application for exploring Indonesian destinations with location tracking.",
    images: getProjectImages("nusantaragps", 7),
    tags: ["Flutter", "Maps API", "GPS"],
  },
];

const otherProjects: Project[] = [
  {
    title: "Elena Chatbot",
    description:
      "AI-powered customer service chatbot built with LLM integration, delivering contextual conversational support inside the Leadership Nasional Asia platform.",
    tags: ["AI", "Chatbot", "Customer Service"],
    monogram: "El",
  },
  {
    title: "Florist — Shop Management",
    description:
      "Flower shop management application — product catalog, stock updates, sales recording, low-stock warnings, and reporting.",
    images: getProjectImages("florist", 5),
    tags: ["Flutter", "Business App", "Inventory"],
  },
  {
    title: "DPPI WMS",
    description:
      "Warehouse management & inventory control application for efficient stock operations.",
    images: getProjectImages("dppiwms", 4).map((img) => img.replace(".png", ".jpg")),
    tags: ["Flutter", "GetX", "MySQL"],
  },
  {
    title: "MyBooking",
    description:
      "Mobile application for cinema ticket booking — frontend development.",
    images: getProjectImages("mybooking", 1),
    tags: ["Flutter", "Frontend", "REST API"],
  },
  {
    title: "NgajiYuk",
    description: "Frontend mobile application for Islamic learning.",
    images: getProjectImages("ngajiyuk", 1),
    tags: ["Flutter", "Frontend"],
  },
];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-0.5 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">
    {children}
  </span>
);

const ProjectMedia = ({ project }: { project: Project }) =>
  project.images ? (
    <ImageCarousel images={project.images} title={project.title} />
  ) : (
    <ProjectVisual
      title={project.title}
      monogram={project.monogram ?? "Pr"}
      steps={project.steps}
    />
  );

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
            04 · Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
            Products I&apos;ve{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              shipped
            </span>
          </h2>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/40 p-6 lg:p-8 mb-6 hover:border-emerald-300 hover:shadow-sm transition-all duration-300"
          >
            <div className="rounded-xl overflow-hidden border border-zinc-100 bg-white">
              <ProjectMedia project={featuredWide} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block px-2.5 py-0.5 text-xs font-mono uppercase tracking-wide text-emerald-700 bg-emerald-100/70 border border-emerald-200 rounded-full">
                  Featured Product
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  Full Stack · AI Integration Engineer
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">
                {featuredWide.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {featuredWide.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featuredWide.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <ProjectMedia project={project} />
                <div className="p-5">
                  <h3 className="text-base font-medium text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Other projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <ProjectMedia project={project} />
                <div className="p-4">
                  <h4 className="text-sm font-medium text-zinc-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-zinc-500 border border-zinc-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
