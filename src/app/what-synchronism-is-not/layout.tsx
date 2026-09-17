import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Synchronism Is Not',
  description: 'Scope boundaries: not a TOE, not peer-reviewed, not original physics',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
