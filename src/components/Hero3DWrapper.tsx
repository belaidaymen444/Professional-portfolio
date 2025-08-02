"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the 3D scene with no SSR
const Hero3DScene = dynamic(() => import('./Hero3DScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-cyan-500/10">
      {/* Loading animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Fallback animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  ),
});

export default function Hero3DWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-cyan-500/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    );
  }

  return <Hero3DScene />;
}
