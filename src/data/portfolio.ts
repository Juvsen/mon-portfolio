export type Language = "fr" | "en";

export type SkillIcon =
  | "python"
  | "java"
  | "csharp"
  | "php"
  | "code"
  | "html"
  | "css"
  | "javascript"
  | "bootstrap"
  | "mysql"
  | "sqlserver"
  | "oracle"
  | "database"
  | "windows"
  | "linux"
  | "cisco"
  | "proxmox"
  | "vmware"
  | "docker"
  | "git"
  | "devops"
  | "security"
  | "design";

export type SkillCategory = "development" | "web" | "data" | "systems";

export interface Skill {
  name: string;
  icon: SkillIcon;
  category: SkillCategory;
  color: string;
  note: Record<Language, string>;
  level?: "primary" | "basics";
}

export const skills: Skill[] = [
  {
    name: "Python",
    icon: "python",
    category: "development",
    color: "#ffd43b",
    level: "primary",
    note: { en: "My main programming language", fr: "Mon langage de programmation principal" },
  },
  {
    name: "Java",
    icon: "java",
    category: "development",
    color: "#ed6c30",
    note: { en: "Application development", fr: "Développement d'applications" },
  },
  {
    name: "C#",
    icon: "csharp",
    category: "development",
    color: "#9b4f96",
    level: "basics",
    note: { en: "Programming fundamentals", fr: "Bases de programmation" },
  },
  {
    name: "PHP",
    icon: "php",
    category: "development",
    color: "#777bb4",
    level: "basics",
    note: { en: "Programming fundamentals", fr: "Bases de programmation" },
  },
  {
    name: "WinDev",
    icon: "code",
    category: "development",
    color: "#38bdf8",
    level: "basics",
    note: { en: "Application development fundamentals", fr: "Bases du développement applicatif" },
  },
  {
    name: "HTML5",
    icon: "html",
    category: "web",
    color: "#e34f26",
    level: "basics",
    note: { en: "Web page structure", fr: "Structure des pages web" },
  },
  {
    name: "CSS3",
    icon: "css",
    category: "web",
    color: "#1572b6",
    level: "basics",
    note: { en: "Web styling fundamentals", fr: "Bases du style web" },
  },
  {
    name: "JavaScript",
    icon: "javascript",
    category: "web",
    color: "#f7df1e",
    level: "basics",
    note: { en: "Interactive web fundamentals", fr: "Bases de l'interactivité web" },
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    category: "web",
    color: "#7952b3",
    note: { en: "Responsive interface toolkit", fr: "Outils pour interfaces adaptatives" },
  },
  {
    name: "UI / UX",
    icon: "design",
    category: "web",
    color: "#fb7185",
    note: {
      en: "Interface and usability principles",
      fr: "Principes d'interface et d'utilisabilité",
    },
  },
  {
    name: "MySQL",
    icon: "mysql",
    category: "data",
    color: "#4479a1",
    note: {
      en: "Relational database fundamentals",
      fr: "Bases des bases de données relationnelles",
    },
  },
  {
    name: "SQL Server",
    icon: "sqlserver",
    category: "data",
    color: "#cc2927",
    note: {
      en: "Relational database fundamentals",
      fr: "Bases des bases de données relationnelles",
    },
  },
  {
    name: "Oracle",
    icon: "oracle",
    category: "data",
    color: "#f80000",
    note: {
      en: "Relational database fundamentals",
      fr: "Bases des bases de données relationnelles",
    },
  },
  {
    name: "HFSQL",
    icon: "database",
    category: "data",
    color: "#38bdf8",
    note: { en: "Database fundamentals", fr: "Bases de données" },
  },
  {
    name: "MERISE & UML",
    icon: "database",
    category: "data",
    color: "#a78bfa",
    note: { en: "Data modeling and system design", fr: "Modélisation des données et des systèmes" },
  },
  {
    name: "Windows Server 2019",
    icon: "windows",
    category: "systems",
    color: "#00a4ef",
    note: {
      en: "Users, access and core services",
      fr: "Utilisateurs, accès et services essentiels",
    },
  },
  {
    name: "Linux / Ubuntu",
    icon: "linux",
    category: "systems",
    color: "#e95420",
    note: { en: "System and command-line basics", fr: "Bases système et ligne de commande" },
  },
  {
    name: "Cisco · TCP/IP",
    icon: "cisco",
    category: "systems",
    color: "#049fd9",
    level: "basics",
    note: {
      en: "IP addressing and network troubleshooting",
      fr: "Adressage IP et dépannage réseau",
    },
  },
  {
    name: "VMware ESXi",
    icon: "vmware",
    category: "systems",
    color: "#607078",
    note: { en: "Virtualized environments", fr: "Environnements virtualisés" },
  },
  {
    name: "Proxmox",
    icon: "proxmox",
    category: "systems",
    color: "#e57000",
    note: {
      en: "Virtualization and lab environments",
      fr: "Virtualisation et environnements de lab",
    },
  },
  {
    name: "Hyper-V",
    icon: "windows",
    category: "systems",
    color: "#38bdf8",
    note: { en: "Virtual machine fundamentals", fr: "Bases des machines virtuelles" },
  },
  {
    name: "Docker",
    icon: "docker",
    category: "systems",
    color: "#2496ed",
    note: { en: "Containerization", fr: "Conteneurisation" },
  },
  {
    name: "DevOps",
    icon: "devops",
    category: "systems",
    color: "#a78bfa",
    note: {
      en: "Automation and delivery concepts",
      fr: "Concepts d'automatisation et de livraison",
    },
  },
  {
    name: "Cybersecurity",
    icon: "security",
    category: "systems",
    color: "#f43f5e",
    note: { en: "Security awareness", fr: "Sensibilisation à la sécurité" },
  },
  {
    name: "Git / GitHub",
    icon: "git",
    category: "development",
    color: "#f05032",
    note: { en: "Version control and collaboration", fr: "Gestion de versions et collaboration" },
  },
];

