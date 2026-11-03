import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";

import type { Language } from "@/data/portfolio";

const nav = [
  { id: "entrance", label: { fr: "Accueil", en: "Home" } },
  { id: "about", label: { fr: "À propos", en: "About" } },
  { id: "languages", label: { fr: "Compétences", en: "Skills" } },
  { id: "universe", label: { fr: "Projets", en: "Projects" } },
  { id: "lab", label: { fr: "Outils", en: "Toolkit" } },
  { id: "connect", label: { fr: "Contact", en: "Connect" } },
];

interface NavbarProps {
  language: Language;
  setLanguage: (value: Language) => void;
}

export function Navbar({ language, setLanguage }: NavbarProps) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("entrance");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 140);
      const mid = window.scrollY + window.innerHeight * 0.4;
      for (const item of nav) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= mid && el.offsetTop + el.offsetHeight > mid) {
          setActive(item.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 pt-4"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <nav className="glass-strong flex max-w-[92vw] items-center gap-1 rounded-full px-3 py-2 ring-1 ring-white/5">
            <button
              onClick={() => go("entrance")}
              className="mr-2 flex items-center gap-2 pl-2 pr-3"
              aria-label={language === "fr" ? "Retour en haut" : "Back to top"}
            >
              <span className="font-display text-sm font-bold tracking-tight text-gradient">
                JUVSEN
              </span>
            </button>
            <div className="mx-1 hidden h-5 w-px bg-white/10 sm:block" />
            <div className="hidden items-center gap-0.5 sm:flex">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                    active === item.id ? "text-white" : "text-ink-muted hover:text-white"
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label[language]}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2 sm:ml-2">
              <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 sm:flex">
                {(["fr", "en"] as const).map((locale) => (
                  <button
                    key={locale}
                    type="button"
                    onClick={() => setLanguage(locale)}
                    aria-pressed={language === locale}
                    className={`rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors ${
                      language === locale
                        ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                        : "text-ink-dim hover:text-white"
                    }`}
                    aria-label={`Switch language to ${locale === "fr" ? "French" : "English"}`}
                  >
                    {locale.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-white sm:hidden"
                aria-label={language === "fr" ? "Passer en anglais" : "Switch to French"}
              >
                <LanguagesIcon className="h-3 w-3" />
                {language === "fr" ? "EN" : "FR"}
              </button>
            </div>
            <button
              onClick={() => go("connect")}
              className="ml-1 rounded-full bg-primary/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 transition hover:bg-primary/25 sm:hidden"
            >
              {language === "fr" ? "Contact" : "Connect"}
            </button>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
