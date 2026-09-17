import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The \u03B3 Parameter',
  description: '\u03B3 = 2/\u221AN_corr: why 2, why \u221AN',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
