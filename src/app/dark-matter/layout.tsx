import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Matter Reframed',
  description: 'Patterns interacting indifferently: gravity only, no EM',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
