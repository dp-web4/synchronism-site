import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Tools',
  description: 'Index of all tools: Coherence Explorer, Galaxy Plotter, γ Calculator, and more',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
