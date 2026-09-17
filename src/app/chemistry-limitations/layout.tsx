import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chemistry Limitations',
  description: 'Melting points (53% error), critical exponents (2\u00D7 off)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
