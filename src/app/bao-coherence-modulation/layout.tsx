import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BAO Coherence Modulation (TEST-04)',
  description: 'Density-dependent BAO peak shift ~10⁻⁴ — derivation pending, estimator not yet specified',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
