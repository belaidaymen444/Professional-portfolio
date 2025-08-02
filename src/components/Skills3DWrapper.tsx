"use client";

import dynamic from 'next/dynamic';

// Create a separate component file for Skills3D and import it
const Skills3D = dynamic(() => import('./Skills3DComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-foreground/60">Loading 3D Technology Showcase...</p>
      </div>
    </div>
  ),
});

export default Skills3D;
