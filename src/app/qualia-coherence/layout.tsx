import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qualia as Coherence',
  description: 'The proposal that inverted qualia are impossible, and what it rests on',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
