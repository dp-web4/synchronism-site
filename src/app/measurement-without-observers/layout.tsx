import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Measurement Without Observers',
  description: 'MRH crossing replaces wave function collapse',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
