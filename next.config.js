/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const assetPrefix =  isProd ? '/williamsc_portfolio/' : '',
  //'':'';
  //'/williamsc_portfolio/' : '',

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix,
  images: {
    loader: "akamai",
    path:"",
    unoptimized: true,
  },
}

module.exports = nextConfig
