# explorer/tools

Mechanical checks for the explorer track. These exist because exhortation has been tried and
measured to fail: the warning *"read the registration before executing it"* was written on the
morning of 2026-09-07 and did not prevent the 09-07 error it was meant to prevent.

## findings_lint.py

```bash
python3 tools/findings_lint.py                 # lint findings/ and logs/  (exit 1 on error-class hits)
python3 tools/findings_lint.py findings/x.md   # lint one file before committing it
python3 tools/findings_lint.py --rule R2 --verbose
```

| rule | severity | what it catches |
|------|----------|-----------------|
| **R1** PLACEHOLDER | error | unbackticked `ALL_CAPS_UNDERSCORE` tokens and `TODO`/`TBD`/`XXX`/`FIXME`/`PLACEHOLDER`. Backticked tokens pass — they are deliberate code references. |
| **R2** UNTAGGED WINDOW | error | a *parameter window* (a density range near `ρ_c`/`knee`/`window`/`envelope`/`exclusion`) quoted without the γ that produced it, in the same cell or sentence. |
| **R4** NO SAVED ARTIFACT | warn | the file cites a script that exists in the repo but saved no `<script>_output.txt`. |
| **R3** UNGROUNDED TABLE | report | numeric tokens in markdown tables that are not greppable in any artifact the file names. Reported as coverage — the corpus baseline is 87.7%, so read it as an anomaly detector, not a pass/fail. |

Run it on the file you are about to commit. The rules are tuned against the corpus as of
2026-09-09; measured hit counts and precision are in
`findings/a-findings-lint-that-catches-the-four-published-errors.md`.

### R5 CEILING BREACH (added 2026-09-10)

| rule | severity | what it catches |
|------|----------|-----------------|
| **R5** CEILING BREACH | warn | a velocity excess > **78.2 %** or a boost > **3.17×** quoted in a density-law context with no `unfloored`/`bare` tag on the line. |

This is the only rule anchored to a *physical* bound rather than a formatting habit, which is why it
can be strict. The floored galaxy-sector law `C = Ω_m + (1−Ω_m)·tanh(γ ln(1+ρ/ρ_c))` has `C ≥ Ω_m`,
so `B ≤ 1/Ω_m = 3.17` and the velocity excess is `≤ 1/√Ω_m − 1 = 78.2 %` — at every knee, every γ,
every density. **Any larger figure is necessarily the unfloored variant and has to say so.**

Added after the 2026-09-10 TEST-02 table published `+1.8×10⁴ %` as "the framework's published
calibration" — two days after `src/lib/equations.ts` was annotated with exactly this caution, and
four days after the 09-06 explorer finding published the floored row (`+78 %`) for the same knee.
Corpus rate at introduction, measured: **3 hits in 3 files of 322** — down from 28/19 before the
`excess`-vs-`% of` and `varies|spans` guards. Two are true (`boost by 5×` in
`wide-binary-density-slope-trilemma.md`; the quoted `+1.8×10⁴ %` in the 09-10 finding), one is a
false positive (`85% error` on a chemistry sound-velocity row). The `× larger | × the` guard that
removes parameter-ratio phrasings also costs two true positives in
`mond-efe-three-test-discriminator-verdict.md` — deliberate, because at warn severity a rule nobody
reads is worse than a rule that misses two lines.
