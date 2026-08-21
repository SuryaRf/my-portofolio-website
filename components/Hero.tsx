"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.55, ease: "easeOut" },
  }),
};

const stack = [
  "Flutter", "React", "Laravel", "Node.js", "LLM API", "Gemini AI",
  "PostgreSQL", "Firebase", "Tailwind CSS", "GraphQL",
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full bg-emerald-100/50 blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-16 relative">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available for new projects
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-semibold tracking-tight text-zinc-900 mb-6"
            >
              Building{" "}
              <span className="font-serif italic font-normal text-emerald-600">
                intelligent software
              </span>{" "}
              for web &amp; mobile.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-zinc-600 max-w-lg leading-relaxed mb-8"
            >
              Surya Rahmat Fatahillah — full stack developer based in
              Indonesia. From Flutter apps and Laravel platforms to
              LLM-powered document analysis and AI chatbots, I turn ideas into
              products people actually use.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-zinc-300 rounded-full text-sm font-medium text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-64 sm:w-72 lg:w-full max-w-xs"
          >
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-b-3xl rounded-t-[10rem] border border-emerald-200"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-[10rem] border border-zinc-200">
              <Image
                src="/images/profile/foto.png"
                alt="Surya Rahmat Fatahillah"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
                sizes="(max-width: 1024px) 288px, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative border-y border-zinc-100 py-4 overflow-hidden"
      >
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...stack, ...stack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-8 text-sm text-zinc-500 whitespace-nowrap"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
