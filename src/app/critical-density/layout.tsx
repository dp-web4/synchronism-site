import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reference Density (\u03C1_crit)',
  description: '\u03C1_crit = A V_flat\u00B2: the saturation knee of C(\u03C1), a reference scale, not a transition point',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
