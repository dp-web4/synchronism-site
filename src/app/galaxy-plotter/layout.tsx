import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galaxy Curve Plotter',
  description: 'Plot SPARC rotation curves with Synchronism overlays',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
