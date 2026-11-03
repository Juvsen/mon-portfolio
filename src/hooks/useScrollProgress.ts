import { useEffect, useRef } from "react";

/**
 * Returns a ref-like object whose `.current` value tracks the page's
 * normalized scroll progress (0..1). Designed to be passed into R3F
 * useFrame loops without triggering React re-renders.
 */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
