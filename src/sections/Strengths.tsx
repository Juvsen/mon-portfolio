import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Compass,
  Lightbulb,
  RefreshCcw,
  Search,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { strengthsByLanguage, type Language } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Compass,
  Code2,
  RefreshCcw,
  BrainCircuit,
  Lightbulb,
  Sparkles,
  Wand2,
};

export function Strengths({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion() ?? false;
  const strengths = strengthsByLanguage[language];

  return (
    <section id="strengths" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={language === "fr" ? "Mes forces" : "My strengths"}
          index="02"
          title={
            language === "fr" ? (
              <>
                Ce qui me définit <span className="text-gradient-soft">au-delà des langages.</span>
              </>
            ) : (
              <>
                What defines me <span className="text-gradient-soft">beyond the stack.</span>
              </>
            )
          }
          description={
            language === "fr"
              ? "Chaque qualité est indépendante, visible et utile : une façon de penser, construire et apprendre."
              : "Each strength stands on its own, with a clear identity and a practical purpose in how I work."
          }
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((strength, index) => {
            const Icon = iconMap[strength.icon];
            return (
              <motion.article
                key={strength.title[language]}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.06,
                  duration: reduceMotion ? 0 : 0.45,
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 shadow-[0_24px_80px_-50px_rgba(56,189,248,0.7)] backdrop-blur-xl"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-violet/20" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {strength.title[language]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {strength.description[language]}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
