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
        source: '/tier-1',
        destination: '/tier-1-existing',
        permanent: false,
      },
      {
        source: '/tier-2',
        destination: '/tier-2-pilots',
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
      {
        source: '/tier-1-existing-data',
        destination: '/tier-1-existing',
        permanent: false,
      },
      {
        source: '/tools/:path*',
        destination: '/:path*',
        permanent: false,
      },
      // /predictions was a client-side redirect; convert to server-side
      {
        source: '/predictions',
        destination: '/test-catalog',
        permanent: false,
      },
      // Short-form URLs visitors guess
      {
        source: '/why',
        destination: '/why-synchronism',
        permanent: false,
      },
      {
        source: '/test-roadmap',
        destination: '/test-catalog',
        permanent: false,
      },
      {
        source: '/cosmology',
        destination: '/cosmology-predictions',
        permanent: false,
      },
      {
        source: '/what-this-is-not',
        destination: '/what-synchronism-is-not',
        permanent: false,
      },
      {
        source: '/coherence',
        destination: '/coherence-function',
        permanent: false,
      },
      {
        source: '/dual-c',
        destination: '/coherence-function',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
