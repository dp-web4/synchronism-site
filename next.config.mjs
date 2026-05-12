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
      // Individual tier-1 test URLs (no per-test pages exist; redirect to summary)
      {
        source: '/tier-1/test-:slug*',
        destination: '/tier-1-existing',
        permanent: false,
      },
      {
        source: '/tier-1-existing/test-:slug*',
        destination: '/tier-1-existing',
        permanent: false,
      },
      // /decoherence-explorer was removed; redirect to decoherence-mrh
      {
        source: '/decoherence-explorer',
        destination: '/decoherence-mrh',
        permanent: false,
      },
      // Intuitive topic-name URLs visitors guess (Pass 1, Pass 3, Pass 4)
      {
        source: '/quantum',
        destination: '/measurement-without-observers',
        permanent: false,
      },
      {
        source: '/consciousness',
        destination: '/hard-problem',
        permanent: false,
      },
      {
        source: '/chemistry',
        destination: '/gamma-boundary',
        permanent: false,
      },
      {
        source: '/parameter-derivation',
        destination: '/parameter-derivations',
        permanent: false,
      },
      {
        source: '/galaxy-curve-plotter',
        destination: '/galaxy-plotter',
        permanent: false,
      },
      {
        source: '/chemistry-explorer',
        destination: '/gamma-boundary',
        permanent: false,
      },
      // /predictions/desi 404d (researcher pass 4); redirect to honest-assessment where refutation is documented
      {
        source: '/predictions/desi',
        destination: '/honest-assessment',
        permanent: false,
      },
      // /predictions/:path* fallback
      {
        source: '/predictions/:path*',
        destination: '/test-catalog',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
