"use client";

import { motion } from 'framer-motion';
import SkillTooltip from './SkillTooltip';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 80, color: '#61DAFB' },
      { name: 'TypeScript', level: 70, color: '#3178C6' },
      { name: 'Next.js', level: 70, color: '#000000' },
      { name: 'Tailwind CSS', level: 80, color: '#06B6D4' },
      { name: 'Sveltekit', level: 60, color: '#FF3E00' },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Express', level: 80, color: '#000000' },
      { name: 'PostgreSQL', level: 70, color: '#336791' },
      { name: 'MySQL', level: 50, color: '#F29111' },
      { name: 'NestJS', level: 20, color: '#00C3E8' },
      { name: 'Python', level: 25, color: '#ffde57' },
    ],
  },
  {
    category: 'Tools & Cloud',
    technologies: [
      { name: 'Vercel', level: 85, color: '#000000' },
      { name: 'Cloudinary', level: 65, color: '#3448C5' },
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'Vite', level: 70, color: '#646CFF' },
      { name: 'Prisma', level: 85, color: '#16A394' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I work with cutting-edge technologies to build scalable, performant, and beautiful applications.
          </p>
        </motion.div>

        {/* 3D Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-card/30 rounded-2xl p-8 border border-border"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">3D Technology Icons</h3>
          <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl border border-border">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold gradient-text mb-2">3D Technology Showcase</h4>
              <p className="text-foreground/60">Interactive 3D icons coming soon!</p>
            </div>
          </div>
          <p className="text-center text-sm text-foreground/60 mt-4">
            Drag to rotate • Interactive 3D representations of my core technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                    className="space-y-2"
                  >
                    <SkillTooltip
                      skill={tech.name}
                      level={tech.level}
                      color={tech.color}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Java', 'C++', 'Redux', 'Zustand', 'Jest', 'Cypress', 
              'Webpack', 'Babel', 'ESLint', 'Prettier', 'Vercel', 'Netlify',
              'Firebase', 'Supabase', 'Prisma', 'Zod', 'React Query', 'Framer Motion'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
