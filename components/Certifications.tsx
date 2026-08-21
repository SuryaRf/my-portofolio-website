"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  { title: "Associate Data Scientist", issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", highlighted: true },
  { title: "Building Flutter Apps for Beginners", issuer: "Dicoding Indonesia" },
  { title: "Getting Started with Dart Programming", issuer: "Dicoding Indonesia" },
  { title: "Beginner Flutter", issuer: "Great Learning" },
  { title: "Introduction to SQL", issuer: "SoloLearn" },
  { title: "Network Service Troubleshooting on Client-Server Networks", issuer: "KOMINFO" },
  { title: "Introduction to Data Analytics", issuer: "RevoU" },
  { title: "Fundamentals of Data Analytics", issuer: "Coursera" },
];

const education = [
  {
    school: "Politeknik Negeri Malang",
    degree: "D-IV Information Technology — Business Information Systems",
    period: "2023 — Present",
    score: "3.97",
    scoreLabel: "GPA / 4.00",
  },
  {
    school: "SMKS Yadika 1 Bangil",
    degree: "Computer and Network Engineering",
    period: "Graduated 2023",
    score: "87.83",
    scoreLabel: "Final Score / 100",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
            06 · Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
            Licenses &amp;{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              certifications
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-16">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
                className={`flex items-baseline justify-between gap-4 border-b pb-4 ${
                  cert.highlighted
                    ? "border-emerald-200"
                    : "border-zinc-100"
                }`}
              >
                <div>
                  <h3
                    className={`text-sm leading-relaxed ${
                      cert.highlighted
                        ? "text-emerald-700 font-medium"
                        : "text-zinc-700"
                    }`}
                  >
                    {cert.title}
                    {cert.highlighted && (
                      <span className="ml-2 inline-block align-middle px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
                        Certified
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-base font-medium text-zinc-900">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-semibold text-emerald-700 tabular-nums">
                      {edu.score}
                    </span>
                    <p className="text-[10px] font-mono uppercase tracking-wide text-zinc-500 mt-0.5">
                      {edu.scoreLabel}
                    </p>
                  </div>
                </div>
                <p className="font-mono text-xs text-zinc-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
