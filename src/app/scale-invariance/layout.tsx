import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scale Invariance',
  description: 'The Planck-to-cosmic claim, and why one tanh-of-log switch saturates within ~2 decades',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
