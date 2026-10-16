import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The \u03B3 \u2248 1 Boundary',
  description: 'Where the chemistry track\'s fitted γ values cluster (1,703 is a session counter); fitted, not predicted',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
