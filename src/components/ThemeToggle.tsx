"use client";

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <motion.button
        className="relative p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </motion.button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {isDark ? (
          <Moon size={20} className="text-primary" />
        ) : (
          <Sun size={20} className="text-primary" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </div>
    </motion.button>
  );
}
