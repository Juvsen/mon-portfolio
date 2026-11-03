import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Octahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

import type { SceneSettings } from "@/hooks/useSceneSettings";

interface HeroSceneProps {
  settings: SceneSettings;
}

/**
 * The hero centerpiece: a distorted glass icosahedron core ringed by
 * orbiting wireframe primitives. Reacts to the pointer for depth.
 */
export function HeroScene({ settings }: HeroSceneProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const orbit = useRef<THREE.Group>(null);
  const secondaryOrbit = useRef<THREE.Group>(null);

  const orbitSpeed = settings.reduceMotion ? 0 : 1;
  const floatActive = !settings.reduceMotion;
  const distort = settings.reduceMotion ? 0 : 0.35;

  useFrame((state, delta) => {
    if (coreRef.current && !settings.reduceMotion) {
      coreRef.current.rotation.y += delta * 0.18;
      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        state.pointer.y * 0.2,
        0.04,
      );
    }
    if (orbit.current) {
      orbit.current.rotation.z += delta * 0.12 * orbitSpeed;
      orbit.current.rotation.y += delta * 0.06 * orbitSpeed;
    }
    if (secondaryOrbit.current) {
      secondaryOrbit.current.rotation.x += delta * 0.08 * orbitSpeed;
      secondaryOrbit.current.rotation.z -= delta * 0.1 * orbitSpeed;
    }
  });

  return (
    <group>
      <Float speed={floatActive ? 1.2 : 0} rotationIntensity={0.3} floatIntensity={0.6}>
        <Icosahedron ref={coreRef} args={[1.35, 4]}>
          <MeshDistortMaterial
            color="#0a1a3a"
            emissive="#1e40af"
            emissiveIntensity={0.45}
            roughness={0.08}
            metalness={0.9}
            distort={distort}
            speed={settings.reduceMotion ? 0 : 1.6}
            transparent
            opacity={0.92}
          />
        </Icosahedron>
      </Float>

      <group ref={orbit}>
        <Float speed={floatActive ? 0.9 : 0} floatIntensity={0.45}>
          <Torus args={[2.8, 0.016, 16, 140]} rotation={[Math.PI / 2.4, 0, 0]}>
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.58} />
          </Torus>
        </Float>
        <Float speed={floatActive ? 1.1 : 0} floatIntensity={0.75}>
          <Torus args={[3.4, 0.01, 12, 100]} rotation={[Math.PI / 3.1, Math.PI / 7, 0]}>
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.36} />
          </Torus>
        </Float>
        <Octahedron args={[0.28, 0]} position={[2.8, 0.2, 0]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.7}
            wireframe
          />
        </Octahedron>
        <mesh position={[-2.8, 0.3, 0]}>
          <tetrahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#6366f1"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </group>

      <group ref={secondaryOrbit}>
        <mesh position={[0, 2.8, -0.8]}>
          <icosahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#7dd3fc" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0.4, -2.7, 0.4]}>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial color="#c4b5fd" emissive="#c4b5fd" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[-2.5, -1.5, -1]}>
          <dodecahedronGeometry args={[0.14, 0]} />
          <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={0.7} />
        </mesh>
      </group>

      <pointLight position={[0, 0, 2]} intensity={2.2} color="#38bdf8" distance={9} />
      <pointLight position={[3, 2, 4]} intensity={1.4} color="#818cf8" distance={12} />
      <pointLight position={[-3, -2, 2]} intensity={1} color="#22d3ee" distance={10} />
      <pointLight position={[0, 0, -4]} intensity={0.8} color="#f5c842" distance={12} />
    </group>
  );
}
