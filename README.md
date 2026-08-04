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

## Workflow builder (React/shadcn version)
A second, separate workflow canvas — same drag-and-drop idea as the Canvas page above, built as a real React + TypeScript + Tailwind + shadcn/ui component (using `framer-motion` for the drag physics and `lucide-react` for icons), per a specific component spec.

- **Source:** `react-demo/` — a standalone Vite + React + TypeScript project. `npm install` then `npm run dev` inside that folder to work on it.
- **Component:** `react-demo/src/components/ui/n8n-workflow-block-shadcnui.tsx`
- **Live:** https://dombundy08-hue.github.io/loom-demo-tool/workflow-builder/ — the built static output, committed to `workflow-builder/` at the repo root (`npm run build` inside `react-demo/`, then copy `react-demo/dist/*` into `workflow-builder/`). No CI — rebuild and re-copy manually after editing the component.

This is separate from the Canvas/Notes pages above — those are unaffected and still the ones used for actual Loom recordings unless told otherwise.
