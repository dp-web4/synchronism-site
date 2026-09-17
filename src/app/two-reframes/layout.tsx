import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Two Reframes',
  description: 'CRT and pendulum clock: how Synchronism sees physics differently',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
