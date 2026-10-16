import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chemistry Correlation Explorer',
  description: '23 curated chemistry rows, sort by correlation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
