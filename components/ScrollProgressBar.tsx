"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollPercentage(Math.round(v * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* Scroll percentage indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-sm font-bold text-purple-300">
          <span suppressHydrationWarning>{scrollPercentage}%</span>
        </div>

        {/* Circular progress */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;
