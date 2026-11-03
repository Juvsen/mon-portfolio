
import { useEffect, useState } from "react";

export interface SceneSettings {
  isMobile: boolean;
  reduceMotion: boolean;
  isCoarse: boolean;
}

export function useSceneSettings(): SceneSettings {
  const [settings, setSettings] = useState<SceneSettings>(() => ({
    isMobile: false,
    reduceMotion: false,
    isCoarse: false,
  }));

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const update = () =>
      setSettings({
        isMobile: window.innerWidth < 768,
        reduceMotion: reduce,
        isCoarse: coarse,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return settings;
}
