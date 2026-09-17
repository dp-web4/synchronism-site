import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A2ACW Protocol',
  description: 'AI-to-AI Adversarial Collaboration',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
