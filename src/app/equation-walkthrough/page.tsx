'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import EquationDisplay from '@/components/EquationDisplay';
import ValidationBadge from '@/components/ValidationBadge';

const steps = [
  {
    title: 'Step 1: Start with density',
    equation: 'ρ — the local mass/energy density',
    explanation: 'Everything begins with density. In a galaxy, ρ is the baryon density profile. In chemistry, it\'s the number density of particles. The same starting point everywhere. (Definition note: the ontology pages define ρ more broadly as "presence within a relevancy boundary" — but every executed test uses exactly this physical density, and no broader form has ever been operationalized. This walkthrough uses the definition the tests use.)',
    key: 'Density is the universal input to the coherence function.',
  },
  {
    title: 'Step 2: Normalize by critical density',
    equation: 'ρ / ρ_crit — dimensionless ratio',
    explanation: 'ρ_crit is a reference density — a saturation knee, not a phase-transition critical point. At γ=2: C(ρ_crit) = tanh(2·ln 2) = 0.88, not 0.5. The midpoint C=0.5 sits at ρ ≈ 0.32×ρ_crit. For galaxies: ρ_crit = A × V_flat² (calibrated per galaxy). The ratio ρ/ρ_crit tells you where you are relative to the saturation region.',
    key: 'ρ_crit is a saturation knee, not a critical density — calling it "transition density" is misleading (C(ρ_crit) = 0.88, not 0.5).',
  },
  {
    title: 'Step 3: Take the natural logarithm',
    equation: 'ln(ρ/ρ_crit + 1) — natural log scaling',
    explanation: 'Plain version first (the same treatment tanh gets in Step 5): ln is a compression ruler — it measures a number by how many times you would multiply e (≈2.7) to reach it, so it grows achingly slowly: ln(10) ≈ 2.3, ln(1,000) ≈ 6.9, ln(a billion) ≈ 20.7. Every later formula that contains ln is doing exactly this: converting "how big is the density?" into "how many multiplicative steps big is it?" — read it that way and the rest of the walkthrough follows. Now the fine print: the ln looks like it does the heavy lifting — "compressing" a huge density range into something tanh can handle. But an exact algebraic identity makes that motivation empty. Set x = ρ/ρ_crit. Then tanh(γ·ln(1+x)) ≡ [(1+x)^2γ − 1] / [(1+x)^2γ + 1] — exactly, from tanh(u) = (e^2u−1)/(e^2u+1). The whole equation is an ordinary rational (Hill-type) saturation function of (1+x)^2γ; the tanh∘ln decomposition is one way of writing it, with no transcendental content of its own. Any saturating rational function "spans 80 orders of magnitude" for free — the ln does no work the exponent 2γ doesn\'t undo. The +1 keeps the argument ≥ 1 so ln ≥ 0 and C ≥ 0 at any density. (Identity verified numerically to machine precision across γ ∈ {6×10⁻⁴, 0.49, 2} and x from 10⁻⁶ to 10⁴⁰; stated here 2026-07-10; derived independently by two successive internal review passes, 2026-07-09 and 2026-07-10 — the audit machinery caught it, and the identity took a day to reach this page. No external derivation is on record.)',
    key: 'C(ρ) is algebraically an exact Hill-type saturation function — the tanh∘ln form is a parametrization, not a mechanism. The earlier "ln compression is why one equation spans 80 orders of magnitude" framing was vacuous and is retired.',
  },
  {
    title: 'Step 4: Multiply by γ',
    equation: 'γ × ln(ρ/ρ_crit + 1) — scaled by coherence parameter',
    explanation: 'γ = 2/√N_corr controls how steeply coherence rises with density. For uncorrelated systems (N_corr = 1, γ = 2), coherence rises fast. For highly correlated systems (large N_corr, γ → 0), the curve goes FLAT — C stays low at every physical density. This is the inversion the site warns about: the most collective systems (BCS superconductors, BECs) get the flattest curves and land at C ≈ 0, not high C. See the Audited-Negative honesty note below — the formula has a sign problem and a self-contradictory CLT motivation.',
    key: 'γ is the only "knob" — Audited-Negative. Sign inverted vs. mean-field physics. The γ Calculator shows the BCS reductio directly.',
  },
  {
    title: 'Step 5: Apply tanh',
    equation: 'C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1))',
    explanation: 'tanh (hyperbolic tangent) is a saturation function: over all real inputs it ranges (−1, +1), but since the argument γ·ln(ρ/ρ_crit + 1) is always ≥ 0, C stays in [0, 1) — like a dimmer switch with a soft floor and soft ceiling. Feed it a small number → outputs near 0. Feed it a large number → outputs near 1. No abrupt jump — just a smooth S-curve. Any sigmoid (logistic, erf, Hill) would serve similarly — and in fact the composite tanh∘ln is not merely similar to a Hill function, it IS one exactly (Step 3\'s identity), so tanh is a parametrization choice, not a derived result. The +1 inside the log is a regulator chosen for finiteness at ρ = 0; it is load-bearing — it asymmetrizes the sigmoid, puts the knee at C(ρ_crit) ≈ 0.88 rather than 0.5, and excludes any pure power-law behavior as ρ → 0.',
    key: 'tanh is the saturation wrapper: it ensures C never leaves [0,1] no matter how large or small the input gets.',
  },
  {
    title: 'Step 6: Interpret the output',
    equation: 'C = 0 (no coherence) → C = 1 (full coherence)',
    explanation: 'C = 0: no collective order — the sparse/independent regime. C = 1: full collective coherence — the dense/collective regime. The same output tells you different things in different domains. Note on consciousness: C ≈ 0.50 was the proposed consciousness threshold — it is untestable as stated: no calibration maps any measurement to C, and the one cited test (gnosis-research Session 63) measured a different variable (SNARC salience). A prior "C ≈ 0.64 also rejected" claim had no source and was removed 2026-07-08.',
    key: 'One function, universal interpretation, domain-specific consequences — but the consciousness threshold is untestable as stated.',
  },
];

