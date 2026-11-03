import { motion, useScroll, useSpring } from "framer-motion";

/** Thin top-of-screen scroll progress bar, tinted with the universe palette. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-accent to-secondary"
      style={{ scaleX }}
    />
  );
}
