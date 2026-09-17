import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier 2: Pilot Experiments',
  description: '4 tests, $50K\u2013$200K each',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
