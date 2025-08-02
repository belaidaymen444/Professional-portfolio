"use client";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Portfolio() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
