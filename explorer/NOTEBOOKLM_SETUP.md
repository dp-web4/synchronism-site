# NotebookLM Setup — Explorer Track

## Installation

```bash
pip install "notebooklm-py[browser]" --break-system-packages
playwright install chromium
```

## Authentication

Google's session cookies are browser-fingerprint-bound — raw cookie export doesn't work reliably. The proven path is to login via a real browser and copy the resulting file.

### If display is available (Linux desktop, macOS)
```bash
notebooklm login
# Browser opens → log in → press ENTER
notebooklm auth check --test
```

### WSL2 / headless: login on Windows, copy to WSL

**On Windows (PowerShell):**
```powershell
pip install "notebooklm-py[browser]"
playwright install chromium
notebooklm login
# Browser opens → log in with your Google account → press ENTER
# File saved to C:\Users\<you>\.notebooklm\storage_state.json
```

**Then in WSL:**
```bash
cp /mnt/c/Users/<you>/.notebooklm/storage_state.json ~/.notebooklm/storage_state.json
notebooklm auth check --test
```

### Re-authentication (when cookies expire, typically every few weeks)

Repeat the Windows login and copy steps.

## The Synchronism Notebook

The helper script (`notebooklm_research.sh`) manages a persistent notebook called "Synchronism Research". The notebook ID is stored in `~/.notebooklm/synchronism_notebook.json` — it persists in Google's servers across sessions.

Usage:
```bash
./notebooklm_research.sh status              # Check auth + list sources
./notebooklm_research.sh ask "question"      # Query all sources
./notebooklm_research.sh add-url "https://…" # Add a URL as source
./notebooklm_research.sh web-research "query" # Run NotebookLM web research + import
./notebooklm_research.sh generate-mindmap    # Export mind map JSON
./notebooklm_research.sh generate-audio      # Generate MP3 overview
```

Good sources to add over time:
- Key pages from synchronism-site.vercel.app (already seeded: home, coupling-experiment)
- Relevant arxiv papers on MOND, wide binaries, coherence, dark matter
- Synchronism research repo docs (if public)

## Notes

- Unofficial API — can break if Google changes internals
- Rate limits apply — add a few seconds between bulk source additions
- Auth cookies expire — repeat the Windows login + copy when `auth check --test` fails
- The notebook accumulates sources over time — the explorer adds, never removes
