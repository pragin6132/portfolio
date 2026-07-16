import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingOrb() {
  const orbRef = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer; // mouse coordinates (-1 to 1)
    const time = state.clock.getElapsedTime();
    
    if (orbRef.current) {
      // Smooth interactive movement reacting to mouse
      orbRef.current.position.x = THREE.MathUtils.lerp(orbRef.current.position.x, x * 0.7, 0.08);
      orbRef.current.position.y = THREE.MathUtils.lerp(
        orbRef.current.position.y, 
        y * 0.7 + Math.sin(time * 1.2) * 0.15, 
        0.08
      );
      
      // Steady rotation
      orbRef.current.rotation.x = time * 0.12;
      orbRef.current.rotation.y = time * 0.18;
    }
  });

  return (
    <mesh ref={orbRef}>
      <sphereGeometry args={[1.6, 64, 64]} />
      <MeshDistortMaterial
        color="#2563EB"
        emissive="#3B82F6"
        emissiveIntensity={0.6}
        roughness={0.15}
        metalness={0.95}
        distort={0.38} // distorts the mesh shapes
        speed={2.2}     // speed of deformation
      />
    </mesh>
  );
}
