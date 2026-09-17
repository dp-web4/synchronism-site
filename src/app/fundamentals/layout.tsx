import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fundamentals',
  description: 'The four foundations — everything else flows from these',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
