import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phase Transitions',
  description: '\u03B3 > 1.4, 0.6\u20131.4 (\u2248 1), < 0.6 regimes \u2014 smooth crossovers in C(\u03C1), not phase transitions',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
