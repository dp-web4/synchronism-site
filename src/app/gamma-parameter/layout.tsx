import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The \u03B3 Parameter',
  description: '\u03B3 = 2/\u221AN_corr \u2014 the proposed derivation and why it did not survive testing',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
