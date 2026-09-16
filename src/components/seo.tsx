import type { ReactNode } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEO({
  title = 'Amazon SDE Portfolio',
  description = 'Portfolio website for an Amazon Software Development Engineer showcasing AWS, distributed systems, and DSA expertise',
  image = '/og-image.jpg',
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://amazon-sde-portfolio.vercel.app" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://amazon-sde-portfolio.vercel.app" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "[Your Name]",
          "url": "https://amazon-sde-portfolio.vercel.app",
          "sameAs": [
            "https://linkedin.com/in/[your-linkedin]",
            "https://github.com/[your-github]",
            "https://leetcode.com/[your-leetcode]"
          ],
          "jobTitle": "Software Development Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Amazon"
          },
          "description": description,
          "skills": [
            "AWS",
            "Distributed Systems",
            "Data Structures and Algorithms",
            "Java",
            "Python",
            "System Design"
          ]
        }, null, 2)}
      </script>
    </>
  );
}