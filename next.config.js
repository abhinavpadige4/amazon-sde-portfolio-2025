/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Add explicit output configuration for Vercel
  output: 'standalone',
}

module.exports = nextConfig