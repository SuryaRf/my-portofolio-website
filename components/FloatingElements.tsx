"use client";

import { motion } from "framer-motion";

const FloatingElements = () => {
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -30, 0],
      x: [0, Math.sin(i) * 20, 0],
      rotate: [0, 360],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const elements = [
    { icon: "⚡", color: "from-yellow-400 to-orange-500", size: "text-4xl" },
    { icon: "💻", color: "from-blue-400 to-cyan-500", size: "text-5xl" },
    { icon: "🚀", color: "from-purple-400 to-pink-500", size: "text-3xl" },
    { icon: "✨", color: "from-green-400 to-emerald-500", size: "text-4xl" },
    { icon: "🎯", color: "from-red-400 to-rose-500", size: "text-3xl" },
    { icon: "🔥", color: "from-orange-400 to-red-500", size: "text-4xl" },
  ];

  const positions = [
    { top: "10%", left: "5%" },
    { top: "20%", right: "8%" },
    { top: "60%", left: "10%" },
    { top: "70%", right: "5%" },
    { top: "40%", left: "3%" },
    { top: "85%", right: "12%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingVariants}
          animate="animate"
          className="absolute"
          style={positions[i]}
        >
          <div
            className={`${element.size} bg-gradient-to-br ${element.color} bg-clip-text text-transparent opacity-20 blur-[0.5px]`}
          >
            {element.icon}
          </div>
        </motion.div>
      ))}

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[15%] left-[15%] w-20 h-20 border-2 border-purple-500/20 rounded-lg"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[20%] w-16 h-16 border-2 border-blue-500/20"
        style={{ borderRadius: "30%" }}
      />

      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[50%] left-[80%] w-12 h-12 border-2 border-pink-500/20 rounded-full"
      />
    </div>
  );
};

export default FloatingElements;
