import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scale Navigator',
  description: 'Slide from Planck to cosmic \u2014 see \u03B3 at every scale',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
