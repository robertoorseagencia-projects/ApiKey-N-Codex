/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
