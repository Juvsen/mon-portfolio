import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { journeyByLanguage, type Language } from "@/data/portfolio";

export function Journey({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion() ?? false;
  const journey = journeyByLanguage[language];

  return (
    <section id="journey" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={language === "fr" ? "Mon parcours" : "My journey"}
          index="05"
          title={
            language === "fr" ? (
              <>
                Une progression <span className="text-gradient-soft">dans le temps.</span>
              </>
            ) : (
              <>
                A progression built <span className="text-gradient-soft">over time.</span>
              </>
            )
          }
          description={
            language === "fr"
              ? "Un parcours centré sur l'apprentissage, l'exploration et la construction de compétences concrètes."
              : "A path focused on learning, exploration, and the gradual building of practical skills."
          }
        />

        <div className="relative mt-14">
          <div className="absolute left-[18px] top-0 bottom-0 hidden w-px bg-white/10 md:block" />
          <div className="space-y-5">
            {journey.map((step, index) => (
              <motion.article
                key={`${step.year}-${step.title[language]}`}
                initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                  duration: reduceMotion ? 0 : 0.5,
                }}
                className="relative md:pl-14"
              >
                <div className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-4 border-[#050b16] bg-primary shadow-[0_0_20px_rgba(56,189,248,0.8)] md:block" />
                <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-5 backdrop-blur-xl sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      {step.year}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {step.title[language]}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {step.description[language]}
                  </p>
                  <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/[0.04] p-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-dim">
                      {language === "fr" ? "Réalisation" : "Outcome"}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-ink/90">
                      {step.outcome[language]}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
