import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { Language } from "@/data/portfolio";

interface LoaderProps {
  onComplete: () => void;
  language: Language;
}

/**
 * Cinematic loading transition shown on first paint. Fades out once
 * the entrance is ready, signalling the universe has "opened".
 */
export function Loader({ onComplete, language }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let completionTimer: number | undefined;
    const finish = () => {
      setProgress(100);
      completionTimer = window.setTimeout(() => setDone(true), reduce ? 0 : 350);
    };

    const startTimer = window.setTimeout(finish, reduce ? 0 : 700);
    const skipWhenHidden = () => {
      if (document.visibilityState === "hidden") {
        window.clearTimeout(startTimer);
        window.clearTimeout(completionTimer);
        setProgress(100);
        setDone(true);
      }
    };

    document.addEventListener("visibilitychange", skipWhenHidden);
    skipWhenHidden();
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(completionTimer);
      document.removeEventListener("visibilitychange", skipWhenHidden);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-5xl font-bold tracking-tight text-gradient sm:text-7xl">
              JUVSEN
            </span>
            <span className="absolute -right-3 -top-2 h-2 w-2 animate-pulse-soft rounded-full bg-primary" />
          </motion.div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.4em] text-ink-dim">
            {language === "fr" ? "Initialisation du portfolio" : "Initializing the portfolio"}
          </p>

          <div
            className="mt-5 h-px w-56 overflow-hidden bg-white/10 sm:w-72"
            role="progressbar"
            aria-label={language === "fr" ? "Chargement du portfolio" : "Portfolio loading"}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.floor(progress)}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
          <span className="mt-2 font-mono text-[10px] text-ink-dim">{Math.floor(progress)}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
