import './globals.css';
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
    images: [
      {
        url: 'https://amazon-sde-portfolio.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon SDE Portfolio - [Your Name]',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon SDE Portfolio - [Your Name]',
    description: 'Portfolio website for an Amazon Software Development Engineer showcasing AWS, distributed systems, and DSA expertise',
    images: ['https://amazon-sde-portfolio.vercel.app/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className="h-full">{children}</body>
    </html>
  );
}