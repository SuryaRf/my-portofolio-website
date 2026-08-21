"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { label: "GPA", value: "3.95" },
  { label: "Projects", value: "15+" },
  { label: "Certifications", value: "10+" },
  { label: "Achievements", value: "20+" },
];

const currently = [
  "Google Student Ambassador — Google Indonesia",
  "Chairman — KSPM Politeknik Negeri Malang",
  "Freelance Mobile Developer",
];

const card = "rounded-2xl border border-zinc-200 bg-white p-6";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3">
            01 · About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
            A quick{" "}
            <span className="font-serif italic font-normal text-emerald-600">
              introduction
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 }}
              className={`${card} md:row-span-2 flex flex-col`}
            >
              <div className="relative flex-1 min-h-64 overflow-hidden rounded-xl rounded-t-[6rem] border border-zinc-100">
                <Image
                  src="/images/profile/foto.png"
                  alt="Surya Rahmat Fatahillah"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm font-medium text-zinc-900">
                  Surya Rahmat Fatahillah
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Malang, Indonesia — UTC+7
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 }}
              className={`${card} md:col-span-2 space-y-4 text-sm text-zinc-500 leading-relaxed`}
            >
              <p>
                I&apos;m pursuing my Bachelor&apos;s in Applied Information Technology at{" "}
                <span className="text-zinc-900 font-medium">
                  Politeknik Negeri Malang
                </span>{" "}
                with a GPA of 3.95, passionate about leveraging technology to
                solve real-world problems.
              </p>
              <p>
                My expertise spans{" "}
                <span className="text-emerald-700 font-medium">
                  full stack web development, mobile development, and blockchain
                </span>{" "}
                — from smart farming apps with AI to warehouse management
                systems used in daily operations.
              </p>
              <p>
                Outside of coding, I organize tech workshops, mentor peers, and
                compete in national competitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 }}
              className={`${card} !bg-emerald-50/60 !border-emerald-100`}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-700 mb-4">
                Currently
              </h3>
              <ul className="space-y-2.5">
                {currently.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 }}
              className={`${card} md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4`}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-zinc-900 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
