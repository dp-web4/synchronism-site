import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publication Roadmap',
  description: '35 tracked manuscripts with readiness scores',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
