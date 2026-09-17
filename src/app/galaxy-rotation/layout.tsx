import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galaxy Rotation Curves',
  description: 'SPARC (175) + ALFALFA-SDSS (14,435 galaxies after the quality cut)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
