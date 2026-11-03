import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import { easing } from "maath";

import type { SceneSettings } from "@/hooks/useSceneSettings";

interface CosmicBackgroundProps {
  settings: SceneSettings;
  scrollProgress: { current: number };
}

/**
 * Persistent starfield + nebula layer that sits behind every section.
 * Camera drifts gently with the mouse for a parallax feel, and the
 * whole field tilts subtly as the user scrolls deeper into the universe.
 */
export function CosmicBackground({ settings, scrollProgress }: CosmicBackgroundProps) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector2(0, 0));
  const nebulaRef = useRef<THREE.Group>(null);

  const starCount = settings.isMobile ? 1800 : 4200;
  const nebulaOpacity = settings.isMobile ? 0.18 : 0.28;

  const nebulae = useMemo(() => {
    const colors = ["#1e3a8a", "#3730a3", "#0e7490", "#312e81", "#155e75"];
    return Array.from({ length: settings.isMobile ? 3 : 6 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 26,
        (Math.random() - 0.5) * 12,
        -8 - Math.random() * 10,
      ] as [number, number, number],
      scale: 6 + Math.random() * 7,
      color: colors[i % colors.length],
    }));
  }, [settings.isMobile]);

  useFrame((state, delta) => {
    if (settings.reduceMotion) return;
    const px = state.pointer.x * 0.4;
    const py = state.pointer.y * 0.3;
    target.current.set(px, py);

    easing.damp3(camera.position, [px, py + 0.5, 6], 0.4, delta);
    camera.lookAt(0, 0, 0);

    if (nebulaRef.current) {
      nebulaRef.current.rotation.z = -scrollProgress.current * 0.25;
      nebulaRef.current.position.y = scrollProgress.current * 1.5;
    }
  });

  return (
    <group>
      <Stars
        radius={60}
        depth={40}
        count={starCount}
        factor={settings.isMobile ? 2.4 : 3.6}
        saturation={0.4}
        fade
        speed={settings.reduceMotion ? 0 : 0.6}
      />

      <group ref={nebulaRef}>
        {nebulae.map((n, i) => (
          <mesh key={i} position={n.position}>
            <circleGeometry args={[n.scale, 48]} />
            <meshBasicMaterial
              color={n.color}
              transparent
              opacity={nebulaOpacity}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>

      {/* distant rim glow */}
      <mesh position={[0, 0, -22]}>
        <circleGeometry args={[9, 64]} />
        <meshBasicMaterial
          color="#0c1d4a"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
