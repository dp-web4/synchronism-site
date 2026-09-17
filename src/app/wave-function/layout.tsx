import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wave Function Interpretation',
  description: 'What \u03C8 means in Synchronism',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
