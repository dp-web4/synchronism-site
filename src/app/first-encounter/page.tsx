'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';

const steps = [
  {
    title: 'Start with Presence',
    content: `A single electron floating in a vacuum — almost nothing around it to interact with. Now: the core of a neutron star, where matter is packed 10¹⁴× denser than lead and everything is interacting with everything. That difference is what Synchronism calls presence (ρ). At its simplest, presence is density — how much stuff is packed into a given space. But which stuff counts? Only the neighbors close enough to actually influence the system — everything beyond some horizon might as well not exist. Synchronism calls that horizon the MRH (Markov Relevancy Horizon): the bubble of nearest neighbors that matter. Everything outside the bubble can be ignored. (The formal version, if you want it: the minimal set of degrees of freedom whose transitions materially influence coherence — same idea, stated precisely.) A single atom doesn’t “feel” the Andromeda galaxy — it only responds to what’s immediately around it; Andromeda is outside its MRH. See the Glossary for the full definition. Synchronism starts here: presence, measured within that bubble, is the universal input.`,
    highlight: '\u03C1 (presence)',
  },
  {
    title: 'The Coherence Function',
    content: `Feed that density into: C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1)).
    Out comes a number between 0 and 1. Zero means sparse and independent — few neighbors, each element acting on its own.
    One means dense and collective — everything interacting, behavior dominated by the crowd.
    (Note: in this framework C measures density-driven collective ordering, not quantum phase coherence — quantum systems like superconductors land at low C.)`,
    highlight: 'C = 0 (sparse) → C = 1 (collective)',
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
    to rotation velocity. MOND's acceleration constant a₀ = cH₀/(2π) falls out of the same constants —
    but this is a dimensional coincidence (the only scale buildable from c and H₀), not a first-principles
    derivation; the 2π is unexplained and the match is off by ~13%. See Honest Assessment.`,
    highlight: 'a₀ ≈ cH₀/(2π): a coincidence, not a derivation',
  },
  {
    title: 'Scale Down: Quantum Measurement',
    content: `What if "wave function collapse" isn't a special event? What if it's just a system
    crossing the MRH — the Markov Relevancy Horizon — where correlations decay below the noise floor?
    No observer needed. No consciousness required. Just a boundary crossing.
    (See "Two Reframes" for the CRT analogy that makes this intuitive.)`,
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
      <PathNav currentPath="/first-encounter" />

      <h1>First Encounter</h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
        Beginner Path — Step 2 of 6 &nbsp;(&larr;{' '}
        <Link href="/why-synchronism" style={{ color: 'var(--color-accent-blue)' }}>Prev: Why Synchronism?</Link>)
      </p>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
        A guided walk through the core ideas. No prerequisites needed.
      </p>

      {/* Coherence definition — always visible */}
      <div className="card" style={{
        background: 'rgba(56, 189, 248, 0.05)',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        marginBottom: '1.25rem',
        padding: '1rem 1.25rem',
      }}>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          <strong style={{ color: 'var(--color-accent-blue)' }}>Coherence</strong> is how collectively a group of things behaves.
          A marching band moving in lockstep: high coherence. A crowd wandering in a plaza: low coherence.
          Dense matter in a crystal lattice — every atom locked in step: high coherence.
          Sparse gas drifting between stars: low coherence.
          Synchronism asks whether <em>one equation</em> can quantify this transition across all of physics.
        </p>
      </div>

      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
        7 short sections on this one page &mdash; ~90 seconds each. (This page is Step 2 of the 6-step Beginner path;
        the sections below are numbered separately. Use the progress bar to jump between sections.)
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>
        <strong>New here?</strong> This 10-minute intro is the fastest path to understanding the framework.
        Want a more structured journey? <a href="/learning-paths" style={{ color: 'var(--color-accent-blue)' }}>Learning Paths</a> offers
        Beginner / Intermediate / Advanced routes with 6–8 steps each.
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
            Section {step + 1} of {steps.length}
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
        {step === 1 && (
          <>
            <div style={{ marginTop: '1rem', padding: '0.6rem 1rem', background: 'rgba(56,189,248,0.07)', borderRadius: '0.375rem', fontSize: '0.85rem' }}>
              <strong>Try it: </strong>
              <Link href="/coherence-explorer" style={{ color: 'var(--color-accent-blue)' }}>Coherence Explorer</Link>
              {' '}— drag two sliders and watch C(ρ) change in real time. Best hands-on intro on the site.
            </div>
            <details style={{ marginTop: '0.75rem' }}>
              <summary style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', cursor: 'pointer' }}>Expert note (physicist terminology)</summary>
              <span style={{ display: 'block', marginTop: '0.35rem', fontSize: '0.8em', color: 'rgba(239,68,68,0.8)' }}>
                BEC/superconductors land at <em>low</em> γ (≈6×10⁻⁴ for BCS) because large N<sub>corr</sub> sits in the denominator: γ = 2/√N<sub>corr</sub>. A very small γ means a nearly flat S-curve — so C stays close to 0 at any physically accessible density, despite these systems being quantum-coherent. This is a documented inversion in the framework (see γ Calculator caveats): the formula assigns the flattest curves to the most-correlated systems, opposite to what real phase transitions do.
              </span>
            </details>
          </>
        )}
        {step === 2 && (
          <div style={{ marginTop: '1rem', padding: '0.6rem 1rem', background: 'rgba(56,189,248,0.07)', borderRadius: '0.375rem', fontSize: '0.85rem' }}>
            <strong>Try it: </strong>
            <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>γ Calculator</Link>
            {' '}— click any preset (Ideal Gas, Water, BEC) to see γ and its regime.
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        {step > 0 ? (
          <button
            className="btn-secondary"
            onClick={() => setStep(s => s - 1)}
          >
            &larr; Previous
          </button>
        ) : (
          <div />
        )}
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
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Link href="/two-reframes" style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Prefer analogies to equations? Try Two Reframes (side trip — not part of this sequence) &rarr;
        </Link>
      </div>

      <RelatedConcepts currentPath="/first-encounter" />
    </>
  );
}
