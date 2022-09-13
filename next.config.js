/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['is2-ssl.mzstatic.com', 'is3-ssl.mzstatic.com'],
  },

  
}

module.exports = nextConfig
