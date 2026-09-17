import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmology Predictions',
  description: 'BAO modulation, GW-DM correlation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
