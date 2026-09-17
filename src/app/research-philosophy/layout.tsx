import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Philosophy',
  description: '"All models are wrong; some are useful"',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
