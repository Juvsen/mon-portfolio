import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Network,
  type LucideIcon,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/socialLinks";
import type { Language } from "@/data/portfolio";

const projectIconMap: Record<string, LucideIcon> = {
  "juvsen-ai": BrainCircuit,
  "it-manager": Cpu,
  "virtual-lab": Network,
  "python-experiments": Code2,
  "spider-miles-gwen": Database,
};

export function FeaturedProjects({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion() ?? false;
  const spotlight = projects.find((project) => project.id === "juvsen-ai") ?? projects[0];
  const secondary = projects.filter((project) => project.id !== spotlight.id).slice(0, 3);

  return (
    <section id="featured-projects" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={language === "fr" ? "Projet phare" : "Featured project"}
          index="04"
          title={
            language === "fr" ? (
              <>
                Un point d'entrée{" "}
                <span className="text-gradient-soft">dans mon univers technique.</span>
              </>
            ) : (
              <>
                A strategic entry point{" "}
                <span className="text-gradient-soft">into my technical universe.</span>
              </>
            )
          }
          description={
            language === "fr"
              ? "Juvsen AI illustre l’esprit de curiosité, de construction et de recherche qui guide mon travail."
              : "Juvsen AI reflects the curiosity, hands-on building, and exploration that define how I work."
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-[#07101d] via-[#0a1323] to-[#0a0f1d] p-6 shadow-[0_30px_90px_-50px_rgba(56,189,248,0.8)] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/15 blur-[100px]" />
            <div className="relative flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {language === "fr" ? "Projet phare" : "Featured"}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-dim">
                01
              </span>
            </div>

            <div className="relative mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    {(() => {
                      const Icon = projectIconMap[spotlight.id] ?? BrainCircuit;
                      return <Icon className="h-5 w-5" aria-hidden="true" />;
                    })()}
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                    {spotlight.name[language]}
                  </h3>
                </div>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
                  {spotlight.description[language]}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {spotlight.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#040b14]/80 p-4 sm:p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-dim">
                  {language === "fr" ? "Objectif" : "Objective"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {language === "fr"
                    ? "Explorer l’expérience d’un assistant IA dans un contexte de développement web moderne, en gardant une approche claire, testable et centrée sur l’utilisateur."
                    : "Explore the experience of an AI assistant in a modern web context while keeping the approach clear, testable, and user-centered."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {spotlight.demoUrl && (
                    <a
                      href={spotlight.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary"
                    >
                      {language === "fr" ? "Voir la démo" : "Open demo"}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {spotlight.repositoryUrl && (
                    <a
                      href={spotlight.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-muted"
                    >
                      {language === "fr" ? "Code source" : "Source code"}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="space-y-4">
            {secondary.map((project, index) => {
              const Icon = projectIconMap[project.id] ?? BrainCircuit;
              return (
                <motion.article
                  key={project.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.08,
                    duration: reduceMotion ? 0 : 0.45,
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">
                          {project.name[language]}
                        </h4>
                        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-dim">
                          {language === "fr" ? "Projet" : "Project"} /{" "}
                          {String(index + 2).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {project.description[language]}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
