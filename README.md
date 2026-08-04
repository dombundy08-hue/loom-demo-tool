# Loom demo tool

Reusable, draggable n8n-style workflow canvas for recording Upwork application Looms — split into two separate pages per demo, on purpose, so the script never appears anywhere on the screen you're sharing.

## Demos
Each demo is a `Canvas` + `Notes` pair, sharing `style.css` at the repo root but with its own saved state (different browser-storage key) so they never overwrite each other.

| Demo | Canvas (share this) | Notes (never share) |
|---|---|---|
| Automated lead outreach | https://dombundy08-hue.github.io/loom-demo-tool/ | https://dombundy08-hue.github.io/loom-demo-tool/notes.html |
| Website build | https://dombundy08-hue.github.io/loom-demo-tool/website/ | https://dombundy08-hue.github.io/loom-demo-tool/website/notes.html |
| Automatic GHL calendar & booking | https://dombundy08-hue.github.io/loom-demo-tool/ghl-calendar/ | https://dombundy08-hue.github.io/loom-demo-tool/ghl-calendar/notes.html |

- **Canvas** — just the workflow. Drag nodes, add/remove them, click a badge to recolor, click a title to rename. This is the only window you share in Loom.
- **Notes** — the full script to read from, plus a live reference list of the current nodes. Open in a separate window (second monitor ideally) and never share it.

The two pages in a pair sync automatically through the browser's local storage — edit a node on Canvas and it updates on Notes in the same browser, no manual copying.

## Reusing this for a new job
1. Pick the demo that's the closest match (or copy one of the existing folders as a new starting point for a workflow that doesn't exist yet).
2. Open both pages in that pair.
3. On Notes, edit the script lines and the "tie-in" line for the specific job post.
4. On Canvas, rename/add/remove/drag nodes to match whatever you're demoing.
5. Record in Loom with "Screen + Cam", sharing only the Canvas window.

## Adding a brand-new demo
Copy an existing pair's folder (e.g. `website/`) to a new folder name, then in the new `state.js` change the `KEY` constant (must be unique) and the `DEFAULT` object (title, nodes, wires, script). `index.html`/`notes.html` don't need edits — they just read whatever `state.js` in the same folder provides.

## Known gotcha (fixed 2026-08-04)
`render()` used to clear the whole canvas with `innerHTML = ""`, which deleted the `<svg>` element holding the animated dashed connector lines — they never actually drew. Fixed by removing only `.node` elements on re-render, not the SVG. If a future edit reintroduces a full `innerHTML` wipe of `#canvas-inner`, this will silently break again.
