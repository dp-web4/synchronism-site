import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Status Dashboard',
  description: 'Live tracking of prediction outcomes',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
