/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    images: {
    domains: [],
  },
  // Add explicit output configuration for Vercel
  output: 'standalone',
}

module.exports = nextConfig