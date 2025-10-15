"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExperiences = [
    {
      title: "Full Stack Software Developer",
      company: "PT Leadership Nasional Asia",
      period: "Aug 2025 - Dec 2025",
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
      period: "Aug 2025 - Dec 2025",
      description:
        "Developing Android/iOS applications using Flutter. Implementing state management and integrating REST APIs.",
      achievements: [
        "Integrated REST API for real-time data exchange",
        "Implemented state management (GetX/Provider/BLoC)",
        "Optimized app performance for responsiveness and user-friendliness",
      ],
    },
    {
      title: "Freelance Mobile Developer",
      company: "Self-Employed",
      period: "Dec 2023 - Present",
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
      company: "Singhasari SEZ - AWS SEAL",
      period: "Dec 2023 - Mar 2024",
      description:
        "Conducting market research and social media trend analysis. Creating content plans and managing social media accounts.",
      achievements: [
        "Developed creative social media strategies and content plans",
        "Created and edited visual content (images, videos, designs)",
        "Managed cross-platform social media accounts (FB, IG, X, LinkedIn)",
      ],
    },
    {
      title: "Business Development",
      company: "Buka Digital",
      period: "Jun 2023 - Jul 2023",
      description:
        "Developing and executing social media strategies. Creating relevant and engaging content for target audiences.",
      achievements: [
        "Optimized company profiles across social platforms",
        "Analyzed client data and followed social media trends",
        "Created engaging content for diverse audiences",
      ],
    },
    {
      title: "Data Entry Specialist",
      company: "Badan Pertanahan Nasional Pasuruan",
      period: "Jan 2022 - Apr 2022",
      description:
        "Verifying and ensuring accuracy of data entry. Creating reports for land certificate data.",
      achievements: [
        "Verified data accuracy and corrected errors",
        "Generated land certificate reports (plot, area, owner identity)",
        "Sorted valid certificates and those needing revision",
      ],
    },
  ];

  const organizationExperiences = [
    {
      title: "Google Student Ambassador",
      company: "Google Indonesia",
      period: "Aug 2025 - Present",
      description:
        "Representing Google on campus to introduce Google's technology ecosystem. Organizing seminars, workshops, hackathons, and study jams.",
      achievements: [
        "Conducting technical training (Flutter, Firebase, Google Cloud, AI/ML)",
        "Building active campus developer community",
        "Collaborating with Google team and ambassadors nationally",
      ],
    },
    {
      title: "Chairman",
      company: "KSPM Politeknik Negeri Malang",
      period: "Feb 2025 - Feb 2026",
      description:
        "Leading and coordinating organization activities. Organizing seminars, workshops, and stock classes to enhance student investment literacy.",
      achievements: [
        "Developed strategies to increase student investment literacy",
        "Built relationships with IDX, OJK, securities, and external organizations",
        "Drove internal digital innovation (member management system, internal apps)",
      ],
    },
    {
      title: "Public Relations",
      company: "Information Technology Department English Community",
      period: "2023 - 2024",
      description:
        "Managing public relations and communications for the IT Department's English learning community. Building relationships with external parties and promoting community activities.",
      achievements: [
        "Coordinated communication with external stakeholders",
        "Promoted community events and activities",
        "Enhanced community visibility and engagement",
      ],
    },
    {
      title: "Staff Eksternal",
      company: "Polinema Mengajar",
      period: "2024 - 2025",
      description:
        "Managing external relations and partnerships for Polinema Mengajar, a volunteer teaching program. Coordinating with schools and educational institutions.",
      achievements: [
        "Built partnerships with schools and educational institutions",
        "Coordinated volunteer teaching programs",
        "Facilitated community outreach initiatives",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Work Experience Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
            />
          </div>

          <div className="relative mb-20">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="hidden md:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2"
            />

            <div className="space-y-12">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping opacity-75" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                      </div>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                            }
                            transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">✓</span>
                            <span className="text-gray-400 text-sm">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Organization Experience Section */}
          <div className="text-center mb-16 mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Organization <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
            />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="hidden md:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2"
            />

            <div className="space-y-12">
              {organizationExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping opacity-75" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                      </div>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                            }
                            transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">✓</span>
                            <span className="text-gray-400 text-sm">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
