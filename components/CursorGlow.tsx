"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 45, damping: 25 });
  const springY = useSpring(y, { stiffness: 45, damping: 25 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="hidden h-[500px] w-[500px] rounded-full bg-indigo-500/[0.04] dark:bg-indigo-400/[0.04] blur-[140px] md:block"
      />
    </div>
  );
}
