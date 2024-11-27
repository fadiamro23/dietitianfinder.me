/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      // Add your image domains here if you're using next/image
    ],
  }
}

module.exports = nextConfig 