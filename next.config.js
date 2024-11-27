/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: [
      // Add your image domains here if you're using next/image
    ],
  },
  experimental: {
    outputFileTracingRoot: undefined,
  },
  distDir: '.next'
}

module.exports = nextConfig 