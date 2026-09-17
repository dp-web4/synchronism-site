import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equation Anatomy',
  description: 'Term-by-term tour of C(ρ) — what each piece means and why it was chosen (motivated, not derived)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
