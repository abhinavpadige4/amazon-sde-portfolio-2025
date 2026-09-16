import Hero from "/components/hero";
import About from "/components/about";
import Skills from "/components/skills";
import Projects from "/components/projects";
import Experience from "/components/experience";
import Contact from "/components/contact";
import SEO from "/components/seo";

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