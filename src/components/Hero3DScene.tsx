"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Octahedron, OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Floating geometric shapes with beautiful materials
function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Main central sphere */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>

      {/* Orbiting cubes */}
      {Array.from({ length: 8 }, (_, i) => (
        <Float key={i} speed={2 + i * 0.2} rotationIntensity={1} floatIntensity={0.5}>
          <Box
            args={[0.3, 0.3, 0.3]}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 4,
              Math.sin((i / 8) * Math.PI * 2) * 2,
              Math.sin((i / 8) * Math.PI * 4) * 1.5,
            ]}
          >
            <meshStandardMaterial
              color={`hsl(${(i / 8) * 360 + 180}, 70%, 60%)`}
              emissive={`hsl(${(i / 8) * 360 + 180}, 70%, 30%)`}
              emissiveIntensity={0.2}
              roughness={0.3}
              metalness={0.7}
            />
          </Box>
        </Float>
      ))}

      {/* Floating octahedrons */}
      {Array.from({ length: 6 }, (_, i) => (
        <Float key={`oct-${i}`} speed={1.8 + i * 0.3} rotationIntensity={0.8} floatIntensity={1.2}>
          <Octahedron
            args={[0.5]}
            position={[
              Math.cos((i / 6) * Math.PI * 2 + Math.PI) * 3,
              Math.sin((i / 6) * Math.PI * 2 + Math.PI) * 1.5,
              Math.cos((i / 6) * Math.PI * 3) * 2,
            ]}
          >
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.9}
              transparent
              opacity={0.8}
            />
          </Octahedron>
        </Float>
      ))}
    </group>
  );
}

// Animated particle system
function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Colors
      const color = new THREE.Color();
      color.setHSL(Math.random(), 0.7, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      
      // Animate particle positions
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Rotating rings
function AnimatedRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1.current) {
      ring1.current.rotation.x = state.clock.elapsedTime * 0.3;
      ring1.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.y = state.clock.elapsedTime * 0.4;
      ring2.current.rotation.x = -state.clock.elapsedTime * 0.1;
    }
    if (ring3.current) {
      ring3.current.rotation.z = state.clock.elapsedTime * 0.25;
      ring3.current.rotation.y = -state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
      
      <mesh ref={ring2}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
      
      <mesh ref={ring3}>
        <torusGeometry args={[3.5, 0.12, 16, 100]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.25}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </group>
  );
}

// Main 3D Scene Component
export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
          castShadow
        />

        {/* 3D Elements */}
        <FloatingGeometry />
        <ParticleField />
        <AnimatedRings />
        
        {/* Background stars */}
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0.5}
          fade
          speed={0.5}
        />

        {/* Camera controls */}
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
