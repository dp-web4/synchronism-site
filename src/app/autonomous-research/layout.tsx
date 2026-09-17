import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Research',
  description: '3,308 sessions run by AI agents, with a human (dp) overseeing direction and the ledger',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
