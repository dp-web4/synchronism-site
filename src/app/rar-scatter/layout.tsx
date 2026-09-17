import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RAR Scatter',
  description: 'Environment-dependent RAR scatter — registered >20% amplitude, refuted as registered (r² = 0.0001)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
