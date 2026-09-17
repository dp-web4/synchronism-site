import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Publisher Track',
  description: 'Automated publication readiness scoring',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
