/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/williamsc_portfolio/' : '',
  images: {
    loader: "akamai",
    path:"",
    unoptimized: true,
  },
}

module.exports = nextConfig
