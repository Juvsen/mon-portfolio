import { useEffect, useRef, useState } from "react";

interface CustomCursorProps {
  disabled: boolean;
}

/**
 * A two-part custom cursor: a small precise dot and a trailing ring that
 * snaps to a larger "hover" state over interactive elements. Disabled on
 * touch devices and when reduced motion is requested.
 */
export function CustomCursor({ disabled }: CustomCursorProps) {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (disabled) return;

    let raf = 0;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const ringPos = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    let mouse = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      dotPos.x = mouse.x;
      dotPos.y = mouse.y;
      if (hidden) setHidden(false);

      const target = e.target as HTMLElement;
      const interactive = !!target.closest(
        'a, button, [role="button"], input, textarea, [data-cursor="hover"]',
      );
      setHovering(interactive);
    };

    const onLeave = () => setHidden(true);
    const onDown = () => setHovering(true);
    const onUp = () => setHovering(false);

    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.x - 18}px, ${ringPos.y - 18}px, 0)`;
      dot.style.transform = `translate3d(${dotPos.x - 3}px, ${dotPos.y - 3}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [disabled, hidden]);

  if (disabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[90] h-9 w-9 rounded-full border transition-[width,height,opacity,border-color] duration-200 ${
          hovering ? "h-12 w-12 border-primary/70" : "border-primary/40"
        } ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{ mixBlendMode: "screen" }}
      />
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[91] h-1.5 w-1.5 rounded-full bg-primary ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );
}
