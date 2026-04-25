'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PredictionsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/test-catalog');
  }, [router]);
  return null;
}
