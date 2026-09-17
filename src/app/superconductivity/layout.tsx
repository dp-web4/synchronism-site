import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Superconductivity',
  description: '\u03B7 reachability factor = Abrikosov-Gor\'kov pair-breaking',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
