"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AchievementGroup {
  label: string;
  items: { title: string; year: string }[];
}

const achievementGroups: AchievementGroup[] = [
  {
    label: "Outstanding Student",
    items: [
      { title: "1st Place — Outstanding Student (Mahasiswa Berprestasi Utama), Politeknik Negeri Malang", year: "2025" },
      { title: "3rd Place — Outstanding Student (Mahasiswa Berprestasi Utama), Politeknik Negeri Malang", year: "2026" },
      { title: "Regional Outstanding Student — LLDIKTI Region 7, Friendship Category", year: "2025" },
      { title: "Best Outstanding Student — Information Technology Department", year: "2024–26" },
    ],
  },
  {
    label: "Programs & Ambassadorship",
    items: [
      { title: "1st Place — Capital Market Literacy Ambassador (Duta Literasi Pasar Modal), OJK", year: "2025" },
      { title: "Awardee — PF Muda Pertamina Foundation, TOP Ideas", year: "2025" },
      { title: "Google Student Ambassador — Google Indonesia", year: "2025/26" },
    ],
  },
  {
    label: "Innovation & Technology",
    items: [
      { title: "Finalist — Gemastik XVIII, IoT Smart Device Category", year: "2025" },
      { title: "1st Place — Internal Innovation Competition (Cipta Inovasi), JTI", year: "2025" },
      { title: "2nd Place — IoT Category, Mage X, ITS", year: "2024" },
      { title: "Best Solution — Hackathon Polinema", year: "2023" },
      { title: "3rd Place — Innovation Ideas, Workshop Riset Informatika", year: "2023" },
    ],
  },
  {
    label: "Research",
    items: [
      { title: "1st Place & Best Paper — F2ST Research and Innovation, Universitas Negeri Malang", year: "2024" },
      { title: "Best Paper — LINEAR Essay, Universitas Sebelas Maret", year: "2024" },
      { title: "Accepted — Student Creativity Program (PKM-GFT)", year: "2023" },
    ],
  },
  {
    label: "Design & Content",
    items: [
      { title: "1st Place — UI/UX Internal Competition, JTI", year: "2024" },
      { title: "1st Place — Social Media Content, ENCOMPASS, Universitas Brawijaya", year: "2024" },
    ],
  },
  {
    label: "Academic Olympiads",
    items: [
      { title: "Gold Medal — National Science Olympiad (OSN), GEMANESIA", year: "2024" },
      { title: "Gold Medal — ONSB Informatics, Yapresindo", year: "2023" },
      { title: "Gold Medal — OSPAN English Language, National Student Olympics", year: "2023" },
      { title: "Silver Medal — IT Category, Indonesian Science Competition", year: "2023" },
    ],
  },
  {
    label: "Essay Competition",
    items: [
      { title: "2nd Place — Essay Competition, Student Representative Council (DPM) Polinema", year: "2023" },
    ],
  },
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

          <div className="space-y-10">
            {achievementGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: Math.min(gi * 0.06, 0.4) }}
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-4">
                  {group.label}
                </h3>
                <div className="divide-y divide-zinc-200/70 border-y border-zinc-200/70">
                  {group.items.map((achievement) => (
                    <div
                      key={achievement.title}
                      className="grid grid-cols-[auto_1fr] md:grid-cols-[64px_1fr] gap-x-6 py-3 items-baseline hover:bg-white transition-colors px-3 -mx-3 rounded-lg"
                    >
                      <span className="font-mono text-xs text-emerald-600 tabular-nums">
                        {achievement.year}
                      </span>
                      <h4 className="text-sm text-zinc-700 leading-relaxed">
                        {achievement.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
