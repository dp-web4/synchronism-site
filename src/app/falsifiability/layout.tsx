import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Falsifiability',
  description: 'Every prediction has a kill criterion',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
