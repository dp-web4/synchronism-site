// Where the scripts and pre-registration commits cited on this site live. Added 2026-11-25 after a researcher
// simulated-visitor persona found 31 script paths and several commit hashes as plain text on four pages, with the only
// repository link pointing at the research archive, where the scripts are not.
const SITE_REPO = 'https://github.com/dp-web4/synchronism-site';

export default function ScriptsNote() {
  return (
    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1rem' }}>
      <strong>Where the code is:</strong> every <code>maintainer/scripts/&hellip;</code>, <code>explorer/&hellip;</code> path and every
      short commit hash on this page is in the <em>site</em> repository,{' '}
      <a href={`${SITE_REPO}/tree/main`} style={{ color: 'var(--color-accent-blue)' }}>github.com/dp-web4/synchronism-site</a>, not the research
      archive. A path opens at <code>{SITE_REPO}/blob/main/&lt;path&gt;</code>; a pre-registration commit at{' '}
      <code>{SITE_REPO}/commit/&lt;hash&gt;</code>. The commit date is the evidence that the prediction came before the run.
    </p>
  );
}
