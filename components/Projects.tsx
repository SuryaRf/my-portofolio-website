"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImageCarousel from "./ImageCarousel";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Helper function to generate image paths
  const getProjectImages = (folderName: string, count: number) => {
    const images = [];
    for (let i = 1; i <= count; i++) {
      images.push(`/images/${folderName}/${i}.png`);
    }
    return images;
  };

  // Featured/Recent Projects
  const featuredProjects = [
    {
      title: "LMS Leadnex.id",
      description:
        "Learning Management System for online courses and educational content delivery with comprehensive student and instructor management.",
      images: getProjectImages("leadnex", 5),
      tags: ["Laravel", "Inertia.js", "React", "PostgreSQL", "Payment Gateway", "REST API"],
      github: "https://github.com/SuryaRf",
      demo: "#",
      featured: true,
    },
    {
      title: "Agrow - Smart Farming App",
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
      github: "https://github.com/SuryaRf",
      demo: "#",
      featured: true,
    },
    {
      title: "NusantaraGPS",
      description:
        "Location-based navigation and tracking system for Indonesian tourism and exploration.",
      images: getProjectImages("nusantaragps", 7),
      tags: ["Flutter", "Maps API", "Firebase"],
      github: "https://github.com/SuryaRf",
      demo: "#",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "DPPI WMS - Warehouse Management",
      description:
        "Comprehensive warehouse and inventory control system for efficient stock management.",
      images: getProjectImages("dppiwms", 4).map((img) =>
        img.replace(".png", ".jpg")
      ),
      tags: ["Flutter", "GetX", "REST API", "MySQL"],
      github: "https://github.com/SuryaRf",
      demo: "#",
    },
    {
      title: "Ez Parky - Smart Parking",
      description:
        "Smart parking system with real-time monitoring and automated payment integration.",
      images: getProjectImages("ezparky", 5),
      tags: ["Flutter", "Firebase", "REST API"],
      github: "https://github.com/SuryaRf",
      demo: "#",
    },
    {
      title: "Florist - Flower Management",
      description:
        "Business management application for flower shops with inventory and transaction features.",
      images: getProjectImages("florist", 5),
      tags: ["Flutter", "GetX", "Firebase", "REST API"],
      github: "https://github.com/SuryaRf",
      demo: "#",
    },
    {
      title: "Tubion - Early TBC Detection",
      description:
        "Early tuberculosis detection system using smart sensors and data analytics.",
      images: getProjectImages("tubion", 3),
      tags: ["Flutter", "Firebase", "Analytics"],
      github: "https://github.com/SuryaRf",
      demo: "#",
    },
    {
      title: "NgajiYuk - Islamic Learning",
      description:
        "Mobile application for Quran learning with audio recitation and translation features.",
      images: getProjectImages("ngajiyuk", 1),
      tags: ["Flutter", "Firebase", "Audio API"],
      github: "https://github.com/SuryaRf",
      demo: "#",
    },
    {
      title: "MyBooking - Cinema Booking",
      description:
        "Movie ticket booking application with seat selection and payment integration.",
      images: getProjectImages("mybooking", 1),
      tags: ["Flutter", "REST API", "Payment Gateway"],
      github: "https://github.com/SuryaRf",
      demo: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Featured Projects Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Recent <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Showcasing my latest and most impactful projects
            </motion.p>
          </div>

          {/* Featured Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 card-hover group shadow-lg shadow-purple-500/10"
              >
                {/* Project Images Carousel */}
                <ImageCarousel images={project.images} title={project.title} />

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
                      Featured
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects Section */}
          <div className="mt-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Other <span className="gradient-text">Projects</span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 card-hover group"
                >
                  {/* Project Images Carousel */}
                  <ImageCarousel images={project.images} title={project.title} />

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
