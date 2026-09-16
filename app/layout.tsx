import '../src/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amazon SDE Portfolio - [Your Name]',
  description: 'Portfolio website for an Amazon Software Development Engineer showcasing AWS, distributed systems, and DSA expertise. Built with Next.js 14, TypeScript, and Tailwind CSS.',
  openGraph: {
    title: 'Amazon SDE Portfolio - [Your Name]',
    description: 'Portfolio website for an Amazon Software Development Engineer showcasing AWS, distributed systems, and DSA expertise',
    url: 'https://amazon-sde-portfolio.vercel.app',
    siteName: 'Amazon SDE Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon SDE Portfolio - [Your Name]',
    description: 'Portfolio website for an Amazon Software Development Engineer showcasing AWS, distributed systems, and DSA expertise',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}