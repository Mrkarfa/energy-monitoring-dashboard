import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function BuildingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Main Building */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.5, 2]} />
        <meshBasicMaterial
          color="#2D4A3E"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 1.3, 1.8]} />
        <meshBasicMaterial color="#4A7A5F" transparent opacity={0.2} />
      </mesh>

      {/* Edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3, 1.5, 2)]} />
        <lineBasicMaterial color="#4A7A5F" />
      </lineSegments>
    </group>
  );
}

export function BuildingModel() {
  return (
    <div className="w-full h-[200px]">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <BuildingMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
