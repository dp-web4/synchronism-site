import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmic Horizons',
  description: 'Inflation, dark energy as MRH phenomena',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
