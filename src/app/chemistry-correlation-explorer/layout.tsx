import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chemistry Correlation Explorer',
  description: 'Browse the 1,703 phenomena, sort by correlation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
