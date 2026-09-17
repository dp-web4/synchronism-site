import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Hard Problem: A Proposed Reframing',
  description: 'A philosophical identity claim: phase patterns are experience (not an empirical finding)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
