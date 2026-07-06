import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";

export default function FloatingShapes() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.6}>
        <Sphere args={[1.15, 64, 64]} position={[2.6, 0.6, -1]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.35}
            speed={1.8}
            roughness={0.15}
            metalness={0.6}
            emissive="#1d4ed8"
            emissiveIntensity={0.35}
          />
        </Sphere>
      </Float>

      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={2.2}>
        <Torus args={[0.65, 0.22, 32, 100]} position={[-2.8, -0.8, -0.5]} rotation={[0.6, 0.4, 0]}>
          <MeshDistortMaterial
            color="#a855f7"
            distort={0.25}
            speed={1.2}
            roughness={0.2}
            metalness={0.5}
            emissive="#7e22ce"
            emissiveIntensity={0.3}
          />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere args={[0.4, 32, 32]} position={[-1.6, 1.6, 0.4]}>
          <MeshDistortMaterial
            color="#22d3ee"
            distort={0.4}
            speed={2.2}
            roughness={0.1}
            metalness={0.7}
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
    </>
  );
}
