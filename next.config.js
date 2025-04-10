/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'linkedin.com'],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/Het-portfolio-website',
  assetPrefix: '/Het-portfolio-website/',
}

module.exports = nextConfig 