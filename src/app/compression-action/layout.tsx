import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compression Action',
  description: 'Alternative \u03BE formulation: topology + geometry + dynamics',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
