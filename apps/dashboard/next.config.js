/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hoopzblends.store',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Standalone output makes Docker deployment easy
  // bundlePages: true, // Next.js 14: default, no config needed
}

module.exports = nextConfig
