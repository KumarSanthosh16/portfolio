'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import WorkExperience from '@/components/sections/WorkExperience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll and animations
    gsap.set('body', { overflow: 'visible' });
    
    // Refresh ScrollTrigger after page load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <WorkExperience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}