export const skillCategories: Record<SkillCategory, Record<Language, string>> = {
  development: { en: "Programming", fr: "Développement" },
  web: { en: "Web & interfaces", fr: "Web & interfaces" },
  data: { en: "Databases & modeling", fr: "Bases de données & modélisation" },
  systems: { en: "Systems & networks", fr: "Systèmes & réseaux" },
};

export interface ToolkitItem {
  name: string;
  icon: string;
  color: string;
}

export interface ToolkitGroup {
  title: Record<Language, string>;
  items: ToolkitItem[];
}

export const toolkitGroups: ToolkitGroup[] = [
  {
    title: { en: "Editor & assistants", fr: "Éditeur & assistants" },
    items: [
      { name: "VS Code", icon: "vscode", color: "#007acc" },
      { name: "GitHub Copilot", icon: "copilot", color: "#8b5cf6" },
      { name: "Claude Code", icon: "claude", color: "#d97757" },
      { name: "Cline", icon: "cline", color: "#38bdf8" },
      { name: "GitLens", icon: "git", color: "#f05032" },
    ],
  },
  {
    title: { en: "Design & prototyping", fr: "Design & prototypage" },
    items: [
      { name: "Figma", icon: "figma", color: "#f24e1e" },
      { name: "v0", icon: "v0", color: "#ffffff" },
    ],
  },
  {
    title: { en: "3D & motion", fr: "3D & animation" },
    items: [
      { name: "Three.js", icon: "three", color: "#ffffff" },
      { name: "React Three Fiber", icon: "react", color: "#61dafb" },
      { name: "Drei", icon: "layers", color: "#a78bfa" },
      { name: "GSAP", icon: "gsap", color: "#88ce02" },
      { name: "Motion", icon: "motion", color: "#bb4b96" },
      { name: "Lenis", icon: "scroll", color: "#38bdf8" },
    ],
  },
  {
    title: { en: "Quality & workflow", fr: "Qualité & workflow" },
    items: [
      { name: "Playwright", icon: "playwright", color: "#2ead33" },
      { name: "ESLint", icon: "eslint", color: "#4b32c3" },
      { name: "Prettier", icon: "prettier", color: "#f7b93e" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06b6d4" },
      { name: "Error Lens", icon: "error", color: "#f87171" },
      { name: "Path IntelliSense", icon: "path", color: "#38bdf8" },
    ],
  },
];

export interface PythonExperiment {
  name: string;
  blurb: Record<Language, string>;
  code: string;
  tag: string;
}

export const pythonExperiments: PythonExperiment[] = [
  {
    name: "async_fetch.py",
    blurb: {
      en: "Fetch multiple HTTP resources concurrently with asyncio and aiohttp.",
      fr: "Récupérer plusieurs ressources HTTP en parallèle avec asyncio et aiohttp.",
    },
    tag: "asyncio",
    code: `import asyncio, aiohttp

async def fetch(session, url):
    async with session.get(url) as r:
        return await r.text()

async def main(urls):
    async with aiohttp.ClientSession() as s:
        results = await asyncio.gather(
            *[fetch(s, u) for u in urls]
        )
        return dict(zip(urls, results))

asyncio.run(main([
    "https://api.example.com/a",
    "https://api.example.com/b",
]))`,
  },
  {
    name: "fibonacci.py",
    blurb: {
      en: "Explore recursion and memoization with the Fibonacci sequence.",
      fr: "Explorer la récursivité et la mémoïsation avec la suite de Fibonacci.",
    },
    tag: "algorithms",
    code: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(15)])`,
  },
  {
    name: "dataclass_model.py",
    blurb: {
      en: "Model structured data with type hints and validation.",
      fr: "Modéliser des données structurées avec annotations et validation.",
    },
    tag: "OOP",
    code: `from dataclasses import dataclass

@dataclass
class Device:
    name: str
    serial: str
    status: str = "available"

    def __post_init__(self):
        if not self.serial.startswith("SN-"):
            raise ValueError("serial must start with SN-")

d = Device("ThinkPad", "SN-9001")
print(d)`,
  },
];

export interface Interest {
  label: string;
  blurb: string;
  icon: "Layers" | "Server" | "Boxes" | "Database" | "BrainCircuit";
}

export const interests: Interest[] = [
  {
    label: "Python Development",
    blurb: "Learning by building useful applications.",
    icon: "Layers",
  },
  {
    label: "Systems & Networks",
    blurb: "Administration, infrastructure and troubleshooting.",
    icon: "Server",
  },
  {
    label: "Virtualization",
    blurb: "Building and exploring virtual lab environments.",
    icon: "Boxes",
  },
  {
    label: "Database Design",
    blurb: "Modeling, organizing and connecting data.",
    icon: "Database",
  },
];

export const interestCatalog: Record<Language, Interest[]> = {
  en: interests,
  fr: [
    {
      label: "Développement Python",
      blurb: "Apprendre en créant des applications utiles.",
      icon: "Layers",
    },
    {
      label: "Systèmes & réseaux",
      blurb: "Administration, infrastructure et dépannage.",
      icon: "Server",
    },
    {
      label: "Virtualisation",
      blurb: "Créer et explorer des environnements de lab.",
      icon: "Boxes",
    },
    {
      label: "Conception de bases de données",
      blurb: "Modéliser, organiser et relier les données.",
      icon: "Database",
    },
  ],
};

export const profileByLanguage = {
  en: {
    name: "Jérémy Juvsen Lombi",
    role: "Computer science student · Python",
    intro:
      "I’m a computer science student focused on application development, databases, and systems and network administration. Python is my main programming language; I enjoy learning by building, documenting, and solving practical technical problems.",
    availability: "Year 2 · Analysis & Programming",
  },
  fr: {
    name: "Jérémy Juvsen Lombi",
    role: "Étudiant en informatique · Python",
    intro:
      "Étudiant en informatique, je m'intéresse au développement d'applications, aux bases de données et à l'administration systèmes et réseaux. Python est mon langage de programmation principal. J'aime apprendre en concevant, en documentant et en résolvant des problèmes techniques concrets.",
    availability: "Licence 2 · Analyse & programmation",
  },
} as const;

export const profile = profileByLanguage.en;

export interface FocusArea {
  title: string;
  description: string;
  metric: string;
  icon: "Compass" | "Layers" | "Sparkles" | "Server" | "Database";
}

export const focusAreasByLanguage: Record<Language, FocusArea[]> = {
  en: [
    {
      title: "Python development",
      description:
        "My main programming language for learning, automation and application projects.",
      metric: "01",
      icon: "Layers",
    },
    {
      title: "Systems & networks",
      description:
        "Building practical foundations in Windows Server, Linux, networking and virtualization.",
      metric: "02",
      icon: "Server",
    },
    {
      title: "Data & documentation",
      description: "Connecting applications to databases and communicating technical work clearly.",
      metric: "03",
      icon: "Database",
    },
  ],
  fr: [
    {
      title: "Développement Python",
      description:
        "Mon langage principal pour apprendre, automatiser et concevoir des applications.",
      metric: "01",
      icon: "Layers",
    },
    {
      title: "Systèmes & réseaux",
      description:
        "Développer des bases concrètes en Windows Server, Linux, réseau et virtualisation.",
      metric: "02",
      icon: "Server",
    },
    {
      title: "Données & documentation",
      description:
        "Relier des applications aux bases de données et documenter clairement le travail technique.",
      metric: "03",
      icon: "Database",
    },
  ],
};

export const focusAreas = focusAreasByLanguage.en;

export const languages = [
  { name: "French", code: "FR", proficiency: "Fluent" },
  { name: "English", code: "EN", proficiency: "Academic" },
] as const;

export interface TechGroupItem {
  name: string;
  color: string;
  kind: "brand" | "generic";
}

export interface TechGroup {
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: TechGroupItem[];
}

export const technicalExpertiseGroups: TechGroup[] = [
  {
    title: { en: "Programming Languages", fr: "Langages de programmation" },
    description: {
      en: "The foundations I use to reason, build, and structure software solutions.",
      fr: "Les fondations que j'utilise pour concevoir, développer et structurer des solutions logicielles.",
    },
    items: [
      { name: "Python", color: "#ffd43b", kind: "brand" },
      { name: "JavaScript", color: "#f7df1e", kind: "brand" },
      { name: "Java", color: "#ed6c30", kind: "brand" },
      { name: "C#", color: "#9b4f96", kind: "brand" },
      { name: "PHP", color: "#777bb4", kind: "brand" },
      { name: "SQL", color: "#38bdf8", kind: "brand" },
    ],
  },
  {
    title: { en: "Frontend Development", fr: "Développement frontend" },
    description: {
      en: "Interfaces, interaction, and web experiences designed to be clear and thoughtful.",
      fr: "Interfaces, interaction et expériences web conçues pour être claires et réfléchies.",
    },
    items: [
      { name: "HTML", color: "#e34f26", kind: "brand" },
      { name: "CSS", color: "#1572b6", kind: "brand" },
      { name: "JavaScript", color: "#f7df1e", kind: "brand" },
      { name: "React", color: "#61dafb", kind: "brand" },
      { name: "TypeScript", color: "#3178c6", kind: "brand" },
    ],
  },
  {
    title: { en: "Backend & Software Engineering", fr: "Backend & ingénierie logicielle" },
    description: {
      en: "Application logic, architecture, and maintainable software patterns.",
      fr: "Logique applicative, architecture et patterns de conception maintenables.",
    },
    items: [
      { name: "Python", color: "#ffd43b", kind: "brand" },
      { name: "Java", color: "#ed6c30", kind: "brand" },
      { name: "C#", color: "#9b4f96", kind: "brand" },
      { name: "PHP", color: "#777bb4", kind: "brand" },
      { name: "API Development", color: "#38bdf8", kind: "generic" },
      { name: "OOP", color: "#a78bfa", kind: "generic" },
      { name: "MVC", color: "#22d3ee", kind: "generic" },
      { name: "Git", color: "#f05032", kind: "brand" },
      { name: "GitHub", color: "#ffffff", kind: "brand" },
    ],
  },
  {
    title: { en: "Database Engineering", fr: "Ingénierie des bases de données" },
    description: {
      en: "Modeling, organization, and data flows around relational systems.",
      fr: "Modélisation, organisation et flux de données autour des systèmes relationnels.",
    },
    items: [
      { name: "MySQL", color: "#4479a1", kind: "brand" },
      { name: "Oracle", color: "#f80000", kind: "brand" },
      { name: "SQL Server", color: "#cc2927", kind: "brand" },
      { name: "HFSQL", color: "#38bdf8", kind: "generic" },
      { name: "Database Design", color: "#a78bfa", kind: "generic" },
      { name: "SQL Queries", color: "#22d3ee", kind: "generic" },
    ],
  },
  {
    title: { en: "Systems & Networking", fr: "Systèmes & réseaux" },
    description: {
      en: "Practical foundations in operating systems, virtualization, and network environments.",
      fr: "Des bases concrètes en systèmes d'exploitation, virtualisation et environnements réseau.",
    },
    items: [
      { name: "Windows", color: "#00a4ef", kind: "brand" },
      { name: "Linux", color: "#e95420", kind: "brand" },
      { name: "Windows Server", color: "#00a4ef", kind: "brand" },
      { name: "Virtualization", color: "#38bdf8", kind: "generic" },
      { name: "Hyper-V", color: "#00a4ef", kind: "brand" },
      { name: "VMware", color: "#607078", kind: "brand" },
      { name: "Proxmox", color: "#e57000", kind: "brand" },
      { name: "Cisco Networking", color: "#049fd9", kind: "brand" },
    ],
  },
  {
    title: { en: "Creative & Modern Technologies", fr: "Technologies créatives & modernes" },
    description: {
      en: "Tools and concepts used to explore immersive interfaces and modern digital experiences.",
      fr: "Outils et concepts utilisés pour explorer des interfaces immersives et des expériences numériques modernes.",
    },
    items: [
      { name: "Three.js", color: "#ffffff", kind: "brand" },
      { name: "React Three Fiber", color: "#61dafb", kind: "brand" },
      { name: "GSAP", color: "#88ce02", kind: "brand" },
      { name: "Motion", color: "#bb4b96", kind: "brand" },
      { name: "AI", color: "#8b5cf6", kind: "generic" },
      { name: "Modern Web", color: "#22d3ee", kind: "generic" },
    ],
  },
];

export interface StrengthCard {
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon:
    | "Sparkles"
    | "Code2"
    | "BrainCircuit"
    | "RefreshCcw"
    | "Search"
    | "Lightbulb"
    | "Compass"
    | "Wand2";
}

export const strengthsByLanguage: Record<Language, StrengthCard[]> = {
  en: [
    {
      title: { en: "Problem Solving", fr: "Résolution de problèmes" },
      description: {
        en: "I break complex issues into smaller, actionable parts and look for practical, durable solutions.",
        fr: "Je découpe les problèmes complexes en éléments concrets et recherche des solutions pratiques et durables.",
      },
      icon: "Search",
    },
    {
      title: { en: "Technical Versatility", fr: "Polyvalence technique" },
      description: {
        en: "I enjoy exploring software, systems, databases, infrastructure, and digital experiences as connected layers.",
        fr: "J'aime explorer le logiciel, les systèmes, les bases de données, l'infrastructure et les expériences numériques comme des couches connectées.",
      },
      icon: "Compass",
    },
    {
      title: { en: "Software Engineering Mindset", fr: "Esprit d'ingénierie logicielle" },
      description: {
        en: "I value structure, maintainability, clarity, and quality in the way solutions are designed and built.",
        fr: "J'accorde de l'importance à la structure, à la maintenabilité, à la clarté et à la qualité dans la manière de concevoir et de construire des solutions.",
      },
      icon: "Code2",
    },
    {
      title: { en: "Continuous Learning", fr: "Apprentissage continu" },
      description: {
        en: "I keep improving by experimenting, reading, testing, and turning each project into a new learning step.",
        fr: "Je progresse en expérimentant, en apprenant et en transformant chaque projet en une nouvelle étape d'apprentissage.",
      },
      icon: "RefreshCcw",
    },
    {
      title: { en: "Analytical Thinking", fr: "Pensée analytique" },
      description: {
        en: "I like turning uncertainty into structured questions, patterns, and concrete actions.",
        fr: "J'aime transformer l'incertitude en questions structurées, en schémas clairs et en actions concrètes.",
      },
      icon: "BrainCircuit",
    },
    {
      title: { en: "Creativity & Innovation", fr: "Créativité & innovation" },
      description: {
        en: "I look for original approaches to build digital experiences that are useful and memorable.",
        fr: "Je cherche des approches originales pour créer des expériences numériques utiles et mémorables.",
      },
      icon: "Lightbulb",
    },
    {
      title: { en: "Technical Curiosity", fr: "Curiosité technique" },
      description: {
        en: "I’m interested in AI, modern software architecture, digital experiences, and emerging technologies.",
        fr: "Je m'intéresse à l'IA, à l'architecture logicielle moderne, aux expériences numériques et aux technologies émergentes.",
      },
      icon: "Sparkles",
    },
    {
      title: { en: "Adaptability", fr: "Adaptabilité" },
      description: {
        en: "I learn quickly in new environments and adapt my methods to the needs of each project.",
        fr: "J'apprends vite dans de nouveaux environnements et j'adapte mes méthodes aux besoins de chaque projet.",
      },
      icon: "Wand2",
    },
  ],
  fr: [
    {
      title: { en: "Problem Solving", fr: "Résolution de problèmes" },
      description: {
        en: "I break complex issues into smaller, actionable parts and look for practical, durable solutions.",
        fr: "Je découpe les problèmes complexes en éléments concrets et recherche des solutions pratiques et durables.",
      },
      icon: "Search",
    },
    {
      title: { en: "Technical Versatility", fr: "Polyvalence technique" },
      description: {
        en: "I enjoy exploring software, systems, databases, infrastructure, and digital experiences as connected layers.",
        fr: "J'aime explorer le logiciel, les systèmes, les bases de données, l'infrastructure et les expériences numériques comme des couches connectées.",
      },
      icon: "Compass",
    },
    {
      title: { en: "Software Engineering Mindset", fr: "Esprit d'ingénierie logicielle" },
      description: {
        en: "I value structure, maintainability, clarity, and quality in the way solutions are designed and built.",
        fr: "J'accorde de l'importance à la structure, à la maintenabilité, à la clarté et à la qualité dans la manière de concevoir et de construire des solutions.",
      },
      icon: "Code2",
    },
    {
      title: { en: "Continuous Learning", fr: "Apprentissage continu" },
      description: {
        en: "I keep improving by experimenting, reading, testing, and turning each project into a new learning step.",
        fr: "Je progresse en expérimentant, en apprenant et en transformant chaque projet en une nouvelle étape d'apprentissage.",
      },
      icon: "RefreshCcw",
    },
    {
      title: { en: "Analytical Thinking", fr: "Pensée analytique" },
      description: {
        en: "I like turning uncertainty into structured questions, patterns, and concrete actions.",
        fr: "J'aime transformer l'incertitude en questions structurées, en schémas clairs et en actions concrètes.",
      },
      icon: "BrainCircuit",
    },
    {
      title: { en: "Creativity & Innovation", fr: "Créativité & innovation" },
      description: {
        en: "I look for original approaches to build digital experiences that are useful and memorable.",
        fr: "Je cherche des approches originales pour créer des expériences numériques utiles et mémorables.",
      },
      icon: "Lightbulb",
    },
    {
      title: { en: "Technical Curiosity", fr: "Curiosité technique" },
      description: {
        en: "I’m interested in AI, modern software architecture, digital experiences, and emerging technologies.",
        fr: "Je m'intéresse à l'IA, à l'architecture logicielle moderne, aux expériences numériques et aux technologies émergentes.",
      },
      icon: "Sparkles",
    },
    {
      title: { en: "Adaptability", fr: "Adaptabilité" },
      description: {
        en: "I learn quickly in new environments and adapt my methods to the needs of each project.",
        fr: "J'apprends vite dans de nouveaux environnements et j'adapte mes méthodes aux besoins de chaque projet.",
      },
      icon: "Wand2",
    },
  ],
};

export interface JourneyStep {
  year: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  outcome: Record<Language, string>;
}

export const journeyByLanguage: Record<Language, JourneyStep[]> = {
  en: [
    {
      year: "2023",
      title: { en: "Computer science training", fr: "Formation informatique" },
      description: {
        en: "I began a structured path in computer science, focusing on the foundations of development, systems, and digital problem solving.",
        fr: "J'ai commencé un parcours structuré en informatique, en me concentrant sur les bases du développement, des systèmes et de la résolution de problèmes numériques.",
      },
      outcome: {
        en: "A solid base in programming and understanding technical ecosystems.",
        fr: "Une base solide en programmation et en compréhension des écosystèmes techniques.",
      },
    },
    {
      year: "2024",
      title: { en: "Software orientation", fr: "Orientation logiciel" },
      description: {
        en: "My studies shifted toward software engineering, with stronger attention to architecture, application design, and maintainable code.",
        fr: "Mes études se sont orientées vers le génie logiciel, avec une attention plus forte portée à l'architecture, au design applicatif et au code maintenable.",
      },
      outcome: {
        en: "A clearer direction toward building software with structure and intent.",
        fr: "Une orientation plus nette vers la construction de logiciels structurés et intentionnels.",
      },
    },
    {
      year: "2024 — 2025",
      title: { en: "Systems, networking & data", fr: "Systèmes, réseaux & données" },
      description: {
        en: "I deepened my understanding of databases, virtualization, operating systems, network fundamentals, and technical environments.",
        fr: "J'ai approfondi ma compréhension des bases de données, de la virtualisation, des systèmes d'exploitation, des fondamentaux réseau et des environnements techniques.",
      },
      outcome: {
        en: "Better insight into how digital systems work together in real environments.",
        fr: "Une meilleure compréhension du fonctionnement conjoint des systèmes numériques dans des environnements réels.",
      },
    },
    {
      year: "Present",
      title: { en: "Building personal projects", fr: "Construction de projets personnels" },
      description: {
        en: "I’m turning theory into hands-on work by building interactive projects, digital experiments, and learning-focused applications.",
        fr: "Je transforme la théorie en travail concret en créant des projets interactifs, des expérimentations numériques et des applications orientées apprentissage.",
      },
      outcome: {
        en: "A portfolio grounded in real exploration and practical problem solving.",
        fr: "Un portfolio fondé sur l'exploration concrète et la résolution de problèmes pratiques.",
      },
    },
  ],
  fr: [
    {
      year: "2023",
      title: { en: "Computer science training", fr: "Formation informatique" },
      description: {
        en: "I began a structured path in computer science, focusing on the foundations of development, systems, and digital problem solving.",
        fr: "J'ai commencé un parcours structuré en informatique, en me concentrant sur les bases du développement, des systèmes et de la résolution de problèmes numériques.",
      },
      outcome: {
        en: "A solid base in programming and understanding technical ecosystems.",
        fr: "Une base solide en programmation et en compréhension des écosystèmes techniques.",
      },
    },
    {
      year: "2024",
      title: { en: "Software orientation", fr: "Orientation logiciel" },
      description: {
        en: "My studies shifted toward software engineering, with stronger attention to architecture, application design, and maintainable code.",
        fr: "Mes études se sont orientées vers le génie logiciel, avec une attention plus forte portée à l'architecture, au design applicatif et au code maintenable.",
      },
      outcome: {
        en: "A clearer direction toward building software with structure and intent.",
        fr: "Une orientation plus nette vers la construction de logiciels structurés et intentionnels.",
      },
    },
    {
      year: "2024 — 2025",
      title: { en: "Systems, networking & data", fr: "Systèmes, réseaux & données" },
      description: {
        en: "I deepened my understanding of databases, virtualization, operating systems, network fundamentals, and technical environments.",
        fr: "J'ai approfondi ma compréhension des bases de données, de la virtualisation, des systèmes d'exploitation, des fondamentaux réseau et des environnements techniques.",
      },
      outcome: {
        en: "Better insight into how digital systems work together in real environments.",
        fr: "Une meilleure compréhension du fonctionnement conjoint des systèmes numériques dans des environnements réels.",
      },
    },
    {
      year: "Aujourd'hui",
      title: { en: "Building personal projects", fr: "Construction de projets personnels" },
      description: {
        en: "I’m turning theory into hands-on work by building interactive projects, digital experiments, and learning-focused applications.",
        fr: "Je transforme la théorie en travail concret en créant des projets interactifs, des expérimentations numériques et des applications orientées apprentissage.",
      },
      outcome: {
        en: "A portfolio grounded in real exploration and practical problem solving.",
        fr: "Un portfolio fondé sur l'exploration concrète et la résolution de problèmes pratiques.",
      },
    },
  ],
};
