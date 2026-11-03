import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  Languages as LanguagesIcon,
  Sparkles,
} from "lucide-react";
import { SiPython } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { HeroScene } from "@/three/HeroScene";
import type { SceneSettings } from "@/hooks/useSceneSettings";
import type { Language } from "@/data/portfolio";

interface EntranceProps {
  settings: SceneSettings;
  onExplore: () => void;
  onLanguageChange: (language: Language) => void;
  language: Language;
}

const copyByLanguage = {
  en: {
    eyebrow: "Software developer · creative technologist",
    titleLine1: "BUILDING",
    titleLine2: "BEYOND LIMITS.",
    description:
      "I’m Juvsen, a software developer passionate about engineering meaningful digital experiences and building solutions through technology.",
    stats: [
      { value: "Python", label: "Core language" },
      { value: "Software", label: "Engineering" },
      { value: "Systems", label: "Infrastructure" },
    ],
    button: "Explore my work",
    cv: "Download CV",
    about: "Learn more about me",
    codeLabel: "A practical mindset",
    codeTitle: "From first line to meaningful systems.",
    code: [
      "def solve(problem):",
      "    understand(problem)",
      '    build_with("Python")',
      "    return keep_learning()",
    ],
    status: "BEYOND THE CODE",
  },
  fr: {
    eyebrow: "Développeur logiciel · technologue créatif",
    titleLine1: "CRÉER AU",
    titleLine2: "DELÀ DES LIMITES.",
    description:
      "Je suis Juvsen, un développeur logiciel passionné par la création d'expériences numériques utiles et la construction de solutions à travers la technologie.",
    stats: [
      { value: "Python", label: "Langage principal" },
      { value: "Logiciel", label: "Ingénierie" },
      { value: "Systèmes", label: "Infrastructure" },
    ],
    button: "Découvrir mon travail",
    cv: "Télécharger mon CV",
    about: "En savoir plus sur moi",
    codeLabel: "Une approche concrète",
    codeTitle: "De la première ligne au système utile.",
    code: [
      "def resoudre(probleme):",
      "    comprendre(probleme)",
      '    construire_avec("Python")',
      "    return continuer_a_apprendre()",
    ],
    status: "BEYOND THE CODE",
  },
} as const;

export function Entrance({ settings, onExplore, onLanguageChange, language }: EntranceProps) {
  const copy = copyByLanguage[language];

  return (
    <section id="entrance" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0.5, 6], fov: 50 }}
          dpr={[1, settings.isMobile ? 1.4 : 2]}
          gl={{ antialias: !settings.isMobile, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.25} />
            <HeroScene settings={settings} />
          </Suspense>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,rgba(9,24,55,0.12)_0%,rgba(3,4,12,0.6)_60%,#03040c_100%)]" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div
        className="absolute right-5 top-5 z-20 flex items-center gap-1 rounded-full border border-white/10 bg-[#07101f]/75 p-1.5 shadow-lg backdrop-blur-xl sm:right-8 sm:top-8"
        aria-label={language === "fr" ? "Choisir la langue" : "Choose language"}
      >
        <LanguagesIcon className="ml-1.5 h-3.5 w-3.5 text-ink-dim" aria-hidden="true" />
        {(["fr", "en"] as const).map((locale) => (
          <button
            key={locale}
            type="button"
            onClick={() => onLanguageChange(locale)}
            aria-pressed={language === locale}
            aria-label={locale === "fr" ? "Français" : "English"}
            className={`rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors ${
              language === locale
                ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                : "text-ink-dim hover:text-white"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="container-px relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.div
            className="mb-6 flex flex-col items-center gap-3 lg:items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
              Jérémy Juvsen Lombi
            </span>
          </motion.div>

          <motion.h1
            className="relative mx-auto max-w-3xl font-display text-[3.1rem] font-bold leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:mx-0 lg:text-[5.7rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-2 block text-ink/90">{copy.titleLine1}</span>
            <span className="relative block bg-gradient-to-r from-[#f9ec9d] via-[#f5c842] to-[#55b9ec] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(86,180,255,0.25)]">
              {copy.titleLine2}
            </span>
            <span className="pointer-events-none absolute -left-4 top-5 hidden h-20 w-20 rounded-full border border-primary/20 bg-primary/5 blur-2xl md:block" />
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {copy.description}
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-3 gap-2 sm:max-w-xl sm:gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.8 }}
          >
            {copy.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="glass rounded-2xl border border-white/10 px-3 py-3 text-left shadow-[0_20px_40px_-30px_rgba(56,189,248,0.9)] sm:px-4"
              >
                <div
                  className={`font-display text-base font-bold sm:text-xl ${index === 0 ? "text-[#ffe873]" : "text-gradient-soft"}`}
                >
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-ink-dim sm:text-[9px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              onClick={onExplore}
              className="group relative inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white ring-1 ring-white/10 transition-transform hover:scale-[1.03] sm:px-7 sm:text-[11px]"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-primary/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              {copy.button}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button
              variant="secondary"
              asChild
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:border-primary/40 hover:text-white"
            >
              <a
                href="/cv/Curriculum-Vitae.pdf"
                download
                className="inline-flex items-center gap-2"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                {copy.cv}
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.52, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-blue-500/15 via-transparent to-amber-300/10 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 1.2, -1.2, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 rounded-[2.5rem] border border-primary/15"
          />
          <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#07101f]/85 p-5 shadow-[0_30px_120px_-45px_rgba(56,189,248,0.55)] backdrop-blur-2xl sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-8 left-1/3 h-24 w-24 rounded-full bg-violet/10 blur-2xl" />
            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#101a2b] ring-1 ring-white/10 shadow-[0_0_40px_-10px_rgba(255,212,59,0.35)]">
                  <SiPython className="h-7 w-7 text-[#ffd43b]" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">Python</p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-dim">
                    {copy.codeLabel}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1.5 font-mono text-[8px] tracking-[0.12em] text-emerald-200/80">
                {copy.status}
              </span>
            </div>

            <div className="relative mt-6 rounded-2xl border border-white/[0.07] bg-[#030811] p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-1.5 border-b border-white/[0.06] pb-3">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[9px] text-ink-dim">approach.py</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[11px] leading-[2] sm:text-xs">
                {copy.code.map((line, index) => (
                  <code key={line} className="block whitespace-pre">
                    <span className="mr-4 select-none text-ink-dim/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        index === 0
                          ? "text-violet-300"
                          : index === 1
                            ? "text-sky-200"
                            : "text-ink-muted"
                      }
                    >
                      {line}
                    </span>
                  </code>
                ))}
              </pre>
            </div>

            <div className="relative mt-5 flex items-center justify-between gap-3">
              <p className="max-w-[16rem] font-display text-sm font-medium leading-relaxed text-ink/80 sm:text-base">
                {copy.codeTitle}
              </p>
              <motion.a
                href="#about"
                whileHover={{ rotate: 8, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                aria-label={copy.about}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
