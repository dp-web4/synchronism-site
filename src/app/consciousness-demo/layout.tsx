import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consciousness Threshold Demo',
  description: 'Visualize the C \u2248 0.50 convergence from 8 approaches',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
