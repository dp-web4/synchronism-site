import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '\u03B3 Calculator',
  description: 'The formula that failed, and why we left it up \u2014 input N_corr, get \u03B3, watch it rank the most tightly correlated matter in nature as the flattest',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
