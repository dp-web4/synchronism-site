import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier 4: Frontier',
  description: '3 tests at the edge of current technology',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
