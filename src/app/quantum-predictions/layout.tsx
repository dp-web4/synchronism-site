import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Predictions',
  description: '2 consistent with literature, 6 untested protocols',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
