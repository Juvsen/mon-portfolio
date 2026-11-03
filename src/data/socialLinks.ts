import type { Language } from "./portfolio";

export type LinkCategory = "professional" | "social";

export type LinkIcon =
  | "github"
  | "linkedin"
  | "portfolio"
  | "email"
  | "instagram"
  | "facebook"
  | "x"
  | "tiktok"
  | "youtube"
  | "discord";

export interface SocialLink {
  id: string;
  name: string;
  category: LinkCategory;
  description: Record<Language, string>;
  username: string | null;
  url: string | null;
  icon: LinkIcon;
  available: boolean;
  featured: boolean;
}

export interface ProjectLink {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  demoUrl: string | null;
  repositoryUrl: string | null;
  technologies: string[];
  disclaimer: Record<Language, string> | null;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    category: "professional",
    description: {
      en: "Code, repositories, and open-source work.",
      fr: "Code, dépôts et contributions open source.",
    },
    username: null,
    url: null,
    icon: "github",
    available: false,
    featured: false,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "professional",
    description: {
      en: "Professional profile and connections.",
      fr: "Profil professionnel et réseau de contacts.",
    },
    username: "jérémy-juvsen-lombi-3158aa38a",
    url: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-juvsen-lombi-3158aa38a/",
    icon: "linkedin",
    available: true,
    featured: true,
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    category: "professional",
    description: {
      en: "You are already exploring this digital universe.",
      fr: "Vous explorez déjà cet univers numérique.",
    },
    username: null,
    url: "#entrance",
    icon: "portfolio",
    available: true,
    featured: false,
  },
  {
    id: "email",
    name: "Professional Email",
    category: "professional",
    description: {
      en: "For project enquiries and collaboration.",
      fr: "Pour parler d'un projet ou d'une collaboration.",
    },
    username: "lombijeremyjuvsen@gmail.com",
    url: "mailto:lombijeremyjuvsen@gmail.com",
    icon: "email",
    available: true,
    featured: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "social",
    description: { en: "Instagram profile.", fr: "Profil Instagram." },
    username: null,
    url: null,
    icon: "instagram",
    available: false,
    featured: false,
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "social",
    description: { en: "Facebook profile.", fr: "Profil Facebook." },
    username: null,
    url: null,
    icon: "facebook",
    available: false,
    featured: false,
  },
  {
    id: "x",
    name: "X (Twitter)",
    category: "social",
    description: { en: "X profile.", fr: "Profil X." },
    username: null,
    url: null,
    icon: "x",
    available: false,
    featured: false,
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "social",
    description: { en: "TikTok profile.", fr: "Profil TikTok." },
    username: null,
    url: null,
    icon: "tiktok",
    available: false,
    featured: false,
  },
  {
    id: "youtube",
    name: "YouTube",
    category: "social",
    description: { en: "YouTube channel.", fr: "Chaîne YouTube." },
    username: null,
    url: null,
    icon: "youtube",
    available: false,
    featured: false,
  },
  {
    id: "discord",
    name: "Discord",
    category: "social",
    description: { en: "Discord profile.", fr: "Profil Discord." },
    username: null,
    url: null,
    icon: "discord",
    available: false,
    featured: false,
  },
];

export const projects: ProjectLink[] = [
  {
    id: "virtual-lab",
    name: {
      en: "Virtualized Infrastructure Lab",
      fr: "Laboratoire d'infrastructure virtualisée",
    },
    description: {
      en: "A virtualization lab with configured virtual machines and a simulated network infrastructure.",
      fr: "Un environnement virtualisé composé de machines virtuelles configurées et d'une infrastructure réseau simulée.",
    },
    demoUrl: null,
    repositoryUrl: null,
    technologies: ["VMware", "Proxmox", "TCP/IP"],
    disclaimer: null,
  },
  {
    id: "python-experiments",
    name: { en: "Python Practice Lab", fr: "Laboratoire Python" },
    description: {
      en: "Small Python learning exercises exploring asynchronous code, algorithms, and typed data models.",
      fr: "De petits exercices Python pour explorer l'asynchrone, les algorithmes et les modèles de données typés.",
    },
    demoUrl: null,
    repositoryUrl: null,
    technologies: ["Python", "asyncio", "OOP"],
    disclaimer: {
      en: "Learning exercises and code samples, not finished production applications.",
      fr: "Exercices d'apprentissage et exemples de code, pas des applications de production finalisées.",
    },
  },
  {
    id: "juvsen-ai",
    name: { en: "Juvsen AI", fr: "Juvsen AI" },
    description: {
      en: "A React and TypeScript web application exploring an AI assistant experience.",
      fr: "Une application web en React et TypeScript autour d'une expérience d'assistant IA.",
    },
    demoUrl: null,
    repositoryUrl: null,
    technologies: ["React", "TypeScript"],
    disclaimer: null,
  },
  {
    id: "it-manager",
    name: { en: "IT Manager", fr: "IT Manager" },
    description: {
      en: "A Java application for managing sales of computers and other IT equipment.",
      fr: "Une application Java pour gérer la vente d'ordinateurs et d'autres équipements informatiques.",
    },
    demoUrl: null,
    repositoryUrl: null,
    technologies: ["Java"],
    disclaimer: null,
  },
  {
    id: "spider-miles-gwen",
    name: { en: "Spider-Man — Miles & Gwen", fr: "Spider-Man — Miles & Gwen" },
    description: {
      en: "A personal creative web project inspired by Miles Morales and Gwen Stacy.",
      fr: "Un projet web créatif personnel inspiré par Miles Morales et Gwen Stacy.",
    },
    demoUrl: "https://juvsen.github.io/spider-miles-site/gwen.html",
    repositoryUrl: null,
    technologies: ["HTML", "CSS", "JavaScript"],
    disclaimer: {
      en: "Fan-made and unofficial; not affiliated with or endorsed by Marvel.",
      fr: "Projet de fan non officiel, sans affiliation ni approbation de Marvel.",
    },
  },
];

export const contactConfig = {
  resumeUrl: "/cv/Curriculum-Vitae.pdf" as string | null,
  whatsappUrl: "https://wa.me/qr/JSFDVWCN52TZN1" as string | null,
};
