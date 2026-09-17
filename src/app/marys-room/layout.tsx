import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mary\'s Room',
  description: 'Resolved via phase pattern acquisition',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
