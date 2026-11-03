import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  index: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  index,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 ${center ? "items-center text-center" : "items-start"}`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary/80">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
        <span className="font-mono text-[11px] text-ink-dim">{index}</span>
      </div>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
