import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SiProxmox, SiPython, SiVmware } from "react-icons/si";
import {
  DiBootstrap,
  DiCisco,
  DiCss3,
  DiDocker,
  DiGit,
  DiDotnet,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiLinux,
  DiMysql,
  DiPhp,
  DiPython,
  DiWindows,
} from "react-icons/di";
import type { IconType } from "react-icons";

import { Aurora } from "@/components/Aurora";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  skills,
  skillCategories,
  type Language,
  type SkillCategory,
  type SkillIcon,
} from "@/data/portfolio";

const skillIconMap: Record<SkillIcon, IconType | LucideIcon> = {
  python: DiPython,
  java: DiJava,
  csharp: DiDotnet,
  php: DiPhp,
  code: Code2,
  html: DiHtml5,
  css: DiCss3,
  javascript: DiJavascript,
  bootstrap: DiBootstrap,
  mysql: DiMysql,
  sqlserver: Database,
  oracle: Database,
  database: Database,
  windows: DiWindows,
  linux: DiLinux,
  cisco: DiCisco,
  proxmox: SiProxmox,
  vmware: SiVmware,
  docker: DiDocker,
  git: DiGit,
  devops: Workflow,
  security: ShieldCheck,
  design: Palette,
};

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  development: Code2,
  web: Palette,
  data: Database,
  systems: Server,
};

const copyByLanguage = {
  fr: {
    eyebrow: "Compétences",
    title: (
      <>
        Une base solide, <span className="text-gradient-soft">Python en premier.</span>
      </>
    ),
    subtitle:
      "Développement, données, web et infrastructure — les compétences que je construis en formation et par la pratique.",
    primary: "Mon langage principal",
    year: "Licence 2 · Analyse & programmation",
    level: "Bases",
  },
  en: {
    eyebrow: "Skills",
    title: (
      <>
        A growing toolkit, <span className="text-gradient-soft">Python first.</span>
      </>
    ),
    subtitle:
      "Application development, data, web, and infrastructure — skills I’m building through study and hands-on practice.",
    primary: "My main language",
    year: "Year 2 · Analysis & Programming",
    level: "Fundamentals",
  },
} as const;

const skillCategoryOrder: SkillCategory[] = ["development", "web", "data", "systems"];

interface LanguagesProps {
  language: Language;
}

export function Languages({ language }: LanguagesProps) {
  const copy = copyByLanguage[language];
  const python = skills.find((skill) => skill.icon === "python");

  return (
    <section id="languages" className="relative overflow-hidden py-24 sm:py-32">
      <Aurora className="opacity-40" />
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          index="03"
          title={copy.title}
          description={copy.subtitle}
        />

        {python && (
          <Reveal delay={0.1}>
            <motion.article
              whileHover={{ y: -3 }}
              className="group relative mt-12 overflow-hidden rounded-[2rem] border border-[#ffd43b]/20 bg-gradient-to-br from-[#101827] via-[#0a1322] to-[#10111d] p-6 shadow-[0_30px_90px_-40px_rgba(255,212,59,0.2)] sm:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#3776ab]/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-[#ffd43b]/[0.08] blur-[90px]" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div className="flex items-start gap-5 sm:gap-7">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] ring-1 ring-white/10 shadow-[0_0_40px_-12px_rgba(255,212,59,0.45)] sm:h-20 sm:w-20">
                    <SiPython
                      className="h-9 w-9 text-[#ffd43b] sm:h-11 sm:w-11"
                      aria-hidden="true"
                    />
                    <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-[#101827] bg-emerald-400" />
                  </div>
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ffd43b]/20 bg-[#ffd43b]/[0.07] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#ffe873]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ffd43b]" />
                      {copy.primary}
                    </div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                      Python
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                      {python.note[language]}
                    </p>
                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-dim">
                      {copy.year}
                    </p>
                  </div>
                </div>
                <div className="hidden items-center gap-2 md:flex" aria-hidden="true">
                  {["01", "10", "11", "00", "01", "10", "01", "00", "11", "01", "10", "00"].map(
                    (bit, index) => (
                      <span
                        key={`${bit}-${index}`}
                        className="font-mono text-[10px] text-[#ffd43b]/25"
                        style={{ transform: `translateY(${index % 2 === 0 ? -8 : 8}px)` }}
                      >
                        {bit}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.article>
          </Reveal>
        )}

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {skillCategoryOrder.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter(
              (skill) => skill.category === category && skill.icon !== "python",
            );

            return (
              <Reveal key={category} delay={0.08 * categoryIndex}>
                <article className="glass h-full rounded-3xl p-5 transition-colors hover:border-primary/25 sm:p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {skillCategories[category][language]}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-ink-dim">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {categorySkills.map((skill) => {
                      const SkillIconComponent = skillIconMap[skill.icon];
                      return (
                        <div
                          key={skill.name}
                          className="group/skill flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.025] px-3 py-2.5 transition-colors hover:border-white/10 hover:bg-white/[0.05]"
                        >
                          <SkillIconComponent
                            className="h-5 w-5 shrink-0"
                            style={{ color: skill.color }}
                            aria-hidden="true"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-medium text-ink">{skill.name}</p>
                            <p className="truncate text-[9px] leading-relaxed text-ink-dim">
                              {skill.note[language]}
                            </p>
                          </div>
                          {skill.level === "basics" && (
                            <span className="shrink-0 rounded-full bg-white/[0.05] px-2 py-1 font-mono text-[8px] uppercase tracking-wide text-ink-dim">
                              {copy.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
