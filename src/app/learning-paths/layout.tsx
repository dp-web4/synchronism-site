import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Paths',
  description: 'Choose by level (Beginner → Advanced) or by topic (Physics, Chemistry, Philosophy, Methodology)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
