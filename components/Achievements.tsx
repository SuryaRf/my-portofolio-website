"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      title: "Mahasiswa Berprestasi 1 Politeknik Negeri Malang 2025",
      category: "Academic Excellence",
      year: "2025",
      icon: "🏆",
    },
    {
      title: "Mahasiswa Berprestasi Wilayah LLDIKTI 7 (Kategori Persahabatan)",
      category: "Regional Recognition",
      year: "2025",
      icon: "🎖️",
    },
    {
      title: "Awardee PF Muda Pertamina Foundation (TOP Ideas 2025)",
      category: "Innovation",
      year: "2025",
      icon: "💡",
    },
    {
      title: "Google Student Ambassador",
      category: "Community Leadership",
      year: "2025",
      icon: "🌟",
    },
    {
      title: "Finalist Gemastik XVIII 2025 (Kategori Smart Device)",
      category: "National Competition",
      year: "2025",
      icon: "🥈",
    },
    {
      title: "Juara 1 & Best Paper F2ST Research and Innovation 2024 – Universitas Negeri Malang",
      category: "Research",
      year: "2024",
      icon: "🥇",
    },
    {
      title: "Juara 1 Lomba UI/UX Internal Competition 2024",
      category: "Design",
      year: "2024",
      icon: "🎨",
    },
    {
      title: "Juara 1 Social Media Content ENCOMPASS 2024 – Universitas Brawijaya",
      category: "Digital Marketing",
      year: "2024",
      icon: "📱",
    },
    {
      title: "Juara 2 MAGE X 2024 – ITS",
      category: "Technology Competition",
      year: "2024",
      icon: "🥈",
    },
    {
      title: "Juara 1 UI/UX Internal Competition JTI 2024",
      category: "Design",
      year: "2024",
      icon: "🏅",
    },
    {
      title: "Mahasiswa Berprestasi Jurusan Teknologi Informasi 2024 & 2025",
      category: "Academic",
      year: "2024-2025",
      icon: "⭐",
    },
    {
      title: "Juara 3 Gagasan Inovasi Workshop Riset Informatika 2023",
      category: "Innovation",
      year: "2023",
      icon: "🥉",
    },
    {
      title: "Juara 2 Lomba Esai DPM Polinema",
      category: "Writing",
      year: "2023",
      icon: "✍️",
    },
    {
      title: "Best Solution Hackathon Polinema 2023",
      category: "Hackathon",
      year: "2023",
      icon: "💻",
    },
    {
      title: "Best Paper Esai LINEAR 2024 – UNS",
      category: "Research",
      year: "2024",
      icon: "📄",
    },
    {
      title: "Medali Emas OSN GEMANESIA 2024",
      category: "National Science Olympiad",
      year: "2024",
      icon: "🥇",
    },
    {
      title: "Lolos PKM Maba 2023 (PKM-GFT)",
      category: "Research Grant",
      year: "2023",
      icon: "📚",
    },
    {
      title: "Gold Medal ONSB (Informatika) – Yapresindo 2023",
      category: "National Competition",
      year: "2023",
      icon: "🥇",
    },
    {
      title: "Gold Medal OSPAN (Bahasa Inggris) – Olimpiade Siswa Nasional 2023",
      category: "Language Competition",
      year: "2023",
      icon: "🥇",
    },
    {
      title: "Silver Medal Indonesian Science Competition (Bidang TI)",
      category: "Science Competition",
      year: "2023",
      icon: "🥈",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="achievements" className="py-20 bg-black">
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
              Achievements & <span className="gradient-text">Awards</span>
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
              Recognition and awards for academic excellence, competitions, and contributions to the tech community
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-200 mb-2 line-clamp-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-purple-400">{achievement.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
