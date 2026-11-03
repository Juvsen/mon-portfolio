import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { useSceneSettings } from "@/hooks/useSceneSettings";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { CosmicBackground } from "@/three/CosmicBackground";

import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

import { Entrance } from "@/sections/Entrance";
import { About } from "@/sections/About";
import { Strengths } from "@/sections/Strengths";
import { TechnicalExpertise } from "@/sections/TechnicalExpertise";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Universe } from "@/sections/Universe";
import { Journey } from "@/sections/Journey";
import { Lab } from "@/sections/Lab";
import { Connect } from "@/sections/Connect";

const defaultLanguage = "fr";

function App() {
  const settings = useSceneSettings();
  const scrollProgress = useScrollProgress();
  const [loaded, setLoaded] = useState(() => document.visibilityState !== "visible");
  const [language, setLanguage] = useState(defaultLanguage);
  const [webGlAvailable, setWebGlAvailable] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    setWebGlAvailable(Boolean(context));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const pageTitle =
      language === "fr"
        ? "Jérémy Juvsen Lombi — Portfolio Python & informatique"
        : "Jérémy Juvsen Lombi — Python & Computer Science Portfolio";
    const pageDescription =
      language === "fr"
        ? "Portfolio de Jérémy Juvsen Lombi, étudiant en informatique : projets Python, développement d'applications, bases de données et administration systèmes et réseaux."
        : "Portfolio of Jérémy Juvsen Lombi, a computer science student focused on Python, application development, databases, and systems and network administration.";

    document.title = pageTitle;
    document
      .querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')
      .forEach((meta) => {
        meta.setAttribute("content", pageTitle);
      });
    document
      .querySelectorAll(
        'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
      )
      .forEach((meta) => {
        meta.setAttribute("content", pageDescription);
      });
  }, [language]);

  useEffect(() => {
    const showPortfolioWhenHidden = () => {
      if (document.visibilityState === "hidden") setLoaded(true);
    };
    document.addEventListener("visibilitychange", showPortfolioWhenHidden);
    return () => document.removeEventListener("visibilitychange", showPortfolioWhenHidden);
  }, []);

  const handleExplore = () => {
    const projects = document.getElementById("universe");
    if (projects) projects.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const footerBrand =
    language === "fr" ? "JUVSEN — développeur logiciel" : "JUVSEN — software developer";
  const footerTagline =
    language === "fr"
      ? "Ingénierie · Créativité · Solutions digitales"
      : "Engineering · Creativity · Digital solutions";

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} language={language} />}

      <CustomCursor disabled={settings.isCoarse || settings.reduceMotion || !webGlAvailable} />
      <ScrollProgress />
      <Navbar language={language} setLanguage={setLanguage} />

      {!webGlAvailable && (
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,#0c1f36_0%,#03040c_68%)]"
          aria-hidden="true"
        />
      )}

      {/* Persistent cosmic background behind all content */}
      <div className="fixed inset-0 -z-10">
        {webGlAvailable ? (
          <Canvas
            camera={{ position: [0, 0.5, 6], fov: 55 }}
            dpr={[1, settings.isMobile ? 1.2 : 1.6]}
            gl={{ antialias: !settings.isMobile, alpha: true, powerPreference: "low-power" }}
          >
            <Suspense fallback={null}>
              <CosmicBackground settings={settings} scrollProgress={scrollProgress} />
            </Suspense>
          </Canvas>
        ) : null}
        {/* deep-space base gradient for fallback legibility */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#060b1e_0%,#03040c_60%)]" />
      </div>

      <main
        className={loaded ? "opacity-100" : "opacity-0"}
        style={{ transition: "opacity 0.8s ease" }}
      >
        <Entrance
          settings={settings}
          onExplore={handleExplore}
          onLanguageChange={setLanguage}
          language={language}
        />
        <About language={language} />
        <Strengths language={language} />
        <TechnicalExpertise language={language} />
        <FeaturedProjects language={language} />
        <Universe settings={settings} language={language} />
        <Journey language={language} />
        <Lab language={language} />
        <Connect language={language} />
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="container-px mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-dim">
            {footerBrand}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-dim/60">
            {footerTagline}
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
