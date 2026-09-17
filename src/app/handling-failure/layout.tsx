import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Handle Failure',
  description: 'Documenting what doesn\'t work is as important as what does',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
