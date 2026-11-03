import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CircleAlert,
  FlaskConical,
  Layers3,
  MousePointer2,
  Play,
  ScrollText,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import {
  SiClaude,
  SiCline,
  SiEslint,
  SiFigma,
  SiFramer,
  SiGithubcopilot,
  SiGsap,
  SiPrettier,
  SiTailwindcss,
  SiThreedotjs,
  SiV0,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { DiGit, DiReact } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Aurora } from "@/components/Aurora";
import { pythonExperiments, toolkitGroups, type Language } from "@/data/portfolio";

const toolkitIconMap: Record<string, IconType | LucideIcon> = {
  vscode: VscVscode,
  copilot: SiGithubcopilot,
  claude: SiClaude,
  cline: SiCline,
  git: DiGit,
  figma: SiFigma,
  v0: SiV0,
  three: SiThreedotjs,
  react: DiReact,
  layers: Layers3,
  gsap: SiGsap,
  motion: SiFramer,
  scroll: MousePointer2,
  playwright: Play,
  eslint: SiEslint,
  prettier: SiPrettier,
  tailwind: SiTailwindcss,
  error: CircleAlert,
  path: ScrollText,
};

interface LabProps {
  language: Language;
}

export function Lab({ language }: LabProps) {
  const copy = {
    en: {
      eyebrow: "My workbench",
      title: (
        <>
          An environment for <span className="text-gradient-soft">building with intent.</span>
        </>
      ),
      description:
        "From VS Code and Copilot to Three.js, Figma and Playwright — the tools I use to design, build and refine digital projects.",
      toolkit: "Tools I use",
      experiments: "Python playground",
      snippets: "snippets",
      exercise: "learning exercises · not production projects",
    },
    fr: {
      eyebrow: "Mon environnement",
      title: (
        <>
          Un environnement pour <span className="text-gradient-soft">créer avec intention.</span>
        </>
      ),
      description:
        "De VS Code et Copilot à Three.js, Figma et Playwright — les outils que j’utilise pour concevoir, développer et améliorer des projets numériques.",
      toolkit: "Mes outils",
      experiments: "Laboratoire Python",
      snippets: "extraits",
      exercise: "exercices d’apprentissage · pas des projets de production",
    },
  }[language];

  return (
    <section id="lab" className="relative overflow-hidden py-28 sm:py-36">
      <Aurora className="opacity-50" />
      <div className="container-px relative z-10 mx-auto max-w-8xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          index="05"
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <Reveal>
            <div className="glass rounded-3xl p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Terminal className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:text-[11px]">
                    {copy.toolkit}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-ink-dim">JUVSEN / TOOLKIT</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {toolkitGroups.map((group, groupIndex) => (
                  <div
                    key={group.title.en}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-display text-xs font-semibold text-ink">
                        {group.title[language]}
                      </h3>
                      <span className="font-mono text-[8px] tracking-[0.15em] text-ink-dim">
                        0{groupIndex + 1}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const Icon = toolkitIconMap[item.icon];
                        return (
                          <span
                            key={item.name}
                            title={item.name}
                            className="group/tool inline-flex min-h-9 items-center gap-2 rounded-xl border border-white/[0.06] bg-[#080e1a] px-2.5 py-2 transition-all hover:-translate-y-0.5 hover:border-white/15"
                          >
                            <Icon
                              className="h-4 w-4 shrink-0 transition-transform group-hover/tool:scale-110"
                              style={{ color: item.color }}
                              aria-hidden="true"
                            />
                            <span className="text-[9px] leading-none text-ink-muted">
                              {item.name}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffd43b]/10 text-[#ffd43b] ring-1 ring-[#ffd43b]/15">
                    <FlaskConical className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:text-[11px]">
                    {copy.experiments}
                  </span>
                </div>
                <span className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim ring-1 ring-white/5">
                  {pythonExperiments.length} {copy.snippets}
                </span>
              </div>

              <PythonTerminal language={language} exerciseLabel={copy.exercise} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PythonTerminal({
  language,
  exerciseLabel,
}: {
  language: Language;
  exerciseLabel: string;
}) {
  const [active, setActive] = useState(0);
  const exp = pythonExperiments[active];

  return (
    <div className="flex flex-1 flex-col">
      {/* file tabs */}
      <div className="flex flex-wrap gap-1.5">
        {pythonExperiments.map((e, i) => (
          <button
            key={e.name}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-[11px] transition-colors ${
              i === active
                ? "bg-primary/15 text-primary ring-1 ring-primary/25"
                : "text-ink-dim hover:bg-white/5 hover:text-ink-muted"
            }`}
          >
            <Terminal className="h-3 w-3" />
            {e.name}
          </button>
        ))}
      </div>

      {/* blurb */}
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{exp.blurb[language]}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-dim ring-1 ring-white/5">
          {exp.tag}
        </span>
        <span className="font-mono text-[10px] text-ink-dim">{exerciseLabel}</span>
      </div>

      {/* code preview */}
      <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl bg-[#070b18] ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 font-mono text-[10px] text-ink-dim">{exp.name}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.pre
            key={exp.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed"
          >
            <code className="text-ink-muted">
              <HighlightedCode code={exp.code} />
            </code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Minimal Python-aware syntax highlighting via token classes. */
function HighlightedCode({ code }: { code: string }) {
  const keywords = new Set([
    "import",
    "from",
    "async",
    "await",
    "def",
    "return",
    "if",
    "else",
    "elif",
    "for",
    "in",
    "with",
    "as",
    "class",
    "raise",
    "print",
    "lambda",
    "None",
    "True",
    "False",
    "and",
    "or",
    "not",
    "try",
    "except",
    "finally",
  ]);

  return (
    <>
      {code.split("\n").map((line, idx) => (
        <div key={idx} className="whitespace-pre">
          {line.split(/(\s+|[(){},:]|\[|\])/).map((tok, i) => {
            if (tok.startsWith("#")) {
              return (
                <span key={i} className="text-ink-dim/70">
                  {tok}
                </span>
              );
            }
            if (/^["'].*["']$/.test(tok)) {
              return (
                <span key={i} className="text-success">
                  {tok}
                </span>
              );
            }
            if (keywords.has(tok)) {
              return (
                <span key={i} className="text-secondary">
                  {tok}
                </span>
              );
            }
            if (/^[0-9]/.test(tok)) {
              return (
                <span key={i} className="text-warning">
                  {tok}
                </span>
              );
            }
            if (/^[a-zA-Z_]\w*$/.test(tok) && code.includes(`${tok}(`)) {
              return (
                <span key={i} className="text-primary">
                  {tok}
                </span>
              );
            }
            return <span key={i}>{tok}</span>;
          })}
          {idx < code.split("\n").length - 1 && "\n"}
        </div>
      ))}
    </>
  );
}
