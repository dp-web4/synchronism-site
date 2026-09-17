import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The \u03B3 \u2248 1 Boundary',
  description: '1,703 phenomena at the quantum-classical edge',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
