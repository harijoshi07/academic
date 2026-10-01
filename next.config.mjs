/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/academic',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
