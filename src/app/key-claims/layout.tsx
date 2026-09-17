import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Key Claims',
  description: '3 claims where Synchronism says something new',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
