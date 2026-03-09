# NotebookLM Setup — Explorer Track

## Installation

```bash
pip install "notebooklm-py[browser]" --break-system-packages
playwright install chromium
```

## Authentication

NotebookLM requires Google account cookies. Two options:

### Option A: Browser login (if display available)
```bash
notebooklm login
# Follow the browser prompt, press ENTER when done
```

### Option B: Cookie export (WSL2 / headless)

1. In Chrome, navigate to `notebooklm.google.com` while logged into Google
2. Install [Cookie-Editor](https://cookie-editor.com/) extension
3. Click Cookie-Editor → Export → "Export as JSON"
4. Save the JSON, then run:

```bash
python3 << 'EOF'
import json, os

# Paste your cookie-editor JSON export here or load from file
cookies_raw = json.load(open("cookies_export.json"))

# Reshape to Playwright storage_state format
storage = {
    "cookies": [
        {
            "name": c["name"],
            "value": c["value"],
            "domain": c.get("domain", ".google.com"),
            "path": c.get("path", "/"),
            "expires": c.get("expirationDate", -1),
            "httpOnly": c.get("httpOnly", False),
            "secure": c.get("secure", True),
            "sameSite": c.get("sameSite", "Lax"),
        }
        for c in cookies_raw
    ],
    "origins": []
}

os.makedirs(os.path.expanduser("~/.notebooklm"), exist_ok=True)
out = os.path.expanduser("~/.notebooklm/storage_state.json")
json.dump(storage, open(out, "w"), indent=2)
print(f"Written to {out}")
EOF
```

5. Verify: `notebooklm auth check`

## The Synchronism Notebook

The helper script (`notebooklm_research.sh`) manages a persistent notebook called "Synchronism Research". It creates the notebook on first use and stores the ID in `~/.notebooklm/synchronism_notebook.json`.

Sources accumulate across sessions. Good sources to seed:
- Synchronism paper/preprint (if public)
- Key pages from synchronism-site.vercel.app
- Relevant arxiv papers on MOND, wide binaries, coherence, dark matter
- The coupling-coherence experiment writeup

## Notes

- Unofficial API — can break if Google changes internals
- Rate limits apply — don't spam sources or queries
- Auth cookies expire — re-export and run the reshape script if auth fails
- The notebook persists in Google's servers — not tied to local files
