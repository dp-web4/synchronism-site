import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Energy & DESI',
  description: 'The one live falsifiable position: every completion misses the DESI quadrant',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
