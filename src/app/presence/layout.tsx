import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presence (ρ)',
  description: 'ρ: compatible structural elements within the MRH — the universal input',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
