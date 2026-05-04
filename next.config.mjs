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
      {
        source: '/test-catalog/wide-binary',
        destination: '/wide-binaries',
        permanent: false,
      },
      {
        source: '/test-catalog/bao-modulation',
        destination: '/bao-coherence-modulation',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
