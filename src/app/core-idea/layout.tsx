import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Core Idea',
  description: 'One equation, every scale',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