export default function EquationWalkthrough() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <>
      <Breadcrumbs currentPath="/equation-walkthrough" />
      <h1>Equation Anatomy</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          A term-by-term tour of C(&#x03C1;) &mdash; what each piece means and why it was chosen.
          Note: tanh and &#x03B3;&nbsp;=&nbsp;2/&#x221A;N<sub>corr</sub> are motivated choices, not derived results
          (there is no derivation to walk through &mdash; only choices to examine). See the caveat blocks in each step.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', padding: '0.5rem 0.75rem', background: 'rgba(139,92,246,0.07)', borderRadius: '0.375rem', borderLeft: '2px solid rgba(139,92,246,0.4)' }}>
          <strong>Read this before Step 1:</strong> one of the terms you are about to tour is
          known-broken. The &#x03B3; = 2/&#x221A;N<sub>corr</sub> rule is <em>sign-inverted</em> against
          real finite-size scaling &mdash; more correlated systems should sharpen transitions, but this
          formula flattens them (it files BCS superconductors, among nature&apos;s sharpest transitions,
          at the flattest end). The step for &#x03B3; repeats this in its honesty note; it is stated here
          first so you don&apos;t absorb the formula as-is and get the correction only at the end.
        </p>

        {/* Variable glossary — teach before walking */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-violet)' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            Variables in this equation — defined before we start:
          </p>
          <table style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>C(&#x03C1;)</td><td>Coherence — a number from 0 (sparse/independent) to 1 (dense/collective). The output we&apos;re computing. <span style={{ color: 'rgba(239,68,68,0.8)', fontSize: '0.8em' }}>⚠ Physicist note: C here measures collective ordering, not quantum phase coherence — BEC/BCS condensates have low C by this measure.</span></td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>&#x03C1;</td><td>Presence — the density of compatible elements within the system&apos;s relevancy boundary. The universal input.</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>&#x03C1;<sub>crit</sub></td><td>A characteristic scale parameter for the system. <strong>Important:</strong> not the midpoint of C. At &#x03B3;=2, C(&#x03C1;<sub>crit</sub>)&nbsp;&#x2248;&nbsp;0.88 — &#x03C1;<sub>crit</sub> is near saturation, not the half-way point.</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>&#x03B3;</td><td>2/&#x221A;N<sub>corr</sub> — controls sigmoid sharpness. N<sub>corr</sub> = number of particles moving together. One particle: &#x03B3;=2 (sharp). A million: &#x03B3;=2&times;10&#x207B;&#x00B3; (flat). (Proposed relation — audited-negative: the sign is inverted vs. real collective physics; see the red box below.)</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>ln</td><td>Natural logarithm — grows slowly. Doubling x doesn&apos;t double ln(x). A number 1,000&times; bigger comes out only ~7 units bigger (ln(1000)&nbsp;&#x2248;&nbsp;6.9). Note: the ln is cosmetic here — tanh(&#x03B3;&middot;ln(1+x)) is <em>exactly</em> [(1+x)<sup>2&#x03B3;</sup>&minus;1]/[(1+x)<sup>2&#x03B3;</sup>+1], a Hill-type rational function (see Step 3).</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>tanh</td><td>Hyperbolic tangent — an S-shaped saturation function mapping any real number to (−1, +1); with this equation&apos;s argument (always ≥ 0) the output C stays in [0, 1). Like a dimmer switch: input near 0 → output near 0; input very large → output near 1.</td></tr>
            </tbody>
          </table>
        </div>

        {/* Progress bar */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '2px',
                backgroundColor: i <= step ? 'var(--color-accent-violet)' : 'var(--color-dark-border)',
                cursor: 'pointer',
              }}
              onClick={() => setStep(i)}
            />
          ))}
        </div>

        <div className="card card-highlight" style={{ marginBottom: '1.5rem', minHeight: '250px' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            Step {step + 1} of {steps.length}
          </p>
          <h2 style={{ marginBottom: '1rem' }}>{current.title}</h2>

          <EquationDisplay size="lg">
            {current.equation}
          </EquationDisplay>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
            {current.explanation}
          </p>

          <p style={{ color: 'var(--color-accent-violet)', fontSize: '0.85rem', marginTop: '1rem', fontWeight: 500 }}>
            {current.key}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            style={{
              background: step > 0 ? 'var(--color-dark-surface)' : 'transparent',
              color: step > 0 ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
              border: '1px solid var(--color-dark-border)',
              borderRadius: '4px',
              padding: '0.4rem 1rem',
              cursor: step > 0 ? 'pointer' : 'default',
              fontSize: '0.9rem',
            }}
          >
            &larr; Previous
          </button>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            {step + 1} / {steps.length}
          </span>
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            style={{
              background: step < steps.length - 1 ? 'var(--color-accent-violet)' : 'transparent',
              color: step < steps.length - 1 ? '#fff' : 'var(--color-text-muted)',
              border: '1px solid var(--color-accent-violet)',
              borderRadius: '4px',
              padding: '0.4rem 1rem',
              cursor: step < steps.length - 1 ? 'pointer' : 'default',
              fontSize: '0.9rem',
            }}
          >
            Next &rarr;
          </button>
        </div>

        {/* γ honesty note — parity with γ Calculator (Pass 2 + Pass 3, 2026-06-30) */}
        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.35)',
          borderRadius: '0.5rem',
          padding: '0.875rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <strong style={{ color: '#ef4444' }}>Honesty note — γ = 2/√N<sub>corr</sub>:</strong>
            <ValidationBadge status="audited-negative" label="Audited-Negative — Sign Inverted for All Collective Systems" />
          </div>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Two independent failures in the formula&apos;s motivation: <strong>(1) Sign inverted.</strong>{' '}
            1/√N is a fluctuation <em>width</em> that shrinks as N grows (sharper collective behavior) —
            but sitting in the <em>rate</em> slot of tanh, larger N<sub>corr</sub> gives a
            <em>flatter</em> curve. A BCS superconductor (N<sub>corr</sub> ≈ 10<sup>7</sup>, among the
            sharpest real transitions) gets γ ≈ 6×10<sup>&#x2212;4</sup>, the flattest possible curve.
            An ideal gas (N<sub>corr</sub> = 1, no real transition) gets γ = 2, the sharpest.
            Backwards at the level of the physics, not just the prefactor.{' '}
            <strong>(2) CLT self-contradiction.</strong> The 2/√N formula invokes the Central Limit
            Theorem, which requires <em>independent</em> variables — but N<sub>corr</sub> is defined
            as the count of <em>correlated</em> ones. The statistical motivation undercuts itself before
            you reach the sign.{' '}
            <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>
              See the γ Calculator for the full reductio with interactive BCS/ideal-gas examples →
            </Link>
          </p>
        </div>

        <h2>Full Equation</h2>
        <EquationDisplay label="The Coherence Function" size="lg">
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </EquationDisplay>
      </section>

      <RelatedConcepts currentPath="/equation-walkthrough" />
    </>
  );
}
