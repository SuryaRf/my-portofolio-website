"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const ModernCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const targetX = useMotionValue(-100);
  const targetY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 600, mass: 0.3 };
  const cursorXSpring = useSpring(targetX, springConfig);
  const cursorYSpring = useSpring(targetY, springConfig);

  // Only show cursor on desktop
  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    setIsMounted(hasPointer);

    if (hasPointer) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Magnetic effect calculation
  const calculateMagneticOffset = useCallback((e: MouseEvent, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    const maxDistance = 80;
    const magneticStrength = 0.3;

    if (distance < maxDistance) {
      const offsetX = (centerX - e.clientX) * magneticStrength;
      const offsetY = (centerY - e.clientY) * magneticStrength;
      return { x: offsetX, y: offsetY };
    }

    return { x: 0, y: 0 };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let offsetX = 0;
      let offsetY = 0;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea");

      const isCard = target.classList.contains("card-hover") || target.closest(".card-hover");

      if (isInteractive) {
        const element = (target.closest("a") || target.closest("button") || target) as HTMLElement;
        const offset = calculateMagneticOffset(e, element);
        offsetX = offset.x;
        offsetY = offset.y;
        setIsHovering(true);
        setCursorText("✨");
      } else if (isCard) {
        setIsHovering(true);
        setCursorText("👀");
      } else {
        setIsHovering(false);
        setCursorText("");
      }

      targetX.set(e.clientX + offsetX);
      targetY.set(e.clientY + offsetY);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMounted, cursorX, cursorY, targetX, targetY, calculateMagneticOffset]);

  if (!isMounted) return null;

  return (
    <div suppressHydrationWarning>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
              className="fixed top-0 left-0 pointer-events-none z-[99999]"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <motion.div
                animate={{ scale: isClicking ? 0.8 : 1, rotate: isHovering ? 180 : 0 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 20 }}
                className="relative drop-shadow-[0_0_10px_rgba(168,85,247,1)] filter brightness-110"
                style={{ backfaceVisibility: "hidden" }}
              >
                <motion.div
                  className="absolute inset-0 w-6 h-6"
                  animate={{
                    scale: isHovering ? [1, 1.5, 1] : 1,
                    opacity: isHovering ? [0.5, 0, 0.5] : 0,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full rounded-full bg-purple-500/50 blur-xl" />
                </motion.div>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative z-10"
                  style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
                >
                  <motion.path
                    d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                    fill="url(#cursor-gradient)"
                    animate={{ scale: isHovering ? 1.2 : 1 }}
                  />
                  <motion.path
                    d="M12 6L12.75 9.25L16 10L12.75 10.75L12 14L11.25 10.75L8 10L11.25 9.25L12 6Z"
                    fill="#ffffff"
                    animate={{ rotate: isHovering ? 360 : 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="cursor-gradient" x1="4" y1="2" x2="20" y2="18">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                <AnimatePresence mode="wait">
                  {cursorText && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0, y: -10 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl pointer-events-none"
                    >
                      {cursorText}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.15 }}
              className="fixed top-0 left-0 pointer-events-none z-[99998]"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <motion.div
                animate={{
                  scale: isHovering ? [1, 1.8, 1] : [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-md"
              />
            </motion.div>

            <AnimatePresence>
              {isHovering &&
                [0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30, delay: i * 0.05 }}
                    className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-400 pointer-events-none z-[99997] drop-shadow-[0_0_4px_rgba(168,85,247,0.8)]"
                    style={{
                      x: cursorXSpring,
                      y: cursorYSpring,
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <motion.div
                      animate={{
                        x: [
                          Math.cos((angle * Math.PI) / 180) * 30,
                          Math.cos(((angle + 360) * Math.PI) / 180) * 30,
                        ],
                        y: [
                          Math.sin((angle * Math.PI) / 180) * 30,
                          Math.sin(((angle + 360) * Math.PI) / 180) * 30,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full rounded-full bg-purple-400"
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernCursor;
