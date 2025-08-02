"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroAnimatedBackground from './HeroAnimatedBackground';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Beautiful Animated Background */}
      <HeroAnimatedBackground />
      
      {/* Enhanced Gradient Overlay for 3D Integration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-background/30 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 floating"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="gradient-text text-glow">BELAID Aymen Azeddine</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full max-w-md"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-foreground/80 max-w-lg leading-relaxed"
          >
            A passionate <span className="text-primary font-semibold">Full-Stack Developer</span> 
            {' '}crafting beautiful, functional, and user-centered digital experiences 
            with modern technologies and creative 3D elements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow text-lg px-8 py-6"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/belaidaymen444?focus_contribution_menu=true', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all glow"
                aria-label={label}
              >
                <Icon size={24} className="text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats or Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '7+', label: 'Projects Completed' },
              { number: '2+', label: 'Years Experience' },
              { number: '15+', label: 'Technologies' },
              { number: '100%', label: 'Garantee Quality' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl"
              >
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-foreground/70 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
        whileHover={{ y: -5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-primary" />
        </motion.div>
      </motion.button>
    </section>
  );
}
