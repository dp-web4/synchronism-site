import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Roadmap',
  description: '26 tests by tier (24 in the original registry + 2 added later)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
