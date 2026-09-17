import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier 1: Existing Data',
  description: '10 tests using available datasets',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
