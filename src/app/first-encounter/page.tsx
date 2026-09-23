'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';

const steps = [
  {
    title: 'Start with Presence',
    content: `A single electron floating in a vacuum — almost nothing around it to interact with. Now: the core of a neutron star, where matter is packed 10¹⁴× denser than lead and everything is interacting with everything. That difference is what Synchronism calls presence (ρ). At its simplest, presence is density — how much stuff is packed into a given space. But which stuff counts? Only the neighbors close enough to actually influence the system — everything beyond some horizon might as well not exist. Synchronism calls that horizon the MRH (Markov Relevancy Horizon — “Markov” is the mathematician’s word for “only the current neighbors matter, not the history”): the bubble of nearest neighbors that matter. Everything outside the bubble can be ignored. (The formal version, if you want it: the minimal set of degrees of freedom whose transitions materially influence coherence — same idea, stated precisely.) A single atom doesn’t “feel” the Andromeda galaxy — it only responds to what’s immediately around it; Andromeda is outside its MRH. See the Glossary for the full definition. Synchronism starts here: presence, measured within that bubble, is the universal input.`,
    highlight: '\u03C1 (presence)',
  },
  {
    title: 'The Coherence Function',
    content: `Feed that density into: C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1)).
    What tanh does, in plain words: it is an S-shaped curve, like a dimmer switch — flat at first, then rising,
    then levelling off near 1. Feed it a small number and it outputs nearly 0; feed it a large number and it outputs nearly 1, with no abrupt jump.
    Out comes a number between 0 and 1. Zero means sparse and independent — few neighbors, each element acting on its own.
    One means dense and collective — everything interacting, behavior dominated by the crowd.
    (Note: in this framework C measures density-driven collective ordering, not quantum phase coherence — quantum systems like superconductors land at low C.)`,
    highlight: 'C = 0 (sparse) → C = 1 (collective)',
  },
  {
    title: 'The γ Parameter — the original idea, and what happened to it',
    content: `γ sets how sharply the dial turns. The original idea was γ = 2/√N_corr, where N_corr is how many
    particles move together as a unit: one electron alone gives γ = 2, a crystal of 10²⁴ atoms gives γ ≈ 10⁻¹².
    That formula did not survive testing. Where it made a checkable prediction, the sign came out backwards
    (predicted correlation +0.55, measured −0.55), and N_corr had to be defined differently in every field to make
    it work. When γ is simply fitted to galaxy data it comes out near 0.5 — the value at which the equation turns
    into MOND's. So read γ = 2/√N_corr as the starting hypothesis, not as how things work.`,
    highlight: 'Original idea: γ = 2/√N_corr — failed where tested',
  },
  {
    title: 'Where γ ≈ 1',
    content: `Roughly the quantum-classical boundary: a crossover zone where the dial turns
    gradually, not a phase transition (tanh is smooth, so nothing snaps here). When γ was fitted
    phenomenon by phenomenon across 1,703 chemical phenomena, most fitted values landed near this band.
    Those γ values were fitted, not predicted — the formula above failed — so the clustering is an
    observation about where fits landed, with a template-bias caveat and no mechanism. Neither this
    placement nor the old consciousness-threshold placement follows from the equation.`,
    highlight: 'γ ≈ 1: a crossover band where fitted values cluster (Reparametrization)',
  },
  {
    title: 'Scale Up: Galaxies',
    content: `Apply the same equation to galaxies. Stars in a galaxy are individual uncorrelated
    classical particles (N_corr = 1, γ = 2). The critical density ρ_crit = A × V_flat² connects
    to rotation velocity. MOND — Modified Newtonian Dynamics, the long-standing rival proposal that gravity itself changes below a threshold acceleration, rather than invoking dark matter — has an acceleration constant a₀, and a₀ = cH₀/(2π) falls out of the same constants —
    but this is a dimensional coincidence (the only scale buildable from c and H₀), not a first-principles
    derivation; the 2π is unexplained and the match is off by ~13%. See Honest Assessment.
    In plain words: the number happens to match a combination of the speed of light (c) and the universe's
    expansion rate (H₀, the Hubble constant). That may be luck; nobody has derived it.`,
    highlight: 'a₀ ≈ cH₀/(2π): a coincidence, not a derivation',
  },
  {
    title: 'Scale Down: Quantum Measurement',
    content: `What if "wave function collapse" isn't a special event? What if it's just a system
    crossing the MRH — the Markov Relevancy Horizon — where correlations decay below the noise floor?
    No observer needed. No consciousness required. Just a boundary crossing.
    ("Noise floor", in everyday terms: a whisper in a loud room is still there, but nobody can pick it out
    from the background. The proposal is that a quantum correlation fades the same way — it is not destroyed,
    it just drops below what the surroundings can tell apart from noise.)
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
        7 short sections on this one page, lettered A&ndash;G &mdash; about 10 minutes in all. (The &ldquo;Step 2 of 6&rdquo;
        above is this page&apos;s place in the Beginner path; the letters are only for the sections inside this page.
        The sections appear one at a time: use the <strong>Next</strong> button below each section, or the progress bar, to move between them.)
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>
        <strong>New here?</strong> This ~10-minute intro is the fastest path to understanding the framework.
        Want a more structured journey? <a href="/learning-paths" style={{ color: 'var(--color-accent-blue)' }}>Learning Paths</a> offers
        Beginner / Intermediate / Advanced routes with 6–8 steps each.
      </p>

      {/* All parts are in the server HTML (crawlers and no-JS readers get A–G); the stepper only
          toggles which one is displayed. Without JS, the noscript rule shows every part and hides the
          stepper controls, which would do nothing. */}
      <noscript>
        <style>{'.fe-part{display:block !important}.fe-stepper-nav{display:none !important}'}</style>
      </noscript>

      {/* Progress */}
      <div className="fe-stepper-nav" style={{
        display: 'flex',
        gap: '0.25rem',
        marginBottom: '2rem',
      }}>
        {steps.map((part, i) => (
          <button
            key={i}
            aria-label={`Section ${String.fromCharCode(65 + i)}: ${part.title}`}
            title={`Section ${String.fromCharCode(65 + i)}: ${part.title}`}
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

      {/* Parts */}
      {steps.map((part, i) => (
      <section
        key={part.title}
        id={`part-${String.fromCharCode(97 + i)}`}
        aria-label={`Section ${String.fromCharCode(65 + i)}: ${part.title}`}
        className="card card-highlight fe-part"
        style={{ marginBottom: '2rem', minHeight: '200px', display: i === step ? undefined : 'none' }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            Section {String.fromCharCode(65 + i)}
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
            {part.highlight}
          </span>
        </div>

        <h2>{part.title}</h2>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
          {part.content}
        </p>
        {i === 1 && (
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
        {i === 2 && (
          <div style={{ marginTop: '1rem', padding: '0.6rem 1rem', background: 'rgba(56,189,248,0.07)', borderRadius: '0.375rem', fontSize: '0.85rem' }}>
            <strong>Try it: </strong>
            <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>γ Calculator</Link>
            {' '}— click any preset (Ideal Gas, Water, BEC) to see γ and its regime.
          </div>
        )}
      </section>
      ))}

      {/* Navigation */}
      <div className="fe-stepper-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        {step > 0 ? (
          <button
            className="btn-secondary"
            onClick={() => setStep(s => s - 1)}
          >
            &larr; Previous: Section {String.fromCharCode(64 + step)}
          </button>
        ) : (
          <div />
        )}
        {step < steps.length - 1 ? (
          <button
            className="btn-primary"
            onClick={() => setStep(s => s + 1)}
          >
            Next: Section {String.fromCharCode(66 + step)} &rarr;
          </button>
        ) : (
          <Link href="/core-idea" className="btn-primary">
            Go Deeper &rarr;
          </Link>
        )}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Link href="/two-reframes" style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Prefer analogies? Try Two Reframes (side trip; some math and physics names you can skip) &rarr;
        </Link>
      </div>

      <RelatedConcepts currentPath="/first-encounter" />
    </>
  );
}
