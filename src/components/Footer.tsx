"use client";

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Alex Johnson</h3>
            <p className="text-foreground/70 text-sm">
              Full-Stack Developer passionate about creating beautiful, 
              functional web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-foreground/60 text-sm flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart size={16} className="text-red-500" /> by Alex Johnson
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all glow"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-8 mt-8 text-center"
        >
          <p className="text-xs text-foreground/50">
            This portfolio showcases my skills in React, Three.js, TypeScript, and modern web development.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
