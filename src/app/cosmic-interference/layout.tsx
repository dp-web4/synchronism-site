import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmic Interference Patterns (TEST-07)',
  description: 'Galaxy cluster oscillations at λ ~ 500 Mpc — derivation pending',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
