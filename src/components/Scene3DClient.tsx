"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// This ensures Three.js only loads on the client
const Scene3DInner = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-20 h-20 bg-primary/20 rounded-full animate-bounce"></div>
      </div>
    </div>
  ),
});

export default function Scene3DClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-20 h-20 bg-primary/20 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return <Scene3DInner />;
}
