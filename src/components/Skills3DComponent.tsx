"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  ReactLogo3D,
  NodeLogo3D,
  TypeScriptLogo3D,
  ThreeLogo3D,
  MongoLogo3D,
  DockerLogo3D
} from './TechIcons3DWrapper';

export default function Skills3DComponent() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#ffffff"
        />

        {/* 3D Technology Icons */}
        <ReactLogo3D position={[-2.5, 1.2, 0]} />
        <NodeLogo3D position={[2.5, 1.2, 0]} />
        <TypeScriptLogo3D position={[0, 2.5, -1]} />
        <ThreeLogo3D position={[-1.5, -1.2, 1.5]} />
        <MongoLogo3D position={[1.5, -1.2, -1]} />
        <DockerLogo3D position={[0, -2.5, 0.5]} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
