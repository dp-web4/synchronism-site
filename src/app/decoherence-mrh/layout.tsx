import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Decoherence at the MRH',
  description: 'Why classical emerges from quantum',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
