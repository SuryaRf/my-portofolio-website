"use client";

import ModernCursor from "./ModernCursor";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";
import ScrollProgressBar from "./ScrollProgressBar";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ModernCursor />
      <ParticleBackground />
      <FloatingElements />
      <ScrollProgressBar />
      {children}
    </>
  );
};

export default AnimationWrapper;
