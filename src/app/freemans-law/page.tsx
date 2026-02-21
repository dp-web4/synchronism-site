'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function FreemansLaw() {
  return (
    <>
      <Breadcrumbs currentPath="/freemans-law" />
      <h1>Freeman&apos;s Law</h1>
      <ValidationBadge status="validated" label="12% Error" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="Surface density from first principles">
          &#x03A3;&#x2080; = cH&#x2080; / (4&#x03C0;&sup2;G) &#x2248; 110 M&#x2609;/pc&sup2;
        </EquationDisplay>

        <p>
          In 1970, Kenneth Freeman observed that disk galaxies have a remarkably constant central
          surface brightness. Regardless of galaxy size, luminosity, or morphology, the projected
          surface density of the stellar disk hovers around a single value. This became known as
          Freeman&apos;s Law.
        </p>

        <h2>The Observation</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>
              &#x03A3;&#x2080;<sup>predicted</sup>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>&#x2248; 110</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              M&#x2609;/pc&sup2; (Synchronism derivation)
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#38bdf8' }}>
              &#x03A3;&#x2080;<sup>observed</sup>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>&#x2248; 124</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              M&#x2609;/pc&sup2; (Freeman 1970, updated)
            </div>
          </div>
        </div>

        <p>
          The error is approximately 12%. For a first-principles derivation using only cosmological
          constants (c, H&#x2080;, G), this is a strong result.
        </p>

        <h2>The Derivation</h2>
        <p>
          Freeman&apos;s Law follows from the same cosmological argument that yields the{' '}
          <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>MOND acceleration scale</Link>.
          Starting from a&#x2080; = cH&#x2080;/(2&#x03C0;):
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
          <div className="card">
            <h3>Step 1: From acceleration to surface density</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The gravitational acceleration from a thin disk of surface density &#x03A3; is
              g = 2&#x03C0;G&#x03A3;. Setting this equal to a&#x2080; gives the maximum stable
              surface density:
            </p>
            <EquationDisplay size="sm">
              &#x03A3;&#x2080; = a&#x2080; / (2&#x03C0;G)
            </EquationDisplay>
          </div>

          <div className="card">
            <h3>Step 2: Substitute a&#x2080;</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Replacing a&#x2080; with cH&#x2080;/(2&#x03C0;):
            </p>
            <EquationDisplay size="sm">
              &#x03A3;&#x2080; = cH&#x2080; / (4&#x03C0;&sup2;G)
            </EquationDisplay>
          </div>

          <div className="card">
            <h3>Step 3: Plug in numbers</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              With c = 3 &times; 10<sup>8</sup> m/s, H&#x2080; = 67.4 km/s/Mpc, and
              G = 6.674 &times; 10<sup>&minus;11</sup> m&sup3;kg<sup>&minus;1</sup>s<sup>&minus;2</sup>,
              the result is approximately 110 M&#x2609;/pc&sup2;.
              Freeman&apos;s observed value: ~124 M&#x2609;/pc&sup2;. Error: 12%.
            </p>
          </div>
        </div>

        <h2>Why This Matters</h2>
        <p>
          Freeman&apos;s Law has been a puzzle for decades. Why should galaxies of wildly different
          sizes and masses all converge to the same surface density? In CDM, it requires fine-tuned
          feedback processes. In MOND, it follows from a&#x2080; being fundamental &mdash; but then
          why does a&#x2080; have the value it does?
        </p>
        <p>
          In Synchronism, both a&#x2080; and &#x03A3;&#x2080; emerge from the same cosmological
          parameters (c, H&#x2080;, G). They are two faces of the same coherence threshold.
          Session #89 derived &#x03A3;&#x2080; independently; Session #91 showed it is consistent
          with the a&#x2080; derivation from Sessions #87&ndash;88.
        </p>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          A 12% error is encouraging but not conclusive. The derivation makes simplifying assumptions
          (thin disk, no bulge contribution, uniform M/L ratio) that could shift the predicted value.
          Additionally, Freeman&apos;s Law itself has been refined over the decades &mdash; there is
          a population of low surface brightness (LSB) galaxies that violate it, though the
          <em> high</em> surface brightness cutoff remains robust.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/cosmic-horizons" className="btn-primary">
            Next: Cosmic Horizons &rarr;
          </Link>
          <Link href="/mond-unification" className="btn-secondary">
            &larr; MOND Unification
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/freemans-law" />
    </>
  );
}
