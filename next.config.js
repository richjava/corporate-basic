/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash
      },
    ],
  },
};

module.exports = nextConfig;
