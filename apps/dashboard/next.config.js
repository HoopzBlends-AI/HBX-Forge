/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/forge',
  assetPrefix: '/forge/',
  trailingSlash: true,
};

module.exports = nextConfig;
