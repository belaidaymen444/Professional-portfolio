"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Transforming ideas into visually stunning and user-friendly interfaces.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, efficiency, and seamless user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams to deliver exceptional results on time.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 3 years of experience creating 
            digital solutions that combine beautiful design with powerful functionality. 
            I specialize in React, Node.js, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed">
              My passion for development started during my computer science studies, where I discovered 
              the perfect blend of creativity and logic that programming offers. What began as curiosity 
              about how websites work evolved into a deep love for crafting digital experiences.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest technologies. 
              Whether it's exploring new frameworks, contributing to open-source projects, or 
              experimenting with 3D web technologies, I'm always pushing the boundaries of what's possible.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl border border-primary/20"
            >
              <p className="text-primary font-semibold italic">
                "The best way to predict the future is to create it."
              </p>
              <p className="text-sm text-foreground/60 mt-2">- My development philosophy</p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <feature.icon 
                  size={32} 
                  className="text-primary mb-4 group-hover:scale-110 transition-transform" 
                />
                <h4 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Core Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: 'Frontend Development', level: 75 },
              { skill: 'Backend Development', level: 70 },
              { skill: 'Graphic Design', level: 40 },
              { skill: 'Programmer', level: 80 },
              { skill: 'Data analysis', level: 50 },
              { skill: '3D modeling', level: 55 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                      className="text-border"
                    />
                    <motion.path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-primary"
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: `${item.level}, 100` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{item.level}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{item.skill}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
