import type { ReactNode } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEO({
  title = 'Amazon SDE Portfolio - Alex Johnson',
  description = 'Software Development Engineer specializing in AWS cloud architecture, distributed systems, and scalable backend solutions. Passionate about solving complex problems at scale.',
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
          "name": "Alex Johnson",
          "url": "https://amazon-sde-portfolio.vercel.app",
          "sameAs": [
            "https://linkedin.com/in/alexjohnson-sde",
            "https://github.com/alexjohnson-sde",
            "https://leetcode.com/alexjohnson_sde"
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
            "System Design",
            "Microservices",
            "Cloud Architecture"
          ]
        }, null, 2)}
      </script>
    </>
  );
}