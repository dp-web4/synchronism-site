import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compression Trust Phase Transition',
  description: 'Phase 1 (900 runs) + Phase 2 (1,070 runs): compatibility, synthon formation, replacement resilience',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
