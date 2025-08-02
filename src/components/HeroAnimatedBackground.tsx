"use client";

import { motion } from 'framer-motion';

export default function HeroAnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Central Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-3xl" />
        </motion.div>

        {/* Orbiting Elements */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4"
            style={{
              originX: 0.5,
              originY: 0.5,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: {
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              },
            }}
          >
            <div
              className="w-4 h-4 rounded-full shadow-lg"
              style={{
                background: `hsl(${(i / 8) * 360 + 200}, 70%, 60%)`,
                boxShadow: `0 0 20px hsl(${(i / 8) * 360 + 200}, 70%, 60%)`,
                transform: `translate(${Math.cos((i / 8) * Math.PI * 2) * 200}px, ${Math.sin((i / 8) * Math.PI * 2) * 120}px)`,
              }}
            />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full border-2 border-purple-400/30 rotate-45 rounded-lg shadow-lg" 
               style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div className="w-full h-full border-2 border-cyan-400/40 rounded-full shadow-lg"
               style={{ boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)' }} />
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-1/3 w-16 h-16"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 
                          transform rotate-45 rounded-lg shadow-lg blur-sm" />
        </motion.div>

        {/* Animated Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border border-purple-400/20 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border border-cyan-400/20 rounded-full" />
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-48 h-48"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-2/3 w-40 h-40"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-xl" />
        </motion.div>
      </div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/30" />
    </div>
  );
}
