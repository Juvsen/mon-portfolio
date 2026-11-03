import { motion } from "framer-motion";
import {
  Compass,
  Layers,
  Server,
  Boxes,
  Database,
  BrainCircuit,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Aurora } from "@/components/Aurora";
import {
  focusAreasByLanguage,
  interestCatalog,
  profileByLanguage,
  type Language,
} from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Server,
  Boxes,
  Database,
  BrainCircuit,
  Compass,
  Sparkles,
};

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const profile = profileByLanguage[language];
  const focusAreas = focusAreasByLanguage[language];
  const interests = interestCatalog[language];

  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <Aurora />
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Left — narrative */}
          <div className="flex flex-col justify-center">
            <SectionHeader
              eyebrow={language === "fr" ? "Qui est JUVSEN" : "Who is JUVSEN"}
              index="02"
              title={
                language === "fr" ? (
                  <>
                    Du code aux systèmes,{" "}
                    <span className="text-gradient-soft">toujours apprendre.</span>
                  </>
                ) : (
                  <>
                    From code to systems,{" "}
                    <span className="text-gradient-soft">always learning.</span>
                  </>
                )
              }
            />
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-muted">
                {profile.intro}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-dim">
                {language === "fr"
                  ? "Mon parcours associe le développement Python, les bases de données et l'administration des systèmes et réseaux. J'aime comprendre comment les différentes couches d'un système informatique fonctionnent ensemble."
                  : "My studies bring together Python development, databases, and systems and network administration. I enjoy understanding how the different layers of a computer system work together."}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-dim">
                  {profile.role}
                </span>
                <span className="h-px w-12 bg-primary/40" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                  {language === "fr" ? "Licence 2" : "Year 2 student"}
                </span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                {profile.availability}
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {focusAreas.map((area) => {
                  const Icon = iconMap[area.icon];
                  return (
                    <div
                      key={area.title}
                      className="glass rounded-2xl p-4 ring-1 ring-white/5 transition-transform hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                          {area.metric}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>
                      <p className="mt-4 font-display text-lg font-semibold text-ink">
                        {area.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {area.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right — interest constellation */}
          <div className="relative">
            <Reveal delay={0.2}>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                    {language === "fr" ? "Domaines d'intérêt" : "Fields of interest"}
                  </span>
                </div>

                <div className="grid gap-px overflow-hidden rounded-2xl bg-white/5">
                  {interests.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        className="group flex items-center gap-4 bg-bg-2/60 p-4 transition-colors hover:bg-surface-2"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors group-hover:ring-primary/40">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-base font-semibold text-ink">
                            {item.label}
                          </p>
                          <p className="truncate text-sm text-ink-dim">{item.blurb}</p>
                        </div>
                        <span className="font-mono text-[10px] text-ink-dim">0{i + 1}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* floating accent */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
