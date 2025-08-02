"use client";

import dynamic from 'next/dynamic';

// Dynamically import Scene3D with SSR disabled
const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-20 h-20 bg-primary/20 rounded-full animate-bounce"></div>
      </div>
    </div>
  ),
});

export default Scene3D;
