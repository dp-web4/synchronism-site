import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Observer Problem',
  description: 'Geocentrism analogy: removing the privileged frame',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
