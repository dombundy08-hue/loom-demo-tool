# Loom demo tool

Reusable, draggable n8n-style workflow canvas for recording Upwork application Looms — split into two separate pages on purpose, so the script never appears anywhere on the screen you're sharing.

- **`index.html` (Canvas)** — https://dombundy08-hue.github.io/loom-demo-tool/
  Open this window and share *only this* in Loom. Just the workflow: drag nodes, add/remove them, click a badge to recolor, click a title to rename.
- **`notes.html` (Notes)** — https://dombundy08-hue.github.io/loom-demo-tool/notes.html
  Open this in a separate window (second monitor, or just don't share it). Has the full script to read from, plus a live reference list of the current nodes. Never share this window.

The two pages sync automatically through the browser's local storage — edit a node on the Canvas page and its title/order updates on the Notes page within the same browser, no manual copying.

## Reusing this for a new job
1. Open both pages.
2. On Notes, edit the script lines and the "tie-in" line for the specific job post.
3. On Canvas, rename/add/remove/drag nodes to match whatever you're demoing (GHL automation, website, workflow, etc).
4. Record in Loom with "Screen + Cam", sharing only the Canvas window.
