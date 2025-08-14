'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Play, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'AI Text Summarizer',
      description:
        'AI Text Summarizer is a web application that allows you to summarize text using AI. It is built with React.js and Python.',
      image: './ai-text-summarizer.png',
      technologies: ['JavaScript', 'Gemini', 'Tailwind CSS', 'Rest API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/KumarSanthosh16/Summarizer.AI',
      category: 'Chrome Plugin',
      year: '2025',
      features: ['Summarize text using AI', 'Chrome Extension'],
    },
    {
      title: 'YamlQL',
      description:
        'An OpenSource Library/CLI tool to interact with YAML files using SQL',
      image: './yamlql.png',
      technologies: [
        'React.js',
        'TypeScript',
        'Python',
        'SQL',
        'CLI',
        'Open Source',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/AKSarav/YamlQL',
      category: 'Open Source Contribution',
      year: '2025',
      features: ['Open Source', 'Library', 'CLI', 'SQL'],
    },
    {
      title: 'Portfolio Website',
      description:
        'A stunning personal portfolio website showcasing creative design, smooth animations, and optimal performance across all devices.',
      image: './protfolio.jpg',
      technologies: [
        'Next.js',
        'TypeScript',
        'GSAP',
        'Framer Motion',
        'Tailwind CSS',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/KumarSanthosh16/portfolio',
      category: 'Portfolio',
      year: '2025',
      features: [
        'Smooth animations',
        'Responsive design',
        'SEO optimized',
        'Fast loading',
        'Modern UI/UX',
      ],
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
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
      id='projects'
      ref={sectionRef}
      className='py-20 px-4 sm:px-6 lg:px-8 relative'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Featured Projects
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            A showcase of my recent work demonstrating technical skills,
            creativity, and problem-solving abilities
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='project-card glass-effect border-[#7127BA]/20 hover:border-[#7127BA]/40 transition-all duration-500 group overflow-hidden'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* <div className='absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='flex gap-4'>
                    <Button
                      size='sm'
                      className='bg-[#7127BA] hover:bg-[#5A1F96]'
                    >
                      <ExternalLink className='w-4 h-4' />
                    </Button>
                    <Button
                      size='sm'
                      variant='outline'
                      className='border-white text-white hover:bg-white hover:text-[#1A0B2E]'
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className='w-4 h-4' />
                    </Button>
                  </div>
                </div> */}
                <div className='absolute top-4 right-4'>
                  <span className='px-3 py-1 bg-[#7127BA] text-white text-xs rounded-full'>
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-2xl font-bold text-white  transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <div className='flex items-center gap-1 text-gray-400 text-sm'>
                    <Calendar className='w-4 h-4' />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {project.description}
                </p>

                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-white mb-3'>
                    Key Features
                  </h4>
                  <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-gray-300 text-sm'
                      >
                        <div className='w-1.5 h-1.5 border-[#7127BA] border-2 rounded-full mt-2 flex-shrink-0'></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='mb-6'>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 text-white rounded-full text-xs border border-[#7127BA]/30 transition-colors duration-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-4'>
                  <Button
                    variant='outline'
                    className='flex-1 bg-[#7127BA] hover:bg-[#5A1F96] transition-all duration-300 hover:scale-105'
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className='w-4 h-4' />
                  </Button>
                  {/* <Button className='flex-1 bg-[#7127BA] hover:bg-[#5A1F96] transition-all duration-300 hover:scale-105'>
                    <Play className='w-4 h-4 mr-2' />
                    Live Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className='text-center mt-12'>
          <Button
            size='lg'
            variant='outline'
            className='border-[#7127BA] text-[#7127BA] hover:bg-[#7127BA] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105'
            onClick={() =>
              window.open('https://github.com/KumarSanthosh16', '_blank')
            }
          >
            View All Projects
            <ExternalLink className='w-5 h-5 ml-2' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
