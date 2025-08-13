'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  ChevronDown,
  Code2,
  Sparkles,
  Play,
  ArrowRight,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animations
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        heroImageRef.current,
        { opacity: 0, x: 100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      );

    // Floating animation for decorative elements
    gsap.set(floatingRef.current, { y: -10 });
    gsap.to(floatingRef.current, {
      y: 10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Hero image floating animation
    gsap.to(heroImageRef.current, {
      y: -15,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Particle animations
    gsap.utils.toArray('.particle').forEach((particle: any, index) => {
      gsap.to(particle, {
        y: -20,
        x: Math.random() * 40 - 20,
        duration: 2 + Math.random() * 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.2,
      });
    });
  }, []);

  const scrollToNext = () => {
    document
      .querySelector('#experience')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Santhoshkumar_R_FED.pdf';
    link.download = 'Santhoshkumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id='home'
      ref={heroRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(113, 39, 186, 0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#2D1B4E] to-[#1A0B2E] opacity-90'></div>

      {/* Animated Particles */}
      <div ref={particlesRef} className='absolute inset-0 z-5'>
        <div className='particle absolute top-20 left-10 w-2 h-2 bg-[#7127BA] rounded-full opacity-60'></div>
        <div className='particle absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40'></div>
        <div className='particle absolute bottom-40 left-20 w-2 h-2 bg-[#7127BA] rounded-full opacity-50'></div>
        <div className='particle absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full opacity-70'></div>
        <div className='particle absolute bottom-60 right-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-30'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content Section */}
          <div className='text-center lg:text-left'>
            <h1
              ref={titleRef}
              className='text-5xl md:text-7xl font-bold mb-6 leading-tight'
            >
              Santhoshkumar
              <br />
              <span className='gradient-text'>Frontend Developer</span>
            </h1>

            <p
              ref={subtitleRef}
              className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'
            >
              Results-driven Frontend Developer with expertise in React,
              Next.js, and TypeScript, delivering fast, scalable, and accessible
              web applications. I’m also an Open source contributor.
            </p>
            <div className='mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6'>
                <Sparkles className='w-4 h-4 text-[#7127BA]' />
                <span className='text-sm text-gray-300 font-bold'>
                  தீதும் நன்றும் பிறர் தர வாரா
                </span>
              </div>
            </div>

            <div
              ref={ctaRef}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
            >
              <Button
                size='lg'
                className='bg-gradient-to-r from-[#667eea] to-[#764ba2]  text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 group shadow-lg'
                onClick={() =>
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Code2 className='w-5 h-5 mr-2' />
                View My Work
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='border-[#667eea] text-[#667eea] hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 group shadow-lg'
                onClick={downloadResume}
              >
                <Download className='w-5 h-5 mr-2' />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className='relative flex justify-center lg:justify-end'>
            <div ref={heroImageRef} className='relative'>
              {/* Main Hero Image */}
              <div className='relative w-80 h-80 lg:w-96 lg:h-96'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#7127BA] to-purple-600 rounded-3xl rotate-6 opacity-20 animate-pulse'></div>
                <div className='absolute inset-0 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl rotate-6 opacity-20 animate-pulse'></div>
                <div className='absolute inset-0 bg-gradient-to-tr from-[#667eea]/30 to-transparent rounded-3xl -rotate-3'></div>
                <img
                  src='./santhosh-dp.jpeg'
                  alt='Santhoshkumar'
                  className='relative w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-[#667eea]/30'
                />

                {/* Floating Code Elements */}
                <div className='absolute -top-4 -right-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-3 rounded-xl shadow-lg animate-bounce'>
                  <Code2 className='w-6 h-6' />
                </div>

                <div className='absolute -bottom-4 -left-4 bg-gradient-to-r from-[#764ba2] to-[#f093fb] text-white p-3 rounded-xl shadow-lg animate-pulse'>
                  <Sparkles className='w-6 h-6' />
                </div>

                {/* Tech Stack Floating Cards */}
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 animate-float'>
                  <span className='text-white text-sm font-semibold'>
                    React
                  </span>
                </div>

                <div
                  className='absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 animate-float'
                  style={{ animationDelay: '1s' }}
                >
                  <span className='text-white text-sm font-semibold'>
                    Next.js
                  </span>
                </div>

                <div
                  className='absolute -bottom-8 left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 animate-float'
                  style={{ animationDelay: '2s' }}
                >
                  <span className='text-white text-sm font-semibold'>
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className='animate-bounce text-white hover:text-[#7127BA] transition-colors duration-300 mt-8 lg:mt-16'
          aria-label='Scroll to next section'
        >
          <ChevronDown className='w-8 h-8 mx-auto' />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-20 left-20 w-32 h-32 bg-[#667eea] rounded-full opacity-20 blur-3xl animate-pulse'></div>
      <div className='absolute bottom-20 right-20 w-48 h-48 bg-[#764ba2] rounded-full opacity-10 blur-3xl animate-pulse'></div>
      <div
        className='absolute top-1/2 left-10 w-24 h-24 bg-[#f093fb] rounded-full opacity-15 blur-2xl animate-pulse'
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
};

export default Hero;
