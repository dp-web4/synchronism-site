import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prediction Tracker',
  description: 'Status board by badge (historical labels included)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
