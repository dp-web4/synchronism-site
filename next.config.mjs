/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/getting-started',
        destination: '/why-synchronism',
        permanent: false,
      },
      {
        source: '/get-started',
        destination: '/why-synchronism',
        permanent: false,
      },
      {
        source: '/start',
        destination: '/why-synchronism',
        permanent: false,
      },
      {
        source: '/tools',
        destination: '/interactive-tools',
        permanent: false,
      },
      {
        source: '/tests',
        destination: '/test-catalog',
        permanent: false,
      },
      {
        source: '/core-equation',
        destination: '/coherence-function',
        permanent: false,
      },
      {
        source: '/methodology',
        destination: '/research-philosophy',
        permanent: false,
      },
      {
        source: '/research-methodology',
        destination: '/research-philosophy',
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
