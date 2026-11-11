import { useEffect } from 'react';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { SITE_TITLE } from '@/data/site';

export const HomePage = () => {
  useEffect(() => {
    document.title = SITE_TITLE;
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
};
