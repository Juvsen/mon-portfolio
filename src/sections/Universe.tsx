import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  BrainCircuit,
  MonitorCog,
  Network,
  type LucideIcon,
} from "lucide-react";
import { SiPython } from "react-icons/si";
import type { IconType } from "react-icons";

import { Aurora } from "@/components/Aurora";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/socialLinks";
import type { SceneSettings } from "@/hooks/useSceneSettings";
import type { Language } from "@/data/portfolio";

const projectIcons: Record<string, IconType | LucideIcon> = {
  "virtual-lab": Network,
  "python-experiments": SiPython,
  "juvsen-ai": BrainCircuit,
  "it-manager": MonitorCog,
  "spider-miles-gwen": Braces,
};

export function Universe({ settings, language }: { settings: SceneSettings; language: Language }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const reduceMotion = settings.reduceMotion || prefersReducedMotion;
  const copy = {
    en: {
      eyebrow: "Selected works",
      title: (
        <>
          A portfolio of{" "}
          <span className="text-gradient">real projects and creative experiments</span>.
        </>
      ),
      description:
        "A curated selection of learning projects and personal builds across Python, software engineering, databases, virtualization, and frontend creativity.",
      demo: "Open demo",
      repo: "GitHub repository",
    },
    fr: {
      eyebrow: "Projets sélectionnés",
      title: (
        <>
          Un portfolio de{" "}
          <span className="text-gradient">projets concrets et expérimentations créatives</span>.
        </>
      ),
      description:
        "Une sélection de projets personnels et d'expérimentations autour de Python, du génie logiciel, des bases de données, de la virtualisation et du frontend créatif.",
      demo: "Voir la démo",
      repo: "Dépôt GitHub",
    },
  }[language];

  return (
    <section id="universe" className="relative overflow-hidden py-28 sm:py-36">
      <Aurora className="opacity-60" />
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          index="04"
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.id];
            const isFeatured = index === 0;
            const accentStyles =
              {
                "juvsen-ai": "from-primary/15 via-primary/5 to-violet/10",
                "it-manager": "from-sky-500/15 via-cyan-400/10 to-transparent",
                "virtual-lab": "from-violet/15 via-primary/10 to-transparent",
                "python-experiments": "from-amber-400/15 via-yellow-300/10 to-transparent",
                "spider-miles-gwen": "from-fuchsia-500/15 via-primary/10 to-transparent",
              }[project.id] ?? "from-primary/10 via-transparent to-transparent";

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.06,
                  duration: reduceMotion ? 0 : 0.5,
                }}
                whileHover={reduceMotion ? undefined : { y: -6, rotateX: 1.2, rotateY: -1.2 }}
                style={{ transformPerspective: 1200 }}
                className={`group relative flex min-h-64 flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-6 backdrop-blur-xl transition-colors hover:border-primary/25 sm:p-8 ${isFeatured ? "lg:translate-y-4" : ""}`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_34%)]" />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentStyles}`}
                />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/[0.07] blur-3xl transition-colors group-hover:bg-violet/15" />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 shadow-[0_0_30px_rgba(56,189,248,0.18)]">
                    <Icon
                      className="h-5 w-5"
                      style={project.id === "python-experiments" ? { color: "#ffd43b" } : undefined}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
                    {language === "fr" ? "PROJET / 0" : "PROJECT / 0"}
                    {index + 1}
                  </span>
                </div>
                <div className="relative mt-7">
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {project.name[language]}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                    {project.description[language]}
                  </p>
                  {project.disclaimer && (
                    <p className="mt-3 font-mono text-[10px] leading-relaxed text-amber-100/70">
                      {project.disclaimer[language]}
                    </p>
                  )}
                  {project.technologies.length > 0 && (
                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label={
                        language === "fr" ? "Technologies utilisées" : "Technologies used"
                      }
                    >
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] text-ink-muted ring-1 ring-white/10"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {(project.demoUrl || project.repositoryUrl) && (
                  <div className="relative mt-auto flex flex-wrap gap-4 pt-6">
                    {project.demoUrl && <ProjectLink href={project.demoUrl} label={copy.demo} />}
                    {project.repositoryUrl && (
                      <ProjectLink href={project.repositoryUrl} label={copy.repo} />
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary transition-colors hover:text-cyan-200"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}
