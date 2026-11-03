import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Copy,
  Facebook,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { Aurora } from "@/components/Aurora";
import {
  contactConfig,
  projects,
  socialLinks,
  type LinkIcon,
  type SocialLink,
} from "@/data/socialLinks";

const iconMap: Record<LinkIcon, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  portfolio: Globe2,
  email: Mail,
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
  tiktok: Music2,
  youtube: Youtube,
  discord: MessageCircle,
};

export function Connect({ language }: { language: "fr" | "en" }) {
  const reduceMotion = useReducedMotion() ?? false;
  const availableProfiles = socialLinks
    .filter(isAvailableLink)
    .sort((left, right) => Number(right.featured) - Number(left.featured));
  const categoriesLocalized = [
    { id: "professional", label: language === "fr" ? "Réseaux professionnels" : "Professional" },
    { id: "social", label: language === "fr" ? "Réseaux sociaux" : "Social" },
    { id: "projects", label: language === "fr" ? "Mes projets" : "Projects" },
  ] as const;
  const visibleCategories = categoriesLocalized.filter(
    (category) =>
      category.id === "projects" || availableProfiles.some((link) => link.category === category.id),
  );
  const [activeCategory, setActiveCategory] = useState<(typeof categoriesLocalized)[number]["id"]>(
    visibleCategories[0]?.id ?? "projects",
  );

  return (
    <section id="connect" className="relative isolate overflow-hidden py-28 sm:py-36">
      <Aurora />
      <div
        className="footprint-particles pointer-events-none absolute inset-0 -z-0"
        aria-hidden="true"
      >
        <span className="footprint-particle footprint-particle--one" />
        <span className="footprint-particle footprint-particle--two" />
        <span className="footprint-particle footprint-particle--three" />
      </div>
      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-primary/50" />
            <span className="eyebrow">
              {language === "fr" ? "JUVSEN / IDENTITÉ NUMÉRIQUE" : "JUVSEN / DIGITAL IDENTITY"}
            </span>
            <span className="font-mono text-[11px] text-ink-dim">06</span>
          </div>
          <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">
              {language === "fr" ? "MA TRACE NUMÉRIQUE" : "MY DIGITAL FOOTPRINT"}
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {language === "fr"
              ? "Explorez mon travail, suivez mon parcours et rejoignez-moi dans le monde numérique."
              : "Explore my work, follow my journey, and connect with me across the digital world."}
          </p>
        </motion.div>

        <div className="mt-12 border-y border-white/10 py-3">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label={
              language === "fr"
                ? "Catégories de la présence numérique"
                : "Digital footprint categories"
            }
          >
            {visibleCategories.map((category, index) => {
              const selected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`footprint-tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls="footprint-panel"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors sm:px-5 sm:text-[11px] ${
                    selected
                      ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                      : "text-ink-dim hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  <span className="mr-2 text-ink-dim/70">0{index + 1}</span>
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="footprint-panel"
          role="tabpanel"
          aria-labelledby={`footprint-tab-${activeCategory}`}
          className="min-h-72 py-8 sm:py-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
            >
              {activeCategory === "projects" ? (
                <ProjectGrid reduceMotion={reduceMotion} language={language} />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {availableProfiles
                    .filter((link) => link.category === activeCategory)
                    .map((link, index) => (
                      <ProfileCard
                        key={link.id}
                        link={link}
                        index={index}
                        reduceMotion={reduceMotion}
                        language={language}
                      />
                    ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <ContactPanel reduceMotion={reduceMotion} language={language} />
      </div>
    </section>
  );
}

function ProfileCard({
  link,
  index,
  reduceMotion,
  language,
}: {
  link: SocialLink & { url: string };
  index: number;
  reduceMotion: boolean;
  language: "fr" | "en";
}) {
  const Icon = iconMap[link.icon];
  const external = link.url.startsWith("https://") || link.url.startsWith("http://");

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: reduceMotion ? 0 : 0.45 }}
      whileHover={reduceMotion ? undefined : { y: -5, rotateX: 1, rotateY: -1 }}
      className="group relative flex min-h-64 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-5 shadow-[0_18px_60px_-40px_rgba(56,189,248,0.6)] backdrop-blur-xl transition-colors hover:border-primary/30 sm:p-6"
      style={{ transformPerspective: 900 }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-colors group-hover:bg-violet/20" />
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="flex items-center gap-2 rounded-full bg-emerald-300/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-200/80 ring-1 ring-emerald-200/15">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
          {language === "fr" ? "Lien disponible" : "Link available"}
        </span>
      </div>
      <div className="mt-6">
        <h3 className="font-display text-lg font-semibold text-ink">
          {language === "fr" && link.id === "email"
            ? "E-mail professionnel"
            : language === "fr" && link.id === "portfolio"
              ? "Portfolio personnel"
              : link.name}
        </h3>
        <p className="mt-2 min-h-10 text-sm leading-relaxed text-ink-muted">
          {link.description[language]}
        </p>
        {link.username && (
          <div className="mt-4 flex min-w-0 items-center gap-2">
            <span className="min-w-0 flex-1 truncate font-mono text-xs text-primary/90">
              {link.username}
            </span>
            <CopyButton
              value={link.username}
              label={
                language === "fr"
                  ? `Copier ${link.id === "email" ? "l'adresse e-mail" : `l'identifiant ${link.name}`}`
                  : `Copy ${link.id === "email" ? "email address" : `${link.name} username`}`
              }
              language={language}
            />
          </div>
        )}
      </div>
      <a
        href={link.url}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        {link.id === "email"
          ? language === "fr"
            ? "Envoyer un e-mail"
            : "Send an email"
          : link.id === "portfolio"
            ? language === "fr"
              ? "Explorer ce portfolio"
              : "Explore this portfolio"
            : language === "fr"
              ? "Ouvrir le profil"
              : "Open profile"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </motion.article>
  );
}

function ProjectGrid({ reduceMotion, language }: { reduceMotion: boolean; language: "fr" | "en" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: reduceMotion ? 0 : 0.45 }}
          whileHover={reduceMotion ? undefined : { y: -5, rotateX: 1, rotateY: -1 }}
          style={{ transformPerspective: 900 }}
          className="group relative flex min-h-64 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-5 shadow-[0_18px_60px_-40px_rgba(56,189,248,0.5)] backdrop-blur-xl transition-colors hover:border-primary/30 sm:p-7"
        >
          <span className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-violet/10 blur-3xl transition-colors group-hover:bg-primary/15" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-dim">
                {language === "fr" ? "PROJET / 0" : "PROJECT / 0"}
                {index + 1}
              </span>
              {project.demoUrl && (
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-200/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  {language === "fr" ? "Démo disponible" : "Demo available"}
                </span>
              )}
            </div>
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              {project.name[language]}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
              {project.description[language]}
            </p>
            {project.technologies.length > 0 && (
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={language === "fr" ? "Technologies utilisées" : "Technologies used"}
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
            {project.disclaimer && (
              <p className="mt-4 font-mono text-[10px] leading-relaxed text-amber-100/70">
                {project.disclaimer[language]}
              </p>
            )}
          </div>
          <div className="relative mt-auto flex flex-wrap gap-3 pt-6">
            {project.demoUrl && (
              <ExternalAction
                href={project.demoUrl}
                label={language === "fr" ? "Voir la démo" : "View demo"}
              />
            )}
            {project.repositoryUrl && (
              <ExternalAction
                href={project.repositoryUrl}
                label={language === "fr" ? "Dépôt GitHub" : "GitHub repository"}
              />
            )}
            {!project.demoUrl && !project.repositoryUrl && (
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                {language === "fr" ? "Liens à ajouter" : "Links will be added when available"}
              </span>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function ContactPanel({
  reduceMotion,
  language,
}: {
  reduceMotion: boolean;
  language: "fr" | "en";
}) {
  const email = socialLinks.find((link) => link.id === "email" && isAvailableLink(link));
  const contactLinks = socialLinks
    .filter(isAvailableLink)
    .filter((link) => link.id === "github" || link.id === "linkedin");
  const resumeUrl = contactConfig.resumeUrl;
  const copy = {
    en: {
      eyebrow: "Contact & Collaboration",
      title: "Have an idea, a project, or an opportunity? Let's build something meaningful.",
      cta: "Contact me",
      resume: "Download CV",
    },
    fr: {
      eyebrow: "Contact & collaboration",
      title:
        "Vous avez une idée, un projet ou une opportunité ? Construisons quelque chose de significatif.",
      cta: "Me contacter",
      resume: "Télécharger le CV",
    },
  }[language];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduceMotion ? 0 : 0.55 }}
      className="relative mt-8 overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-sky-400/[0.08] via-indigo-400/[0.06] to-violet-400/[0.08] p-6 sm:mt-12 sm:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-violet/10 blur-[70px]" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight text-ink sm:text-4xl">
            {copy.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {email?.url && (
            <a
              href={email.url}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-bg transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {copy.cta}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === "fr" ? `Voir le profil ${link.name}` : `Visit ${link.name}`
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-ink transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
          {contactConfig.whatsappUrl && isConfiguredUrl(contactConfig.whatsappUrl) && (
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                language === "fr" ? "Me contacter sur WhatsApp" : "Contact me on WhatsApp"
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-ink transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {resumeUrl && isConfiguredUrl(resumeUrl) && (
            <a
              href={resumeUrl}
              download
              target={resumeUrl.startsWith("http") ? "_blank" : undefined}
              rel={resumeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              {copy.resume}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ExternalAction({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.13em] text-primary transition-colors hover:border-primary/50 hover:bg-primary/[0.14]"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

function CopyButton({
  value,
  label,
  language,
}: {
  value: string | null;
  label: string;
  language: "fr" | "en";
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  if (!value) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setError(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      setError(true);
    }
  };

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={
        error
          ? language === "fr"
            ? `Impossible de copier ${label}`
            : `Could not copy ${label}`
          : label
      }
      title={
        error
          ? language === "fr"
            ? "La copie n'est pas disponible dans ce navigateur"
            : "Copy is unavailable in this browser context"
          : label
      }
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-dim transition-colors hover:bg-white/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only" aria-live="polite">
        {copied
          ? language === "fr"
            ? "Copié"
            : "Copied"
          : error
            ? language === "fr"
              ? "Copie indisponible"
              : "Copy unavailable"
            : ""}
      </span>
    </button>
  );
}

function isConfiguredUrl(value: string) {
  if (value.startsWith("#")) return value === "#entrance";
  if (value.startsWith("/")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" || url.protocol === "mailto:";
  } catch {
    return false;
  }
}

function isAvailableLink(link: SocialLink): link is SocialLink & { url: string } {
  return link.available && link.url !== null && isConfiguredUrl(link.url);
}
