"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillTooltipProps {
  skill: string;
  level: number;
  description?: string;
  color?: string;
}

export default function SkillTooltip({ skill, level, description, color = '#a855f7' }: SkillTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  const skillDescriptions: Record<string, string> = {
    'React': 'Building dynamic user interfaces with hooks, context, and modern patterns',
    'TypeScript': 'Type-safe JavaScript development for better code quality and maintainability',
    'Next.js': 'Full-stack React framework with SSR, SSG, and API routes',
    'Tailwind CSS': 'Utility-first CSS framework for rapid UI development',
    'Three.js': 'Creating immersive 3D web experiences and interactive graphics',
    'Node.js': 'Server-side JavaScript runtime for building scalable applications',
    'Express': 'Fast, minimalist web framework for Node.js backend development',
    'PostgreSQL': 'Advanced relational database with complex queries and performance optimization',
    'MongoDB': 'NoSQL document database for flexible, schema-less data storage',
    'GraphQL': 'Query language for APIs with efficient data fetching',
    'Docker': 'Containerization for consistent development and deployment environments',
    'AWS': 'Cloud computing services for scalable and reliable infrastructure',
    'Git': 'Version control and collaborative development workflows',
    'Vite': 'Fast build tool and development server for modern web projects',
    'Figma': 'UI/UX design and prototyping for user-centered design processes',
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="space-y-2 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-foreground">{skill}</span>
          <span className="text-sm text-primary font-semibold">{level}%</span>
        </div>
        <div className="w-full bg-border rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 10, 
          scale: isHovered ? 1 : 0.9 
        }}
        transition={{ duration: 0.2 }}
        className={`absolute z-10 w-64 p-3 bg-card border border-border rounded-lg shadow-lg pointer-events-none ${
          isHovered ? 'block' : 'hidden'
        }`}
        style={{ 
          top: '100%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          marginTop: '8px'
        }}
      >
        <div className="text-sm text-foreground/80">
          {skillDescriptions[skill] || description || `Experienced in ${skill} development and implementation.`}
        </div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-border rotate-45"></div>
      </motion.div>
    </div>
  );
}
