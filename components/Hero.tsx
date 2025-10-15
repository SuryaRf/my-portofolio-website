"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { useTypewriter } from "@/hooks/useTypewriter";
import { TextReveal } from "./TextReveal";
import { TiltCard } from "./TiltCard";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const { text: typedRole } = useTypewriter({
    words: ["Full Stack Developer", "Mobile Developer", "Network Engineer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile Image with 3D Tilt */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <TiltCard className="relative w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50">
              <Image
                src="/images/profile/foto.png"
                alt="Surya Rahmat Fatahillah"
                fill
                className="rounded-full object-cover relative z-10"
                priority
              />
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
              />
            </div>
          </TiltCard>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-purple-400 text-lg font-medium">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 perspective-1000"
        >
          <motion.span
            className="gradient-text inline-block relative"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundSize: "200% auto",
              background: "linear-gradient(90deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <TextReveal delay={0.5}>Surya Rahmat Fatahillah</TextReveal>
          </motion.span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 h-20 flex items-center justify-center"
        >
          <span className="text-purple-400 mr-3">I'm a</span>
          <span className="relative">
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              {typedRole}
            </motion.span>
            <motion.span
              className="inline-block w-0.5 h-8 sm:h-10 md:h-12 bg-purple-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["Full Stack Web Developer", "Mobile Developer", "Network Engineer"].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-purple-300 cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">{role}</span>
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Passionate about building innovative solutions through code.
          Top-performing student with hands-on experience in full-stack development,
          mobile apps, and blockchain technology. Google Student Ambassador driving tech innovation.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects">
            <MagneticButton className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow relative overflow-hidden group">
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </MagneticButton>
          </a>
          <a href="#contact">
            <MagneticButton className="px-8 py-4 border-2 border-purple-500 rounded-lg text-purple-400 font-medium hover:bg-purple-500/10 transition-colors relative overflow-hidden group">
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-purple-500/5 scale-0 group-hover:scale-100 transition-transform origin-center"
                initial={false}
              />
            </MagneticButton>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
