/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.placeholder.com'],
  },
  // Disable server-side rendering for the entire app
  experimental: {
    appDir: true,
  },
}
