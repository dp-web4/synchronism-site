import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materials Predictions',
  description: 'What \u03B3 says about new materials',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
