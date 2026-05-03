/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/getting-started',
        destination: '/first-encounter',
        permanent: false,
      },
      {
        source: '/tools',
        destination: '/interactive-tools',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
