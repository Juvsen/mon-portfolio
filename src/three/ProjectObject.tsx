import { useRef, useState, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Torus, Icosahedron, Octahedron } from "@react-three/drei";
import * as THREE from "three";

import type { SceneSettings } from "@/hooks/useSceneSettings";

interface ProjectObjectProps {
  geometry: "web" | "orb" | "crystal";
  from: string;
  to: string;
  settings: SceneSettings;
  children?: ReactNode;
}

/**
 * A single project's 3D representation. Each geometry type reads
 * differently — web (torus lattice), orb (distorted ico), crystal (octahedron) —
 * so the showcase reads as three distinct worlds, not identical cards.
 */
export function ProjectObject({ geometry, from, to, settings, children }: ProjectObjectProps) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const targetScale = useRef(1);

  const color = new THREE.Color(from);
  const emissive = new THREE.Color(to);

  useFrame((_, delta) => {
    if (!ref.current) return;
    targetScale.current = hovered ? 1.08 : 1;
    const s = THREE.MathUtils.lerp(ref.current.scale.x, targetScale.current, 0.1);
    ref.current.scale.setScalar(s);
    if (!settings.reduceMotion) {
      ref.current.rotation.y += delta * (hovered ? 0.45 : 0.14);
    }
  });

  const floatSpeed = settings.reduceMotion ? 0 : 1;

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "none";
      }}
    >
      <Float speed={floatSpeed} rotationIntensity={0.25} floatIntensity={0.5}>
        {geometry === "web" && (
          <group>
            <Torus args={[1.2, 0.02, 12, 80]} rotation={[Math.PI / 2.6, 0.3, 0]}>
              <meshBasicMaterial color={color} transparent opacity={0.7} />
            </Torus>
            <Torus args={[1.6, 0.012, 12, 80]} rotation={[Math.PI / 2.6, 0.3, 0]}>
              <meshBasicMaterial color={emissive} transparent opacity={0.4} />
            </Torus>
            <Torus args={[0.85, 0.018, 12, 64]} rotation={[Math.PI / 1.8, -0.4, 0.3]}>
              <meshBasicMaterial color={color} transparent opacity={0.5} />
            </Torus>
            <mesh>
              <sphereGeometry args={[0.12, 24, 24]} />
              <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.8} />
            </mesh>
          </group>
        )}

        {geometry === "orb" && (
          <Icosahedron args={[1.05, 6]}>
            <meshStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={0.5}
              roughness={0.05}
              metalness={0.85}
              wireframe
            />
          </Icosahedron>
        )}

        {geometry === "crystal" && (
          <group>
            <Octahedron args={[1.05, 0]}>
              <meshStandardMaterial
                color={color}
                emissive={emissive}
                emissiveIntensity={0.35}
                roughness={0.12}
                metalness={0.7}
                transparent
                opacity={0.85}
                flatShading
              />
            </Octahedron>
            <Octahedron args={[1.05, 0]} scale={1.04}>
              <meshBasicMaterial color={emissive} wireframe transparent opacity={0.3} />
            </Octahedron>
          </group>
        )}
      </Float>

      <pointLight position={[0, 0, 2]} intensity={hovered ? 3 : 1.6} color={color} distance={6} />
      {children}
    </group>
  );
}
