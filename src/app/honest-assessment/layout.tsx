import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Honest Assessment',
  description: 'What works, what failed, what we don\'t know',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
