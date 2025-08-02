"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

// React Logo 3D Component
function ReactLogo3D({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* React Atom Structure */}
        <group>
          {/* Center Nucleus */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
          </mesh>
          
          {/* Electron Orbits */}
          {[0, 60, 120].map((rotation, index) => (
            <group key={index} rotation={[0, 0, (rotation * Math.PI) / 180]}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.4, 0.02, 8, 32]} />
                <meshStandardMaterial 
                  color="#61DAFB" 
                  transparent 
                  opacity={0.7}
                  emissive="#61DAFB" 
                  emissiveIntensity={0.1}
                />
              </mesh>
              
              {/* Electron */}
              <mesh position={[0.4, 0, 0]}>
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
              </mesh>
            </group>
          ))}
        </group>
        
        {/* React Text */}
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.12}
          color="#61DAFB"
          anchorX="center"
          anchorY="middle"
        >
          React
        </Text>
      </group>
    </Float>
  );
}

// Node.js Logo 3D Component
function NodeLogo3D({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        {/* Node.js Hexagon Shape */}
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 6]} />
          <meshStandardMaterial 
            color="#339933" 
            emissive="#339933" 
            emissiveIntensity={0.1}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
        
        {/* Inner detail */}
        <mesh position={[0, 0, 0.06]}>
          <cylinderGeometry args={[0.25, 0.25, 0.02, 6]} />
          <meshStandardMaterial color="#83CD29" />
        </mesh>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.1}
          color="#339933"
          anchorX="center"
          anchorY="middle"
        >
          Node.js
        </Text>
      </group>
    </Float>
  );
}

// TypeScript Logo 3D Component
function TypeScriptLogo3D({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* TypeScript Square */}
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.1]} />
          <meshStandardMaterial 
            color="#3178C6" 
            emissive="#3178C6" 
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Rounded corners effect */}
        <mesh position={[0, 0, 0.051]}>
          <boxGeometry args={[0.55, 0.55, 0.02]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* TS Text on the cube */}
        <Text
          position={[0, 0, 0.07]}
          fontSize={0.25}
          color="#3178C6"
          anchorX="center"
          anchorY="middle"
        >
          TS
        </Text>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.1}
          color="#3178C6"
          anchorX="center"
          anchorY="middle"
        >
          TypeScript
        </Text>
      </group>
    </Float>
  );
}

// Three.js Logo 3D Component
function ThreeLogo3D({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Three.js Wireframe Cube */}
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial 
            color="#ffffff" 
            wireframe 
            transparent 
            opacity={0.8}
          />
        </mesh>
        
        {/* Inner glowing core */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#ff6b6b" 
            emissive="#ff6b6b" 
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Three.js
        </Text>
      </group>
    </Float>
  );
}

// MongoDB Logo 3D Component
function MongoLogo3D({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={groupRef} position={position}>
        {/* MongoDB Leaf Shape */}
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color="#47A248" 
            emissive="#47A248" 
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Stem */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 0.3, 8]} />
          <meshStandardMaterial color="#47A248" />
        </mesh>
        
        {/* Side leaves */}
        <mesh position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial 
            color="#4DB33D" 
            transparent 
            opacity={0.8}
          />
        </mesh>
        
        <mesh position={[0.15, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial 
            color="#4DB33D" 
            transparent 
            opacity={0.8}
          />
        </mesh>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.1}
          color="#47A248"
          anchorX="center"
          anchorY="middle"
        >
          MongoDB
        </Text>
      </group>
    </Float>
  );
}

// Docker Logo 3D Component
function DockerLogo3D({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        {/* Docker Container Boxes */}
        <group>
          {/* Main container */}
          <mesh>
            <boxGeometry args={[0.6, 0.2, 0.4]} />
            <meshStandardMaterial 
              color="#2496ED" 
              emissive="#2496ED" 
              emissiveIntensity={0.1}
            />
          </mesh>
          
          {/* Stacked containers */}
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.4, 0.1, 0.3]} />
            <meshStandardMaterial color="#0DB7ED" />
          </mesh>
          
          <mesh position={[0, -0.15, 0]}>
            <boxGeometry args={[0.5, 0.1, 0.35]} />
            <meshStandardMaterial color="#2496ED" />
          </mesh>
          
          {/* Side containers */}
          <mesh position={[-0.35, 0, 0]}>
            <boxGeometry args={[0.1, 0.15, 0.3]} />
            <meshStandardMaterial color="#0DB7ED" />
          </mesh>
          
          <mesh position={[0.35, 0, 0]}>
            <boxGeometry args={[0.1, 0.15, 0.3]} />
            <meshStandardMaterial color="#0DB7ED" />
          </mesh>
        </group>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.1}
          color="#2496ED"
          anchorX="center"
          anchorY="middle"
        >
          Docker
        </Text>
      </group>
    </Float>
  );
}

export {
  ReactLogo3D,
  NodeLogo3D,
  TypeScriptLogo3D,
  ThreeLogo3D,
  MongoLogo3D,
  DockerLogo3D
};
