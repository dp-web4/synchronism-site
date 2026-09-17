import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Born Rule Derivation',
  description: 'Quantum probabilities from coherence conservation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
