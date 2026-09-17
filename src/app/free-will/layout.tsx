import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Will',
  description: 'Synchronism\'s answer to determinism vs. agency',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
