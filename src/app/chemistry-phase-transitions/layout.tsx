import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phase Transitions in Chemistry',
  description: 'Melting, boiling, superconductivity, superfluidity',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
