import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sound Velocity',
  description: 'r = 0.982 with fitted γ; restates the Debye temperature',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
