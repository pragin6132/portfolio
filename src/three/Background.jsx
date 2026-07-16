import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#050816] overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#2563EB" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3B82F6" />
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
