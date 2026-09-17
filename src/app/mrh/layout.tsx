import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MRH: Markov Relevancy Horizon',
  description: 'The boundary of causal influence',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
