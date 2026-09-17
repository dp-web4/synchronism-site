import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First Encounter',
  description: '10-minute guided introduction',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
