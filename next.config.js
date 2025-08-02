/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'three'],
  },
  transpilePackages: ['three'],
  // Allow dev origins for Builder.io preview
  allowedDevOrigins: [
    'fb6343f6d85847f4baaee7ace200b8cf-45c75fa5a00447e49e54a8040.fly.dev',
    'fb6343f6d85847f4baaee7ace200b8cf-45c75fa5a00447e49e54a8040.projects.builder.codes'
  ],
  webpack: (config, { isServer }) => {
    // Handle Three.js and canvas-related modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    return config;
  },
  images: {
    domains: [],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
