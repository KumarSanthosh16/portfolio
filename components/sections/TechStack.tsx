'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Layout, Smartphone, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const techCategories = [
    {
      title: 'Frontend',
      icon: <Layout className='w-8 h-8' />,
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'SASS/SCSS',
        'SEO',
        'GSAP',
        'Shadcn/UI',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Backend',
      icon: <Database className='w-8 h-8' />,
      technologies: ['Node.js', 'Python', 'N8N'],
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Tools',
      icon: <Code className='w-8 h-8' />,
      technologies: [
        'VS Code',
        'Figma',
        'Postman',
        'Webpack',
        'N8N',
        'VWO',
        'RESTful API',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Performance',
      icon: <Zap className='w-8 h-8' />,
      technologies: [
        'Optimization',
        'Lighthouse',
        'Web Vitals',
        'Lazy Loading',
        'Caching',
        'Bundle Analysis',
      ],
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray('.tech-card');

    cards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          rotationY: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id='tech'
      ref={sectionRef}
      className='py-20 px-4 sm:px-6 lg:px-8 relative'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Tech Stack
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Technologies and tools I use to bring ideas to life with modern,
            scalable solutions
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className='tech-card glass-effect border-[#667eea]/20 hover:border-[#667eea]/60 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-[#667eea]/20 relative overflow-hidden'
            >
              <CardContent className='p-6'>
                {/* Background gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-[#667eea]/5 to-[#764ba2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                <div className='relative z-10'>
                  <div className='flex items-center mb-6'>
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h3 className='text-2xl font-bold text-white group-hover:text-[#667eea] transition-colors duration-300'>
                      {category.title}
                    </h3>
                  </div>

                  <div className='grid grid-cols-1 gap-3'>
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className='bg-gradient-to-r from-[#2D1B4E] to-[#1A1A2E] rounded-lg p-4 text-left border border-[#667eea]/10 hover:border-[#667eea]/30 group-hover:bg-gradient-to-r group-hover:from-[#667eea]/10 group-hover:to-[#764ba2]/10 transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300'>
                            {tech}
                          </span>
                          <div className='w-2 h-2 bg-[#667eea] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
