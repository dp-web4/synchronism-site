import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Paths',
  description: 'Choose your journey: Physics, Chemistry, Philosophy, or All',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
