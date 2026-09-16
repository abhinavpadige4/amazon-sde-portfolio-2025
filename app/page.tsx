import Hero from '@/src/components/hero';
import About from '@/src/components/about';
import Skills from '@/src/components/skills';
import Projects from '@/src/components/projects';
import Experience from '@/src/components/experience';
import Contact from '@/src/components/contact';
import SEO from '@/src/components/seo';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Amazon SDE Portfolio - [Your Name]"
        description="Portfolio website for an Amazon Software Development Engineer showcasing AWS, distributed systems, and DSA expertise"
        image="/og-image.jpg"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}