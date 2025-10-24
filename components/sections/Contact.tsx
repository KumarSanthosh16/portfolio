'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email',
      value: 'santhosh020316@gmail.com',
      link: 'mailto:santhosh020316@gmail.com',
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Phone',
      value: '+91 8098218168',
      link: 'tel:+918098218168',
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Location',
      value: 'Bangalore, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='w-6 h-6' />,
      name: 'GitHub',
      url: 'https://github.com/KumarSanthosh16',
      color: 'hover:text-gray-400',
    },
    {
      icon: <Linkedin className='w-6 h-6' />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/santhoshkumar-ragunathan-753067244/',
      color: 'hover:text-blue-400',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      '.contact-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    ).fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='py-20 px-4 sm:px-6 lg:px-8 relative'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Let&apos;s Work Together
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together. Happy to collaborate
            with you :-)
          </p>
        </div>

        <div className='grid grid-cols-1 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8 w-full lg:!w-1/2 mx-auto'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Get in Touch
              </h3>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about technology and
                design. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className='space-y-4'>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className='contact-card glass-effect border-[#7127BA]/20 hover:border-[#7127BA]/40 transition-all duration-300 group'
                >
                  <CardContent className='p-6'>
                    <a
                      href={info.link}
                      className='flex items-center gap-4 group-hover:text-[#7127BA] transition-colors duration-300'
                    >
                      <div className='p-3 bg-[#7127BA]/20 rounded-xl group-hover:bg-[#7127BA]/30 transition-colors duration-300'>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className='font-semibold text-white mb-1'>
                          {info.title}
                        </h4>
                        <p className='text-gray-300  transition-colors duration-300'>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Follow Me
              </h4>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`p-3 glass-effect rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:border-[#7127BA]/40 border border-[#7127BA]/20`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <Card className='glass-effect border-[#7127BA]/20 hover:border-[#7127BA]/40 transition-all duration-300'>
            <CardContent className='p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Send a Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Name *
                    </label>
                    <Input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className='bg-[#2D1B4E] border-[#7127BA]/30 text-white placeholder-gray-400 focus:border-[#7127BA] focus:ring-[#7127BA]'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Email *
                    </label>
                    <Input
                      type='email'
                      id='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className='bg-[#2D1B4E] border-[#7127BA]/30 text-white placeholder-gray-400 focus:border-[#7127BA] focus:ring-[#7127BA]'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Subject *
                  </label>
                  <Input
                    type='text'
                    id='subject'
                    name='subject'
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className='bg-[#2D1B4E] border-[#7127BA]/30 text-white placeholder-gray-400 focus:border-[#7127BA] focus:ring-[#7127BA]'
                    placeholder='Project discussion'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Message *
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='bg-[#2D1B4E] border-[#7127BA]/30 text-white placeholder-gray-400 focus:border-[#7127BA] focus:ring-[#7127BA] resize-none'
                    placeholder='Tell me about your project...'
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full bg-[#7127BA] hover:bg-[#5A1F96] text-white py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 animate-glow'
                >
                  <Send className='w-5 h-5 mr-2' />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
