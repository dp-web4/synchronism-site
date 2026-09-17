import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electronegativity',
  description: 'r = 0.979 correlation with coherence',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
