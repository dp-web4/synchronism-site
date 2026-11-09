'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

type SortKey = 'name' | 'r' | 'category';
type SortDir = 'asc' | 'desc';

// Provenance trace (2026-11-02, from explorer finding
// chemistry-table-rows-are-not-traceable-and-the-z-null-fails-on-the-real-rows.md, 2026-10-31).
// The table dates from the site's initial commit (1e805d5, 2026-02-21) and was never regenerated from the archive.
// trace: 'traced'    = r and session both confirmed in the archive
//        'corrected' = r and/or session replaced on 2026-11-02 with the archive value for this property against γ
//        'untraced'  = the r shown could not be matched to this property in the cited session (see note)
type Trace = 'traced' | 'corrected' | 'untraced';
const phenomena: { name: string; note?: string; r: number; category: string; regime: number; session: string; trace: Trace }[] = [
  { name: 'Sound velocity', note: 'r(v, 1/γ_phonon) ≡ r(v, θ_D) exactly, because γ_phonon = 2T/θ_D; session was shown as #47 (material design)', r: 0.982, category: 'Propagation', regime: 1, session: '#109', trace: 'corrected' },
  { name: 'Electronegativity', note: 'Pauling χ vs 1/γ_optical, and γ_optical = 13.6 eV / IE: this is χ vs ionization energy (0.938 archive; 0.956 on the explorer recomputation). The 0.979 shown until 2026-11-02 was chemical softness (#118) against the same 1/IE', r: 0.938, category: 'Bonding', regime: 1, session: '#115', trace: 'corrected' },
  { name: 'Bulk modulus', note: 'vs 1/γ_phonon (= θ_D); drops to 0.37 without diamond (jackknife). 0.967 shown until 2026-11-02 was not found for B', r: 0.712, category: 'Mechanical', regime: 1, session: '#110', trace: 'corrected' },
  { name: 'Thermal conductivity', note: 'archive κ result (#65); 0.883 for metals only (#108). The 0.961 shown until 2026-11-09 was redox potential E° (#72), not κ', r: 0.804, category: 'Transport', regime: 1, session: '#65', trace: 'corrected' },
  { name: 'Electrical conductivity', note: 'Failed: the session’s own verdict is “WRONG SIGN” (σ vs γ_phonon). Shown as +0.955 “Coherence helps” (#68) until 2026-11-02', r: -0.414, category: 'Transport', regime: 1, session: '#81', trace: 'corrected' },
  { name: 'Debye temperature', note: 'by construction: γ_phonon = 2T/θ_D contains θ_D, so at fixed T the correlation is exactly 1 and carries nothing. The 0.948 shown until 2026-11-09 belongs to the T_c (#62) and Richard’s-rule (#77) rows', r: 0.948, category: 'Thermal', regime: 1, session: '#78', trace: 'untraced' },
  { name: 'Piezoelectricity d₃₃', note: 'post-hoc fit d₃₃ ∝ γε; the direction stated in advance came out backward (Failed on /gamma-boundary). Session was shown as #110', r: 0.940, category: 'Response', regime: 2, session: '#93', trace: 'corrected' },
  { name: 'Superconducting T_c', note: 'correlation of a post-hoc fit, proxy not stated in this table (it cannot be a θ_D-type γ_phonon: r(T_c, θ_D) ≈ −0.47 on 18 elements in a visitor persona’s check, not re-run); the magnitude prediction is 6.5× wrong (Failed on /gamma-boundary). Shown as 0.923 (#95, electro-optic) until 2026-11-02', r: 0.948, category: 'Phase transition', regime: 1, session: '#62', trace: 'corrected' },
  { name: 'Young\'s modulus', note: 'vs 1/γ_phonon (= θ_D); drops to 0.60 without diamond (jackknife). Shown as 0.912 (#58, fluorescence) until 2026-11-02', r: 0.920, category: 'Mechanical', regime: 1, session: '#110', trace: 'corrected' },
  { name: 'Shear modulus', note: 'vs 1/γ_phonon (= θ_D); drops to 0.63 without diamond (jackknife). Shown as 0.901 (#59, no such session) until 2026-11-02', r: 0.936, category: 'Mechanical', regime: 1, session: '#110', trace: 'corrected' },
  { name: 'Refractive index', note: 'not found in the archive; its refractive-index result is 0.986 (#76, Moss rule). Cited #85 is polarizability', r: 0.887, category: 'Optical', regime: 1, session: '#85', trace: 'untraced' },
  { name: 'Seebeck coefficient', note: 'not located in the archive; cited #92 is glass thermal conductivity', r: 0.834, category: 'Thermoelectric', regime: 1, session: '#92', trace: 'untraced' },
  { name: 'Specific heat C_v', note: 'not located (the archive’s 0.965 is ΔC/Cₙ); cited #80 is sound speed', r: 0.756, category: 'Thermal', regime: 2, session: '#80', trace: 'untraced' },
  { name: 'Thermal expansion', note: 'not found; the archive has 0.940 for α vs 1/T_m (#79), a different variable. Cited #83 is Grüneisen', r: 0.723, category: 'Response', regime: 2, session: '#83', trace: 'untraced' },
  { name: 'Boiling point', note: 'not located; cited #100 is Fermi energy', r: 0.681, category: 'Phase transition', regime: 3, session: '#100', trace: 'untraced' },
  { name: 'Melting point', note: 'not found; the archive has 0.948 for Richard’s rule (#77), a different quantity. Cited #98 is thermionic emission', r: 0.470, category: 'Phase transition', regime: 3, session: '#98', trace: 'untraced' },
  { name: 'Magnetic anisotropy (RE)', note: 'cited #130 is an exciton session', r: -0.434, category: 'Magnetic', regime: 2, session: '#130', trace: 'untraced' },
  { name: 'SC penetration depth', r: 0.280, category: 'Superconductivity', regime: 1, session: '#105', trace: 'traced' },
  { name: 'Thermionic emission', note: 'thermionic emission is session #98; cited #115 is electronegativity', r: 0.150, category: 'Barrier', regime: 3, session: '#115', trace: 'untraced' },
  { name: 'Coordination number CN', r: 0.116, category: 'Topology', regime: 0, session: '#123', trace: 'traced' },
  { name: 'Hall coefficient R_H', note: 'no correlation: Failed (same result as /gamma-boundary; not a counting property)', r: 0.001, category: 'Transport', regime: 0, session: '#102', trace: 'traced' },
  { name: 'Valence electron count', r: -0.161, category: 'Counting', regime: 0, session: '#125', trace: 'traced' },
  { name: 'Magnetic susceptibility', note: 'no correlation: Failed (same result as /gamma-boundary; not a counting property)', r: 0.000, category: 'Magnetic', regime: 0, session: '#82', trace: 'traced' },
];

