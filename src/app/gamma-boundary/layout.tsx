import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The \u03B3 \u2248 1 Boundary',
  description: 'Where 1,703 fitted γ values cluster; fitted, not predicted',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
