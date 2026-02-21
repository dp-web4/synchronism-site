'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function MarysRoom() {
  return (
    <>
      <Breadcrumbs currentPath="/marys-room" />
      <h1>Mary&apos;s Room</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <h2>The Thought Experiment</h2>
        <p>
          Mary is a brilliant scientist who knows everything about the physics of color vision
          but has lived her entire life in a black-and-white room. When she finally sees red
          for the first time, does she learn something new?
        </p>
        <p>
          Frank Jackson (1982) argued yes: she gains knowledge of &ldquo;what it&apos;s like&rdquo;
          to see red, proving that physical knowledge isn&apos;t all knowledge.
        </p>

        <h2>Synchronism&apos;s Resolution</h2>
        <p>
          Mary <strong>does</strong> learn something new, but it&apos;s not non-physical knowledge.
          What she gains is a new <strong>coherence pattern</strong>.
        </p>
        <p>
          Knowing the physics of red light (wavelength, receptor activation, neural pathways) is
          one coherence pattern. <em>Experiencing</em> red is a different coherence pattern &mdash;
          one that can only be instantiated by the actual sensory process. The two patterns encode
          different information about the same physical phenomenon.
        </p>

        <h2>The Key Distinction</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Knowledge About</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Third-person coherence pattern. Can be transmitted via language, equations, diagrams.
              Mary has this in the room.
            </p>
          </div>
          <div className="card">
            <h3>Knowledge By Acquaintance</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              First-person coherence pattern. Can only be instantiated by direct sensory experience.
              Mary gains this when she sees red.
            </p>
          </div>
        </div>
        <p>
          Both are physical. Both are coherence patterns. But they live in different parts of the
          coherence landscape and one cannot substitute for the other &mdash; just as a map of
          a mountain cannot substitute for climbing it, even though both encode information about
          the mountain.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/consciousness-predictions" className="btn-primary">
            Next: Consciousness Predictions &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/marys-room" />
    </>
  );
}
