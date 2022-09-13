/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['is2-ssl.mzstatic.com', 'is3-ssl.mzstatic.com'],
  },

  env: {
    RapidAPIKey:'b4c218f272msh21bfa859ca66f2fp14a119jsn868c6b2145de',
    RapidAPIHost:'shazam.p.rapidapi.com',
  },
}

module.exports = nextConfig
