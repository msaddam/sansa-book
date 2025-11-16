/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['source.unsplash.com', 'picsum.photos', 'images.unsplash.com'],
    unoptimized: true
  }
}

module.exports = nextConfig

