import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coherence Explorer',
  description: 'Compute C(\u03C1) with adjustable \u03B3 and \u03C1_crit',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
