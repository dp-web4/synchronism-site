import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consciousness Predictions',
  description: '34 falsifiable predictions with EEG protocols',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
