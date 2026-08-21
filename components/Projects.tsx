"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImageCarousel from "./ImageCarousel";

const getProjectImages = (folderName: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/${folderName}/${i + 1}.png`);

const featuredProject = {
  title: "LMS Leadnex.id",
  description:
    "Learning Management System for online courses and educational content delivery — comprehensive student & instructor management, payment gateway, and real-time progress tracking.",
  images: getProjectImages("leadnex", 5),
  tags: ["Laravel", "Inertia.js", "React", "PostgreSQL", "Payment Gateway"],
};

const featuredProjects = [
  {
    title: "Agrow — Smart Farming App",
    description:
      "Agricultural application with AI chatbot for plant disease detection and farming assistance.",
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
    tags: ["Flutter", "AI/ML", "Firebase"],
  },
  {
    title: "NusantaraGPS",
    description:
      "Location-based navigation and tracking system for Indonesian tourism and exploration.",
    images: getProjectImages("nusantaragps", 7),
    tags: ["Flutter", "Maps API", "Firebase"],
  },
];

const otherProjects = [
  {
    title: "DPPI WMS — Warehouse Management",
    description:
      "Comprehensive warehouse and inventory control system for efficient stock management.",
    images: getProjectImages("dppiwms", 4).map((img) => img.replace(".png", ".jpg")),
    tags: ["Flutter", "GetX", "MySQL"],
  },
  {
    title: "Ez Parky — Smart Parking",
    description:
      "Smart parking system with real-time monitoring and automated payment integration.",
    images: getProjectImages("ezparky", 5),
    tags: ["Flutter", "Firebase", "REST API"],
  },
  {
    title: "Florist — Flower Management",
    description:
      "Business management application for flower shops with inventory and transaction features.",
    images: getProjectImages("florist", 5),
    tags: ["Flutter", "GetX", "Firebase"],
  },
  {
    title: "Tubion — Early TBC Detection",
    description:
      "Early tuberculosis detection system using smart sensors and data analytics.",
    images: getProjectImages("tubion", 3),
    tags: ["Flutter", "Firebase", "Analytics"],
  },
  {
    title: "NgajiYuk — Islamic Learning",
    description:
      "Mobile application for Quran learning with audio recitation and translation features.",
    images: getProjectImages("ngajiyuk", 1),
    tags: ["Flutter", "Firebase", "Audio API"],
  },
  {
    title: "MyBooking — Cinema Booking",
    description:
      "Movie ticket booking application with seat selection and payment integration.",
    images: getProjectImages("mybooking", 1),
    tags: ["Flutter", "REST API", "Payment Gateway"],
  },
];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-0.5 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">
    {children}
  </span>
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
            Selected{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              work
            </span>
          </h2>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl border border-zinc-200 bg-white p-6 lg:p-8 mb-6 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
          >
            <div className="rounded-xl overflow-hidden border border-zinc-100">
              <ImageCarousel images={featuredProject.images} title={featuredProject.title} />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 text-xs font-mono uppercase tracking-wide text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
                Featured
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="rounded-2xl border border-zinc-200 overflow-hidden bg-white hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <ImageCarousel images={project.images} title={project.title} />
                <div className="p-5">
                  <h3 className="text-base font-medium text-zinc-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
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
                <ImageCarousel images={project.images} title={project.title} />
                <div className="p-4">
                  <h4 className="text-sm font-medium text-zinc-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-200 rounded-full"
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
