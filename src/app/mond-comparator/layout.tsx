import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MOND-Synchronism Comparator',
  description: 'Side-by-side a\u2080 derivation vs empirical MOND',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
