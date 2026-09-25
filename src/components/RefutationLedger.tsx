import { REFUTATION_ROWS, REFUTATIONS_EXECUTED, ROOTS_SENTENCE } from '@/lib/ledger';

/**
 * One table for "which six?" (2026-09-25). Data lives in src/lib/ledger.ts; change it there.
 */
export default function RefutationLedger() {
  const th: React.CSSProperties = { textAlign: 'left', padding: '0.4rem 0.5rem', borderBottom: '1px solid var(--color-dark-border)', color: 'var(--color-text-secondary)', fontWeight: 600, verticalAlign: 'bottom' };
  const td: React.CSSProperties = { padding: '0.45rem 0.5rem', borderBottom: '1px solid var(--color-dark-border)', color: 'var(--color-text-secondary)', verticalAlign: 'top' };
  return (
    <div id="refutation-ledger" className="card" style={{ scrollMarginTop: '5rem', marginBottom: '1.5rem', borderLeft: '3px solid #ef4444' }}>
      <h2 style={{ marginTop: 0, fontSize: '1.15rem' }}>Which six? The refutation ledger in one table</h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: '75ch' }}>
        Every &ldquo;{REFUTATIONS_EXECUTED} refutations&rdquo; on this site means these rows. {ROOTS_SENTENCE}.
        Rows #1 and #2 test one inequality (the boost cap) on two observables, so the independent count is at most 5.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th style={th}>#</th>
              <th style={th}>What failed</th>
              <th style={th}>Test ID</th>
              <th style={th}>Root</th>
              <th style={th}>Which C</th>
              <th style={th}>Data</th>
              <th style={th}>Convention-dependent?</th>
            </tr>
          </thead>
          <tbody>
            {REFUTATION_ROWS.map((r) => (
              <tr key={r.n}>
                <td style={td}>{r.n}</td>
                <td style={td}>{r.what}</td>
                <td style={{ ...td, whiteSpace: 'nowrap' }}>{r.ids}</td>
                <td style={td}>{r.root}</td>
                <td style={td}>{r.whichC}</td>
                <td style={td}>{r.data}</td>
                <td style={td}>{r.convention}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p id="lensing-ceiling" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', marginTop: '0.9rem', scrollMarginTop: '5rem' }}>
        <strong style={{ color: '#f87171' }}>Note on #1&ndash;#2: the convention question has a data answer (added 2026-09-25).</strong>{' '}
        On SPARC, whether the cap kills depends on which cosmic ratio sets it: 1/&Omega;<sub>m</sub> = 3.17 (the site&apos;s),
        (&Omega;<sub>m</sub>&minus;&Omega;<sub>b</sub>)/&Omega;<sub>b</sub> = 5.39, or &Omega;<sub>m</sub>/&Omega;<sub>b</sub> = 6.39.
        Galaxy&ndash;galaxy weak lensing reaches far lower accelerations than rotation curves. The KiDS-1000 lensing RAR
        (Brouwer et al. 2021, A&amp;A 650, A113) follows the extrapolated MOND branch down to g<sub>bar</sub> &asymp; 10<sup>&minus;15</sup> m/s&sup2;,
        where the boost the data require is about 110 at 10<sup>&minus;14</sup> and 350 at 10<sup>&minus;15</sup>.
        Hidden hot gas lowers the required boost in proportion to the extra mass. Grant a 0.3 dex allowance below the MOND branch
        and put every cosmic baryon inside the lensing radius (&times;5 on the baryons), and the requirement at 10<sup>&minus;14</sup>
        is still 11: <strong>1.7&times; the most permissive cap (6.39), 3.5&times; the site&apos;s</strong>. At 10<sup>&minus;13</sup> the same allowance
        lets the two baryon-budget caps through, so the kill rests on the two lowest bins, which sit 0.4&ndash;4 Mpc from the lens, where
        isolation cuts and neighbouring haloes matter. So the <em>registered</em> TEST-09 kill is convention-dependent, and the
        <em> ceiling it tests</em> is not. The one cap that nearly survives is a floor at &Omega;<sub>b</sub> (cap 1/&Omega;<sub>b</sub> = 20.3, what the floor becomes if there is
        no cold dark matter). It passes only at 10<sup>&minus;14</sup> with every allowance granted and fails at 10<sup>&minus;15</sup>.
        Each cap is a ratio built from &Omega;<sub>m</sub>, and &Omega;<sub>m</sub> counts cold dark matter, so which cap is right depends on the
        open dark-matter question (see <a href="#verdict" style={{ color: 'var(--color-accent-blue)' }}>the Verdict</a>) as much as on convention.
        Whether this changes the headline count is the project lead&apos;s decision (&ldquo;dp&rdquo; on this site); the count stays at {REFUTATIONS_EXECUTED}.
        First set out by the explorer on 2026-09-02 and left off every page but one until today. Recomputed with the hidden-baryon allowance in{' '}
        <code>maintainer/scripts/lensing_ceiling_every_convention.py</code> (+ <code>_output.txt</code>).
      </p>
    </div>
  );
}
