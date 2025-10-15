"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
  const text = typeof children === 'string' ? children : '';
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 -z-10 text-purple-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
          animation: "glitch-1 3s infinite",
        }}
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 -z-10 text-blue-500"
        style={{
          clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
          animation: "glitch-2 3s infinite",
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, -2px);
          }
          40% {
            transform: translate(2px, 2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(-2px, 2px);
          }
        }
      `}</style>
    </span>
  );
};
