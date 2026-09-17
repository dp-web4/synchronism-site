import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wide Binaries',
  description: 'Gaia DR3: MOND+EFE vs a knee-conditional density law',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
