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
