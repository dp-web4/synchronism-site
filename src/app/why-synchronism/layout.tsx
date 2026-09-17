import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Synchronism?',
  description: 'The question before the answer',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
