import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Matter: Sign Error',
  description: 'CFD viscosity mapping predicts wrong direction — structural failure',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
