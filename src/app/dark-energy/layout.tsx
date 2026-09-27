import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Energy & DESI',
  description: 'Freezing-class sector that contains ΛCDM: it misses the DESI quadrant, but can only be refuted together with ΛCDM',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
