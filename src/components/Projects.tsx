"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, order tracking, and admin dashboard.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: '3D Portfolio Website',
    description: 'An interactive portfolio built with Three.js and React. Features immersive 3D animations, particle systems, and smooth transitions.',
    image: '/placeholder.svg',
    technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Chat Interface',
    description: 'A modern chat interface with AI integration, featuring message streaming, code highlighting, and file uploads.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Cryptocurrency Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with charts, portfolio management, and price alerts.',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'Chart.js', 'Express', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'Analytics platform for social media metrics with data visualization and automated reporting features.',
    image: '/placeholder.svg',
    technologies: ['React', 'D3.js', 'Python', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 lg:h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/30">{project.id}</div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-foreground rounded-full text-background hover:bg-foreground/90 transition-colors"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-foreground/70 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              Live Demo <ExternalLink size={14} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
            >
              Source <Github size={14} />
            </a>
          </div>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="text-primary hover:text-primary/80 transition-colors cursor-pointer"
            aria-label={`View ${project.title} project`}
          >
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work, from full-stack applications to creative web experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Interested in working together? I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 glow text-lg px-8 py-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Something Amazing
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
