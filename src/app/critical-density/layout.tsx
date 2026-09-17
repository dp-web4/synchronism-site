import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Critical Density',
  description: '\u03C1_crit = A V_flat\u00B2: the transition point',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
