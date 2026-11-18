import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Roadmap',
  description: '26 test IDs by tier (24 in the original registry + 2 added later; three IDs are one environment test)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
