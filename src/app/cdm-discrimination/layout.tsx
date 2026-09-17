import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CDM Discrimination',
  description: '\u03C3_int = 0.086 dex: CDM-consistent (z=+0.5), not below-CDM',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
