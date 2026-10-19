import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consciousness Predictions',
  description: '34 predictions with EEG protocols, untestable as stated (no EEG-to-C calibration)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
