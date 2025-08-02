"use client";

import dynamic from 'next/dynamic';

// Dynamically import the entire portfolio with no SSR to avoid Three.js issues
const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-20 h-20 bg-primary/20 rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold gradient-text mb-2">Loading Portfolio</h2>
        <p className="text-foreground/60">Preparing 3D experience...</p>
      </div>
    </div>
  ),
});

export default function HomePage() {
  return <Portfolio />;
}
