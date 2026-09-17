import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Coherence Function',
  description: 'C(\u03C1) = tanh(\u03B3 ln(\u03C1/\u03C1_crit + 1))',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
