"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "GPA", value: "3.95" },
    { label: "Projects Completed", value: "15+" },
    { label: "Certifications", value: "10+" },
    { label: "Achievements", value: "20+" },
  ];

  return (
    <section id="about" className="py-20 bg-black/40">
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/profile/foto.png"
                    alt="Surya Rahmat Fatahillah"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-50 blur-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-200">
                Tech Enthusiast with Proven Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently pursuing my Bachelor&apos;s in Applied Information Technology
                at Politeknik Negeri Malang with a GPA of 3.95. As a <strong className="text-purple-300">Google Student Ambassador</strong> and
                <strong className="text-purple-300"> Top Student 2025</strong>, I&apos;m passionate about leveraging technology to solve real-world problems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My expertise spans across <strong className="text-purple-300">Full Stack Web Development, Mobile Development,
                and Blockchain</strong>. I&apos;ve worked on various projects from smart farming apps with AI
                to warehouse management systems. As the Chairman of KSPM Polinema, I lead initiatives
                to enhance financial literacy and build tech-driven solutions for student organizations.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me organizing tech workshops, mentoring peers,
                or competing in national competitions. I believe in continuous learning and sharing
                knowledge with the community.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
