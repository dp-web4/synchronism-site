import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parameter Derivations',
  description: 'Status of every parameter: motivated choices, dimensional fits, reparametrizations',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
