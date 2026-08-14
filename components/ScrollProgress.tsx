"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-transparent">
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 shadow-sm"
      />
    </div>
  );
}
