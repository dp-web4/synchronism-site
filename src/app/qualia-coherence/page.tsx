'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function QualiaCoherence() {
  return (
    <>
      <Breadcrumbs currentPath="/qualia-coherence" />
      <h1>Qualia as Coherence</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Qualia &mdash; the subjective character of experience (the redness of red, the pain
          of pain) &mdash; are coherence resonance patterns in Synchronism&apos;s framework.
        </p>

        <h2>Why Inverted Qualia Are Impossible</h2>
        <p>
          The classic thought experiment: could your experience of &ldquo;red&rdquo; be what I
          experience as &ldquo;green,&rdquo; with no way to tell?
        </p>
        <p>
          In Synchronism: <strong>no.</strong> If qualia ARE coherence patterns (not correlates of them),
          then two systems with the same coherence structure have the same experience. The pattern
          IS the quale. You can&apos;t have the same pattern with different experience any more than
          you can have the same wave with different frequency.
        </p>

        <h2>What This Predicts</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Identical neural coherence patterns &rarr; identical subjective experience</li>
          <li>Synesthesia = cross-modal coherence coupling (color patterns invading sound patterns)</li>
          <li>Pain vs. pleasure = different coherence signatures in the same neural substrate</li>
          <li>Anesthesia works by disrupting coherence patterns (not by blocking information flow)</li>
        </ul>

        <h2>Honest Limitations</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This framework is untestable with current technology. We cannot measure coherence
          patterns at sufficient resolution to verify that pattern = experience. It&apos;s a
          philosophical position with empirical consequences, but the experiments needed
          (single-neuron-resolution coherence mapping during subjective reports) are decades away.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/free-will" className="btn-primary">
            Next: Free Will &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/qualia-coherence" />
    </>
  );
}
