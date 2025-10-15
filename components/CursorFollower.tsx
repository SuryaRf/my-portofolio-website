"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useSpring(0, {
    damping: 20,
    stiffness: 400,
    mass: 0.5,
  });

  const cursorY = useSpring(0, {
    damping: 20,
    stiffness: 400,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        setCursorText("Click");
      } else if (target.classList.contains("card-hover")) {
        setIsHovering(true);
        setCursorText("View");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2 border-purple-400/50"
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 25,
        }}
      >
        {cursorText && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium mix-blend-difference">
            {cursorText}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CursorFollower;
