"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        args={[1, 100, 200]}
        scale={hovered ? 1.1 : 1}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingElements() {
  const count = 50;
  const meshes = useRef<THREE.InstancedMesh>(null);
  
  useFrame((state) => {
    if (meshes.current) {
      for (let i = 0; i < count; i++) {
        const time = state.clock.elapsedTime + i * 0.1;
        const x = Math.sin(time * 0.5) * 3;
        const y = Math.cos(time * 0.3) * 2;
        const z = Math.sin(time * 0.4) * 1;
        
        const matrix = new THREE.Matrix4();
        matrix.setPosition(x, y, z);
        matrix.multiply(new THREE.Matrix4().makeRotationY(time));
        meshes.current.setMatrixAt(i, matrix);
      }
      meshes.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshes} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
          color="#a855f7"
        />
        
        <AnimatedSphere />
        <FloatingElements />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
