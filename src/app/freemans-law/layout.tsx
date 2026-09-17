import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freeman\'s Law',
  description: '\u03A3\u2080 from first principles',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
