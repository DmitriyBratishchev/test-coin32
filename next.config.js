/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: 'https://media.rawg.io/media/'
  }
}

module.exports = nextConfig
