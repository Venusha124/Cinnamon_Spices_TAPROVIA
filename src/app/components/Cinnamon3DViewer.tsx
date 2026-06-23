"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function CinnamonQuill() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load a texture to map onto our cylinder (cinnamon stick)
  // We use our artisan image as a stylized texture map
  const texture = useTexture("/images/cinnamon_artisan.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 1);

  // Slowly rotate the quill automatically
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 4, 0, 0]} castShadow>
      {/* 
        A cylinder to represent the cinnamon quill. 
        Args: [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded]
      */}
      <cylinderGeometry args={[0.3, 0.35, 4, 32, 1, true]} />
      <meshStandardMaterial 
        map={texture} 
        roughness={0.9} 
        metalness={0.1}
        side={THREE.DoubleSide} 
        color="#d2b48c" // Add a golden-brown tint
      />
      
      {/* Inner layer of the quill to make it look curled */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 4, 32, 1, true, 0, Math.PI * 1.5]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.9} 
          side={THREE.DoubleSide} 
          color="#a0522d" // Darker inside
        />
      </mesh>
    </mesh>
  );
}

export default function Cinnamon3DViewer() {
  return (
    <div style={{ width: "100%", height: "60vh", minHeight: "400px", position: "relative", cursor: "grab" }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ffd700" />
        
        <group position={[0, 0, 0]}>
          <CinnamonQuill />
        </group>

        {/* Soft shadow below the quill */}
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4} 
        />
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.5)",
        fontSize: "0.8rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        pointerEvents: "none",
        fontFamily: "var(--font-outfit)"
      }}>
        Drag to Rotate 3D Model
      </div>
    </div>
  );
}
