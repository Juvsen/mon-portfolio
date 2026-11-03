import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, Layers3, Server, Sparkles, type LucideIcon } from "lucide-react";
import {
  DiCss3,
  DiDotnet,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiLinux,
  DiMysql,
  DiPhp,
  DiPython,
  DiReact,
  DiWindows,
} from "react-icons/di";
import {
  SiCisco,
  SiGsap,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVmware,
} from "react-icons/si";
import type { IconType } from "react-icons";

import { SectionHeader } from "@/components/SectionHeader";
import { technicalExpertiseGroups, type Language } from "@/data/portfolio";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frontend Development": Layers3,
  "Backend & Software Engineering": Code2,
  "Database Engineering": Database,
  "Systems & Networking": Server,
  "Creative & Modern Technologies": Sparkles,
};

const techBrandIcons: Record<string, IconType> = {
  Python: DiPython,
  JavaScript: DiJavascript,
  Java: DiJava,
  "C#": DiDotnet,
  PHP: DiPhp,
  SQL: Database,
  HTML: DiHtml5,
  CSS: DiCss3,
  React: DiReact,
  TypeScript: SiTypescript,
  MySQL: DiMysql,
  Oracle: Database,
  "SQL Server": Database,
  Windows: DiWindows,
  Linux: DiLinux,
  "Windows Server": DiWindows,
  VMware: SiVmware,
  Proxmox: Server,
  "Hyper-V": DiWindows,
  "Cisco Networking": SiCisco,
  "Three.js": SiThreedotjs,
  "React Three Fiber": SiReact,
  GSAP: SiGsap,
  Motion: Sparkles,
  AI: SiPython,
  "Modern Web": SiTailwindcss,
};

export function TechnicalExpertise({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="technical-expertise" className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={language === "fr" ? "Mon univers technique" : "Technical expertise"}
          index="03"
          title={
            language === "fr" ? (
              <>
                Des compétences <span className="text-gradient-soft">organisées par domaine.</span>
              </>
            ) : (
              <>
                Skills organized <span className="text-gradient-soft">by technical domain.</span>
              </>
            )
          }
          description={
            language === "fr"
              ? "Un panorama clair de mes compétences, sans artifices ni pourcentages : du développement aux systèmes, en passant par les données et les technologies créatives."
              : "A clear view of my technical foundation, without artificial scores or inflated claims: from software to systems, data, and creative technologies."
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {technicalExpertiseGroups.map((group, groupIndex) => {
            const Icon = categoryIcons[group.title.en];
            return (
              <motion.article
                key={group.title[language]}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: reduceMotion ? 0 : groupIndex * 0.07,
                  duration: reduceMotion ? 0 : 0.45,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.02] p-5 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-violet/15" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {group.title[language]}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-dim">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-ink-muted">
                  {group.description[language]}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const BrandIcon = techBrandIcons[item.name] ?? Sparkles;
                    return (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#08111c] px-2.5 py-1.5 text-[10px] text-ink-muted ring-1 ring-white/5"
                        title={item.name}
                      >
                        <BrandIcon
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                      </span>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
