"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseTrail() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    // Set initial circle size to window height
    const updateSize = () => setCircleSize(window.innerHeight);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - circleSize / 2);
      mouseY.set(e.clientY - circleSize / 2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, circleSize]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none rounded-full z-50"
      style={{
        width: circleSize,
        height: circleSize,
        x: mouseX,
        y: mouseY,
        background: `radial-gradient(
            circle,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(10, 29, 48, 0.01) 50%,
            rgba(10, 29, 48, 0) 100%
        )`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}