const traceLabels: Record<Trace, { label: string; color: string }> = {
  traced: { label: 'Traced', color: '#10b981' },
  corrected: { label: 'Corrected 11-02', color: 'var(--color-accent-blue)' },
  untraced: { label: 'Untraced', color: '#ef4444' },
};

const regimeLabels: Record<number, { label: string; color: string }> = {
  0: { label: 'Neutral', color: 'var(--color-text-muted)' },
  1: { label: 'Coherence helps', color: '#10b981' },
  2: { label: 'Incoherence helps', color: '#f59e0b' },
  3: { label: 'Barrier-dominated', color: '#ef4444' },
};

function rColor(r: number): string {
  const abs = Math.abs(r);
  if (abs >= 0.9) return '#10b981';
  if (abs >= 0.7) return 'var(--color-accent-blue)';
  if (abs >= 0.4) return '#f59e0b';
  return '#ef4444';
}

export default function ChemistryCorrelationExplorer() {
  const [sortKey, setSortKey] = useState<SortKey>('r');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [regimeFilter, setRegimeFilter] = useState<number | null>(null);

  const sorted = useMemo(() => {
    let items = regimeFilter !== null
      ? phenomena.filter(p => p.regime === regimeFilter)
      : [...phenomena];

    items.sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'r') cmp = (b.trace === 'untraced' ? -1 : Math.abs(b.r)) - (a.trace === 'untraced' ? -1 : Math.abs(a.r));
      else if (sortKey === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortKey === 'category') cmp = a.category.localeCompare(b.category);
      return sortDir === 'desc' ? cmp : -cmp;
    });
    return items;
  }, [sortKey, sortDir, regimeFilter]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  return (
    <>
      <Breadcrumbs currentPath="/chemistry-correlation-explorer" />
      <h1>Chemistry Correlation Explorer</h1>
      {/* Badge added 2026-10-08: graduate-physics visitor found this tool unbadged on page and index */}
      <ValidationBadge status="reparametrization" label="r values are post-hoc fits in a γ proxy that contains the target; γ assignments and the row list are unpublished, so r carries no evidence either way until the procedure is published" />
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
        <strong>Read the r values with this caveat first:</strong> the per-material γ (or N<sub>corr</sub>) assignment table has not been
        published. If γ was set per material with the property in view, a high r between γ and that property carries no
        information. Until the assignments are published, treat every r on this page as unverified.
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '0.4rem' }}>
        Status on the Interactive Tools index: <strong>Artifact Lesson</strong> (an operational state, not a level: a tool kept to
        show how a high r can come from monotonicity alone, not a verdict) &middot; Claim status: <strong>Reparametrization</strong>, the
        badge above. (Added 2026-10-15, to match the index.)
      </p>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Browse the chemistry phenomena tested against &#x03B3;. Sort by correlation strength,
          filter by regime. These 23 rows were curated from a chemistry corpus of 2,671 sessions (the archive&apos;s &ldquo;1,703&rdquo; is a type counter read at session #1,840, not a corpus size or a count of distinct phenomena; see the note under the table).
        </p>

        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '0.5rem',
          padding: '0.875rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Methodological caveat:</strong>{' '}
          This display shows 23 hand-curated rows from a 2,671-session chemistry corpus. Selecting the highest-correlation
          rows from a large pool inflates apparent effect sizes by construction (multiple-comparison
          artifact). The sessions&apos; results are also not statistically independent &mdash; many share
          underlying physical mechanisms. The r-values shown are Pearson correlations from exploratory
          curve-fitting, not held-out prediction accuracy. The{' '}
          <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>{' '}
          acknowledges this; the full null distribution and out-of-sample decomposition remain open
          research questions.
          <br /><br />
          <strong style={{ color: '#f59e0b' }}>The 23 rows are not 23 independent tests.</strong>{' '}
          Several rows are tied together by textbook relations, so a framework that matches one of them
          largely matches the others for free. Sound velocity, Debye temperature, bulk modulus, Young&apos;s
          modulus and shear modulus are linked by elasticity (v &#x221D; &#x221A;(modulus/density)) and by the
          Debye model (&#x03B8;<sub>D</sub> &#x221D; v). Electrical and thermal conductivity are linked in metals by
          the Wiedemann&ndash;Franz law. Those two groups alone reduce 7 rows to roughly 2 independent ones. Specific
          heat per unit mass is close to 3R/M (Dulong&ndash;Petit), which falls steadily with atomic mass and so
          roughly with atomic number Z. That is a trend with mass, which is not the same as a trend with Z across the whole table.
          The effective number of independent tests is therefore much smaller than 23.
          <br /><br />
          <strong style={{ color: '#ef4444' }}>What the 23 rows are, and the null run on them:</strong>{' '}
          the rows are <strong>23 properties</strong>, each a correlation over a different set of materials from a different
          session (n = 19–33; some include compounds). There is no single 23-material sample. On the 10 property rows that could be
          recovered from the session scripts, a polynomial in atomic number Z <strong>fails</strong> to reproduce the
          correlations: |r(property, Z)| &#x2264; 0.53 and a quadratic in Z reaches R &#x2264; 0.51, against framework r of
          0.60–0.98 (site explorer, pre-registered, 2026-10-31). So the high r values do not come from a trend with Z. They
          come from the proxy being a renamed textbook quantity: &#x03B3;<sub>phonon</sub> = 2T/&#x03B8;<sub>D</sub>, so every
          correlation with 1/&#x03B3;<sub>phonon</sub> equals the same correlation with the Debye temperature &#x03B8;<sub>D</sub>,
          exactly; and &#x03B3;<sub>optical</sub> = 13.6&nbsp;eV / ionization energy, so &ldquo;electronegativity vs
          1/&#x03B3;<sub>optical</sub>&rdquo; is electronegativity against ionization energy, a relation Mulliken&apos;s definition
          of electronegativity builds in. That is why the Reparametrization badge stands.
          <br /><br />
          <strong style={{ color: '#ef4444' }}>Most rows do not trace to their cited session.</strong>{' '}
          The same audit checked each row against the archive. In the 16 high-r rows, no cited session is about the
          property (the closest is #83, Grüneisen, for thermal expansion), and several r values belong to other properties. One
          documented failure was shown as a success: electrical conductivity was listed until 2026-11-02 as +0.955 &ldquo;Coherence helps&rdquo;,
          but the session that tested it (#81) found r = &minus;0.414 and recorded &ldquo;WRONG SIGN&rdquo;. The table below now
          has a <em>Trace</em> column: rows corrected to the archive value on 2026-11-02, and rows whose number could not be
          found (kept as rows, marked <em>Untraced</em>, so the gap stays visible; since 2026-11-09 they print no number, because a value that could not be traced to its own property should not read as a result). The three elastic-modulus rows rest on diamond:
          without it, r falls to 0.60 (Young&apos;s), 0.63 (shear) and 0.37 (bulk).
          <details style={{ marginTop: '0.5rem' }}>
            <summary style={{ cursor: 'pointer' }}>Earlier versions of this paragraph</summary>
            Until 2026-10-31 this page said a polynomial-in-Z null &ldquo;fit to the same targets&rdquo; matched the r values
            within 0.07. That null was run on synthetic curves (√Z, log Z, Z<sup>1/3</sup>), not on the rows. From 2026-10-31 to
            2026-11-02 it said the null had not been run on the real data; it has now been run and fails.
          </details>
          The &ldquo;47 research contributions&rdquo; cited elsewhere on the site are <strong>audited and
          demoted</strong>, not uncharacterized (corrected 2026-07-24; this caveat previously said
          &ldquo;not audited&rdquo;): every contribution the (LLM-agent) audit examined resolved to a
          reparametrization, an internal-consistency finding, or a null result (top-3 swept 2026-07-03,
          0/3 novel; the archive&apos;s later sessions demoted the remainder, and the count itself is a
          flagged ~57% overcount). What remains true is narrower: none was run against <em>this page&apos;s
          polynomial null specifically</em>. See the{' '}
          <a href="/honest-assessment#research-outputs" style={{ color: 'var(--color-accent-blue)' }}>Research
          Outputs audit</a> for the operative verdict.
        </div>

        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.5rem',
          padding: '0.875rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>What &#x03B3; means here, and why the flagship row is
          suspect (added 2026-07-30, two simulated-visitor personas independently flagged this):</strong>{' '}
          &#x03B3; = 2/&#x221A;N<sub>corr</sub> is <strong>audited-negative and sign-inverted for every
          collective system</strong> &mdash; see the{' '}
          <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</a>:
          high &#x03B3; means <em>few</em> correlated particles (gas-like), low &#x03B3; means <em>many</em>
          (BCS-superconductor-like). This page&apos;s top result &mdash; sound velocity, r&nbsp;=&nbsp;+0.982,
          highest in the stiffest, most strongly-bonded, most collective solids (diamond &#x2248; 12,000 m/s
          vs air &#x2248; 340 m/s) &mdash; is therefore a <strong>positive</strong> correlation with &#x03B3;
          running in the direction that formula assigns <em>low</em> N<sub>corr</sub> to the most collective
          materials, the same inversion badged audited-negative one click away. Two readings are both live and
          neither is stated on this page: either the per-material &#x03B3; values were computed from
          2/&#x221A;N<sub>corr</sub>, in which case this table&apos;s r-column inherits the refuted sign; or
          &#x03B3; was fit per material independently of N<sub>corr</sub>, in which case r&nbsp;=&nbsp;0.982 is
          a goodness-of-fit statistic for a free parameter, not a correlation with anything the framework
          predicts. Which branch applies to this dataset is an open bookkeeping question, not yet resolved
          here.
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
          <strong>What &ldquo;Regime&rdquo; means:</strong> the chemistry track&apos;s label for how each property was
          modelled against &#x03B3; (defined on{' '}
          <a href="/handling-failure" style={{ color: 'var(--color-accent-blue)' }}>Handling Failure</a>).{' '}
          <em>Coherence helps</em>: property modelled as rising with 1/&#x03B3; (transport, stiffness).{' '}
          <em>Incoherence helps</em>: property modelled as rising with &#x03B3; itself (soft-mode response such as
          piezoelectricity), so a positive r in this regime is a positive correlation with &#x03B3;.{' '}
          <em>Barrier-dominated</em>: thermally activated, &#x221D; exp(&minus;E/kT), where &#x03B3; is negligible.{' '}
          <em>Neutral</em>: counting properties (coordination number CN, valence electrons) on which &#x03B3; has no
          bearing. Hall coefficient and magnetic susceptibility also carry this label, but they are not counting properties: the label
          records that no correlation was found, and /gamma-boundary lists both as failures. Four rows carry two verdicts across the two
          chemistry pages (Hall, susceptibility, piezoelectricity, T<sub>c</sub>); the row notes give one status each, and it is the failure
          (reconciled 2026-10-31, graduate-physics simulated-visitor persona). The labels were assigned after the fits, not predicted in advance.
        </p>
        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
          <strong>What r is computed against (added 2026-10-22, researcher simulated-visitor persona):</strong> not C, and not
          one shared &#x03B3;. Each r is the Pearson correlation between the property and that session&apos;s best-fitting
          expression in a <em>domain-specific</em> &#x03B3; proxy (for phonon properties &#x03B3;<sub>phonon</sub> = 2T/&#x03B8;<sub>D</sub>, a
          Debye-temperature ratio), chosen after looking at the data. So the sign of r says whether the property rises with
          that expression, and the regime label says whether the expression rises with &#x03B3; or with 1/&#x03B3;. For example,
          d&#x2083;&#x2083; = +0.940 is the fit d&#x2083;&#x2083; &#x221D; &#x03B3;&nbsp;&times;&nbsp;&#x03B5; (permittivity), whence &ldquo;incoherence helps&rdquo;
          (Synchronism research archive, <code>Research/Chemistry/Phase2_Synthesis.md</code> and <code>Framework_Summary.md</code>,
          where the piezoelectric result is filed under chemistry session #93). For the specific-heat row (+0.756) the
          expression and sign convention are <strong>not recorded</strong> in the source table: the archive&apos;s heat-capacity
          entry quotes a different fit (r = &minus;0.988 against the Debye form). Read that row&apos;s sign as unverified.
        </p>
        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
          <strong>The top rows are close to one identity, not five correlations (added 2026-10-24, researcher simulated-visitor
          persona).</strong> The phonon proxy &#x03B3;<sub>phonon</sub> = 2T/&#x03B8;<sub>D</sub> contains the Debye temperature, so the
          &ldquo;Debye temperature, r = +0.948&rdquo; row correlates &#x03B8;<sub>D</sub> with a function of &#x03B8;<sub>D</sub>: high r
          there is <em>by construction</em>. Sound velocity and the three elastic moduli inherit it, because in the Debye model
          &#x03B8;<sub>D</sub> &#x221D; v<sub>s</sub> and v<sub>s</sub> &#x221D; &#x221A;(modulus/density). Those five rows (marked in the table) are one
          definitional relation seen five ways. They show how a high r arises, which is this page&apos;s lesson; they are not
          evidence that coherence organizes the properties.
        </p>

        {/* Regime filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <button
            onClick={() => setRegimeFilter(null)}
            style={{
              background: regimeFilter === null ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
              color: regimeFilter === null ? '#fff' : 'var(--color-text-secondary)',
              border: '1px solid var(--color-dark-border)',
              borderRadius: '4px',
              padding: '0.25rem 0.6rem',
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}
          >
            All ({phenomena.length})
          </button>
          {Object.entries(regimeLabels).map(([r, info]) => {
            const count = phenomena.filter(p => p.regime === parseInt(r)).length;
            return (
              <button
                key={r}
                onClick={() => setRegimeFilter(regimeFilter === parseInt(r) ? null : parseInt(r))}
                style={{
                  background: regimeFilter === parseInt(r) ? info.color : 'var(--color-dark-surface)',
                  color: regimeFilter === parseInt(r) ? '#fff' : info.color,
                  border: `1px solid ${info.color}`,
                  borderRadius: '4px',
                  padding: '0.25rem 0.6rem',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                {info.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Table */}
        {/* 2026-09-15: no per-row Z-null values exist in this dataset, so the null is stated at the table head instead of as a column */}
        <p style={{ fontSize: '0.85rem', color: '#f87171', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
          <strong>Read before sorting: the r column is not evidence.</strong> Each r is a post-hoc fit against a γ proxy that contains the target (null-model status above), and how &#x03B3; was assigned to each material is
          undocumented, so the r values are <strong>not reproducible from this site</strong>: the per-material N<sub>corr</sub> (or &#x03B3;) assignment table has not been published, and the full 1,703-row file is not linked. Per-row null values are not in this page&apos;s data, so they are not shown beside each r.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th onClick={() => toggleSort('name')} style={{ textAlign: 'left', padding: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                  Property {sortKey === 'name' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th onClick={() => toggleSort('r')} style={{ textAlign: 'right', padding: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                  r {sortKey === 'r' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th onClick={() => toggleSort('category')} style={{ textAlign: 'left', padding: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                  Category {sortKey === 'category' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Regime</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Session</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Trace</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map(p => (
                <tr key={p.name} style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                    {p.name}
                    {'note' in p && p.note && (
                      <em style={{ display: 'block', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{p.note}</em>
                    )}
                  </td>
                  <td style={{ textAlign: 'right', padding: '0.5rem', fontFamily: 'monospace', color: rColor(p.r), fontWeight: 'bold' }}>
                    {p.trace === 'untraced' ? <span title="This value could not be traced to this property, so it is not printed">—</span> : <>{p.r > 0 ? '+' : ''}{p.r.toFixed(3)}</>}
                  </td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-muted)' }}>{p.category}</td>
                  <td style={{ padding: '0.5rem', color: regimeLabels[p.regime].color, fontSize: '0.8rem' }}>
                    {regimeLabels[p.regime].label}
                  </td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{p.session}</td>
                  <td style={{ padding: '0.5rem', color: traceLabels[p.trace].color, fontSize: '0.8rem' }}>
                    {traceLabels[p.trace].label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Showing {sorted.length} of 23 curated phenomena. The archive&apos;s &ldquo;1,703 phenomenon
          types&rdquo; is not a count of distinct phenomena: from session #138 on, every chemistry session was logged as
          exactly one new type, so the type number equals the session number minus 137 with zero exceptions over 824
          checked pairs. 1,703 is that counter at session #1,840; the corpus ran to 2,671 sessions, and pairing 1,703 with
          2,671 was a partial-update error in the archive (found 2026-10-09 when a visitor saw 1,840 here and 2,671 on
          another page; source: whitepaper chemistry section, &ldquo;phenomenon_type = session &minus; 137&rdquo;).
        </p>
      </section>

      <RelatedConcepts currentPath="/chemistry-correlation-explorer" />
    </>
  );
}
