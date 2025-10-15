"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Belajar Membuat Aplikasi Flutter Pemula",
      issuer: "Dicoding Indonesia",
      category: "Mobile Development",
      icon: "📱",
    },
    {
      title: "Memulai Pemrograman dengan Dart",
      issuer: "Dicoding Indonesia",
      category: "Programming",
      icon: "💻",
    },
    {
      title: "Beginner Flutter",
      issuer: "Great Learning",
      category: "Mobile Development",
      icon: "📲",
    },
    {
      title: "Introduction to SQL",
      issuer: "SoloLearn",
      category: "Database",
      icon: "🗄️",
    },
    {
      title: "Troubleshooting Jaringan Client Server",
      issuer: "KOMINFO",
      category: "Network Engineering",
      icon: "🌐",
    },
    {
      title: "Introduction to Data Analyst",
      issuer: "RevoU",
      category: "Data Analytics",
      icon: "📊",
    },
    {
      title: "Dasar-dasar Analitik Data",
      issuer: "Coursera",
      category: "Data Analytics",
      icon: "📈",
    },
    {
      title: "Associate Data Scientist",
      issuer: "BNSP",
      category: "Data Science",
      icon: "🔬",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="certifications" className="py-20 bg-black/40">
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
              Licenses & <span className="gradient-text">Certifications</span>
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
              Professional certifications demonstrating expertise across various technologies and domains
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover text-center"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-200 mb-2 min-h-[56px] flex items-center justify-center">
                  {cert.title}
                </h3>
                <p className="text-purple-400 text-sm mb-2 font-medium">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                  {cert.category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎓</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-1">
                      Politeknik Negeri Malang
                    </h4>
                    <p className="text-purple-400 font-medium mb-2">
                      Sarjana Terapan Teknologi Informasi
                    </p>
                    <p className="text-gray-400 text-sm mb-2">2023 - Present</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold gradient-text">3.95</span>
                      <span className="text-gray-400 text-sm">GPA</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏫</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-1">
                      SMKS Yadika 1 Bangil
                    </h4>
                    <p className="text-purple-400 font-medium mb-2">
                      Teknik Komputer dan Jaringan
                    </p>
                    <p className="text-gray-400 text-sm mb-2">2021 - 2023</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold gradient-text">87.83</span>
                      <span className="text-gray-400 text-sm">Final Score</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
