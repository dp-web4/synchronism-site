'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const steps = [
  {
    title: 'Start with Density',
    content: `Everything in the universe has a density — how much stuff is packed into a given space.
    A single electron in a vacuum? Very low density. The core of a neutron star? Incredibly high.
    Synchronism starts here: density is the universal input.`,
    highlight: 'ρ (density)',
  },
  {
    title: 'The Coherence Function',
    content: `Feed that density into: C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)).
    Out comes a number between 0 and 1. Zero means fully quantum — superposition, interference,
    wave-like behavior. One means fully classical — definite positions, particle-like, everyday physics.`,
    highlight: 'C = 0 (quantum) → C = 1 (classical)',
  },
  {
    title: 'The γ Parameter',
    content: `γ = 2/√N_corr, where N_corr is how many particles move together as a unit.
    One electron? N_corr = 1, so γ = 2. That's quantum territory.
    A crystal of 10²⁴ atoms? γ ≈ 10⁻¹², deeply classical.
    The transition happens around γ ≈ 1.`,
    highlight: 'γ = 2/√N_corr',
  },
  {
    title: 'Where γ ≈ 1',
    content: `The quantum-classical boundary. This is where phase transitions happen,
    where chemistry gets interesting, where molecules become biology.
    1,703 chemical phenomena cluster here. Not by design — by observation.`,
    highlight: 'γ ≈ 1: the boundary',
  },
  {
    title: 'Scale Up: Galaxies',
    content: `Apply the same equation to galaxies. Stars in a galaxy are individual uncorrelated
    classical particles (N_corr = 1, γ = 2). The critical density ρ_crit = A × V_flat² connects
    to rotation velocity. What emerges? MOND's acceleration constant a₀ = cH₀/(2π) —
    derived, not assumed.`,
    highlight: 'a₀ emerges from C(ρ)',
  },
  {
    title: 'Scale Down: Quantum Measurement',
    content: `What if "wave function collapse" isn't a special event? What if it's just a system
    crossing the MRH — the Markov Relevancy Horizon — where correlations decay below the noise floor?
    No observer needed. No consciousness required. Just a boundary crossing.`,
    highlight: 'Measurement = MRH crossing',
  },
  {
    title: 'Where It Fails',
    content: `Melting points: 53% error. Critical exponents: 2× off. Superconductor Tc: 6.5× wrong.
    Not every application of C(ρ) works. The function captures density→coherence well,
    but can't replace domain-specific physics where crystal structure, spin-orbit coupling,
    or multi-body effects dominate.`,
    highlight: 'Honest about limits',
  },
];

export default function FirstEncounter() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <>
      <Breadcrumbs currentPath="/first-encounter" />

      <h1>First Encounter</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
        A 10-minute guided walk through the core ideas. No prerequisites needed.
      </p>

      {/* Progress */}
      <div style={{
        display: 'flex',
        gap: '0.25rem',
        marginBottom: '2rem',
      }}>
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              background: i <= step ? 'var(--color-accent-violet)' : 'var(--color-dark-border)',
              transition: 'background 0.2s ease',
            }}
          />
        ))}
      </div>

      {/* Current Step */}
      <div className="card card-highlight" style={{ marginBottom: '2rem', minHeight: '200px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            Step {step + 1} of {steps.length}
          </span>
          <span style={{
            padding: '0.25rem 0.75rem',
            background: 'rgba(139, 92, 246, 0.15)',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            color: 'var(--color-accent-violet)',
            fontFamily: "'Times New Roman', serif",
            fontStyle: 'italic',
          }}>
            {current.highlight}
          </span>
        </div>

        <h2>{current.title}</h2>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
          {current.content}
        </p>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
        <button
          className="btn-secondary"
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          style={{ opacity: step === 0 ? 0.3 : 1 }}
        >
          &larr; Previous
        </button>
        {step < steps.length - 1 ? (
          <button
            className="btn-primary"
            onClick={() => setStep(s => s + 1)}
          >
            Next &rarr;
          </button>
        ) : (
          <Link href="/core-idea" className="btn-primary">
            Go Deeper &rarr;
          </Link>
        )}
      </div>

      <RelatedConcepts currentPath="/first-encounter" />
    </>
  );
}
