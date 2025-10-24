'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Testsigma Software Technologies',
      location: 'Bangalore, India',
      period: '2023 - Present',
      achievements: [
        'Optimized performance through lazy loading and bundle size reduction, cutting load times by 40%.',
        'Engineered an internal LMS (Learning Management System) Application from scratch.',
        'Automated workflows with N8N for SalesOps.',
        'Designed and developed scalable UI components in React, Next.js, and Tailwind CSS.',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'N8N',
        'RESTful API',
      ],
    },
    {
      title: 'Website developer',
      company: 'Testsigma Software Technologies',
      location: 'Bangalore, India',
      period: '2022 - 2023',
      achievements: [
        'Maintained and improved the company’s PHP-based website.',
        'Focused on SEO',
        'Integrating WordPress as a headless CMS.',
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray('.experience-card');

    cards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Timeline line animation
    gsap.fromTo(
      '.timeline-line',
      { height: 0 },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      id='experience'
      ref={sectionRef}
      className='py-20 px-4 sm:px-6 lg:px-8 relative'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Work Experience
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            A journey through my professional growth and key contributions in
            frontend development
          </p>
        </div>

        <div ref={timelineRef} className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-[#7127BA] timeline-line hidden md:block'></div>

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <div key={index} className='relative'>
                {/* Timeline Dot */}
                <div className='absolute left-6 w-4 h-4 bg-[#7127BA] rounded-full border-4 border-[#1A0B2E] hidden md:block animate-glow'></div>

                <Card className='experience-card ml-0 md:ml-16 glass-effect border-[#7127BA]/20 hover:border-[#7127BA]/40 transition-all duration-300 group'>
                  <CardContent className='p-6'>
                    <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-white mb-2 transition-colors duration-300'>
                          {exp.title}
                        </h3>
                        <div className='flex items-center gap-4 text-gray-300 mb-3'>
                          <span className='font-semibold '>{exp.company}</span>
                          <div className='flex items-center gap-1'>
                            <MapPin className='w-4 h-4' />
                            <span className='text-sm'>{exp.location}</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-1 mb-4'>
                          <Calendar className='w-4 h-4 text-gray-400' />
                          <span className='text-sm text-gray-400'>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='mb-6'>
                      <h4 className='text-lg font-semibold text-white mb-3'>
                        Key Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-2 text-gray-300'
                          >
                            <div className='w-2 h-2 bg-[#7127BA] rounded-full mt-2 flex-shrink-0'></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>
                        Technologies
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className='px-3 py-1 bg-[#7127BA]/20 text-white rounded-full text-sm border border-[#7127BA]/30 hover:bg-[#7127BA]/30 transition-colors duration-200'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
