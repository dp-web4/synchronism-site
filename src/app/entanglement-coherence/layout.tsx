import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entanglement as Coherence',
  description: 'Non-local correlations from shared \u03B3',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
