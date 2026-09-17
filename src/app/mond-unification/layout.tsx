import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MOND Unification',
  description: 'a\u2080 = cH\u2080/(2\u03C0) is emergent, not fundamental',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
