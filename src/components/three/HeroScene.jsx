import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import FloatingShapes from "./FloatingShapes";

function Rig() {
  const group = useRef(null);
  useFrame(() => {
    if (!group.current) return;
    const mx = parseFloat(
      getComputedStyle(document.body).getPropertyValue("--mx") || "0.5"
    );
    const my = parseFloat(
      getComputedStyle(document.body).getPropertyValue("--my") || "0.5"
    );
    const targetX = (mx - 0.5) * 1.2;
    const targetY = -(my - 0.5) * 0.8;
    group.current.rotation.y += (targetX - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (targetY - group.current.rotation.x) * 0.03;
  });

  return (
    <group ref={group}>
      <ParticleField />
      <FloatingShapes />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#60a5fa" />
      <pointLight position={[-5, -3, -2]} intensity={30} color="#c084fc" />
      <Suspense fallback={null}>
        <Rig />
      </Suspense>
    </Canvas>
  );
}
