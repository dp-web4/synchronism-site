import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Identity',
  description: 'What persists through change',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
