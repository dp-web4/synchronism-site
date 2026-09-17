import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Terms and definitions',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
