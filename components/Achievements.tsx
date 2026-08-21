"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  { title: "Mahasiswa Berprestasi 1 Politeknik Negeri Malang", category: "Academic Excellence", year: "2025" },
  { title: "Mahasiswa Berprestasi Wilayah LLDIKTI 7 (Kategori Persahabatan)", category: "Regional Recognition", year: "2025" },
  { title: "Awardee PF Muda Pertamina Foundation (TOP Ideas 2025)", category: "Innovation", year: "2025" },
  { title: "Google Student Ambassador", category: "Community Leadership", year: "2025" },
  { title: "Finalist Gemastik XVIII (Kategori Smart Device)", category: "National Competition", year: "2025" },
  { title: "Juara 1 & Best Paper F2ST Research and Innovation — Universitas Negeri Malang", category: "Research", year: "2024" },
  { title: "Juara 1 Lomba UI/UX Internal Competition", category: "Design", year: "2024" },
  { title: "Juara 1 Social Media Content ENCOMPASS — Universitas Brawijaya", category: "Digital Marketing", year: "2024" },
  { title: "Juara 2 MAGE X — ITS", category: "Technology Competition", year: "2024" },
  { title: "Juara 1 UI/UX Internal Competition JTI", category: "Design", year: "2024" },
  { title: "Mahasiswa Berprestasi Jurusan Teknologi Informasi", category: "Academic", year: "2024–2025" },
  { title: "Best Paper Esai LINEAR — UNS", category: "Research", year: "2024" },
  { title: "Medali Emas OSN GEMANESIA", category: "National Science Olympiad", year: "2024" },
  { title: "Juara 3 Gagasan Inovasi Workshop Riset Informatika", category: "Innovation", year: "2023" },
  { title: "Juara 2 Lomba Esai DPM Polinema", category: "Writing", year: "2023" },
  { title: "Best Solution Hackathon Polinema", category: "Hackathon", year: "2023" },
  { title: "Lolos PKM Maba (PKM-GFT)", category: "Research Grant", year: "2023" },
  { title: "Gold Medal ONSB Informatika — Yapresindo", category: "National Competition", year: "2023" },
  { title: "Gold Medal OSPAN Bahasa Inggris — Olimpiade Siswa Nasional", category: "Language Competition", year: "2023" },
  { title: "Silver Medal Indonesian Science Competition (Bidang TI)", category: "Science Competition", year: "2023" },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 bg-zinc-50/70 border-y border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
            05 · Awards
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
            Achievements &amp;{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              awards
            </span>
          </h2>

          <div className="divide-y divide-zinc-200/70 border-y border-zinc-200/70">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.5) }}
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[64px_1fr_auto] gap-x-6 py-4 items-baseline hover:bg-white transition-colors px-3 -mx-3 rounded-lg"
              >
                <span className="font-mono text-xs text-emerald-600 tabular-nums">
                  {achievement.year}
                </span>
                <h3 className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors leading-relaxed">
                  {achievement.title}
                </h3>
                <span className="hidden md:block font-mono text-xs text-zinc-400 text-right">
                  {achievement.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
