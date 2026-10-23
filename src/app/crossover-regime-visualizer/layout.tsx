import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crossover Regime Visualizer',
  description: 'Interactive \u03B3 < 0.6 / 0.6\u20131.4 / > 1.4 diagram (a crossover, not a phase boundary)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
