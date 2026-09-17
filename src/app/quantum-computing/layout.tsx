import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing',
  description: 'Gates as coherence operations, speedup as coherent parallelism',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
