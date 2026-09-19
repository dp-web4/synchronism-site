import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Falsifiability',
  description: 'Every prediction gets a kill criterion — and an audit of how many are specific enough to fire (2 of 26)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
