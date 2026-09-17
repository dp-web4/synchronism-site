import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where It\'s Already Useful',
  description: 'Zero confirmed physics — but load-bearing as an applied design ontology (Web4, SAGE, hestia, the fleet)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
