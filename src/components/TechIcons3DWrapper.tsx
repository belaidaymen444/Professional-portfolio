"use client";

import dynamic from 'next/dynamic';

// Dynamically import all 3D tech icons with SSR disabled
export const ReactLogo3D = dynamic(() => import('./TechIcons3D').then(mod => ({ default: mod.ReactLogo3D })), {
  ssr: false,
  loading: () => <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />,
});

export const NodeLogo3D = dynamic(() => import('./TechIcons3D').then(mod => ({ default: mod.NodeLogo3D })), {
  ssr: false,
  loading: () => <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />,
});

export const TypeScriptLogo3D = dynamic(() => import('./TechIcons3D').then(mod => ({ default: mod.TypeScriptLogo3D })), {
  ssr: false,
  loading: () => <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />,
});

export const ThreeLogo3D = dynamic(() => import('./TechIcons3D').then(mod => ({ default: mod.ThreeLogo3D })), {
  ssr: false,
  loading: () => <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />,
});

export const MongoLogo3D = dynamic(() => import('./TechIcons3D').then(mod => ({ default: mod.MongoLogo3D })), {
  ssr: false,
  loading: () => <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />,
});

export const DockerLogo3D = dynamic(() => import('./TechIcons3D').then(mod => ({ default: mod.DockerLogo3D })), {
  ssr: false,
  loading: () => <div className="w-4 h-4 bg-primary/20 rounded animate-pulse" />,
});
