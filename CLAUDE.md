# POC Creator — Claude Code Orchestration Guide

This repository is an AI-powered POC creation pipeline. Claude Code drives the entire workflow from PRD intake through deployment. Each phase produces artifacts that feed the next phase.

## Technology Stack

- **Framework:** React 19 + TypeScript
- **Styling:** TailwindCSS v4 (CSS-first config via `@theme` in `src/index.css`)
- **Build:** Vite 6 with `@tailwindcss/vite` plugin
- **UI Validation:** Playwright skill MCP (enabled in `.claude/settings.json`)
- **Deployment:** GitHub Pages (default, zero-friction) or Vercel CLI (preview URLs)

## Commands

```bash
npm run dev              # Start Vite dev server (port 5173)
npm run build            # Production build to dist/
npm run preview          # Preview production build
npm run deploy:pages     # Deploy to GitHub Pages (default)
npm run deploy:vercel    # Deploy preview to Vercel
npm run deploy:vercel:prod  # Deploy production to Vercel
```

## Workflow Phases

### Phase 0: Environment Check (automatic)

Before any phase, verify the environment is ready:

1. Check if `node` and `npm` are available by running `node --version`
2. If missing: detect the OS and run `./setup.sh` (macOS/Linux) or `powershell -ExecutionPolicy Bypass -File setup.ps1` (Windows)
3. If `node_modules/` doesn't exist, run `npm install`
4. **Playwright skill check:** The first time the playwright-skill MCP is used, it needs its dependencies installed. Before running any Playwright validation, test if it's ready:
   ```bash
   cd ~/.claude/plugins/cache/playwright-skill/playwright-skill/*/skills/playwright-skill && node -e "require('playwright')" 2>/dev/null || npm run setup
   ```
   The skill directory may vary — look in `~/.claude/plugins/cache/playwright-skill/` for the actual path.
5. **GitHub CLI check:** Verify `gh` is available for GitHub Pages deployment. If missing, the setup script installs it, or the user can install manually from https://cli.github.com/
6. Confirm `npm run build` succeeds before proceeding

---

### Phase 1: PRD Analysis & Refinement

**Trigger:** User says "start phase 1", "analyze PRDs", or "refine PRDs"
**Input:** Markdown files in `docs/prds/`

**Process:**

1. Read every `.md` file in `docs/prds/`.
2. For each PRD:
   - Identify the core problem, target users, success metrics, and scope.
   - Flag ambiguities or gaps — ask the user for clarification if critical.
   - Extract functional requirements, non-functional requirements, and constraints.
3. Produce sliced artifacts in `docs/artifacts/`:
   - `docs/artifacts/user-stories/<prd-name>-stories.md` — user stories in "As a [role], I want [goal], so that [benefit]" format, with acceptance criteria.
   - `docs/artifacts/component-specs/<prd-name>-components.md` — React component tree, props interfaces, state management approach.
   - `docs/artifacts/api-specs/<prd-name>-api.md` — API endpoints (if any), request/response shapes, mock data strategy.
   - `docs/artifacts/data-models/<prd-name>-models.md` — TypeScript interfaces, data flow.
4. Create `docs/artifacts/implementation-plan.md` — build order, dependency graph, complexity estimate.

**Output:** Populated `docs/artifacts/` directory. Summarize findings to the user.

---

### Phase 2: UI Research & Design References

**Trigger:** User says "start phase 2", "research UI", or "find design references"
**Depends on:** Phase 1 artifacts

**Process:**

1. Read `docs/artifacts/component-specs/` and `docs/artifacts/user-stories/` to understand what the POC needs.
2. Use the **WebSearch** tool to find 3-5 top-performing UIs that solve a similar problem or have similar interaction patterns. Search queries:
   - "[use case] best UI examples"
   - "[use case] dashboard design inspiration"
   - "award winning [use case] web app"
   - "[use case] UI design dribbble behance"
3. For each reference found, create a file in `docs/design-references/`:
   - `docs/design-references/reference-<N>.md` containing:
     - Name & URL of the product
     - What makes it effective (layout, hierarchy, interactions)
     - Specific patterns to borrow (card layouts, navigation, color usage, typography, spacing)
     - TailwindCSS utility mapping — translate visual patterns into Tailwind classes
4. Create `docs/design-references/design-system.md` — unified design direction:
   - Color palette (as TailwindCSS `@theme` tokens)
   - Typography scale
   - Spacing and layout grid
   - Component visual patterns (buttons, cards, inputs, navigation)
   - Interaction patterns (hover states, transitions, loading states)

**Output:** Populated `docs/design-references/`. Summarize design direction to user.

---

### Phase 3+4 LOOP: Development ↔ UI Validation

**Trigger:** User says "start phase 3", "build it", or "develop"
**Depends on:** Phase 1 artifacts + Phase 2 design references

This is an **iterative loop** — develop, validate, fix, repeat until the UI passes.

```
  DEVELOP ──► VALIDATE (playwright-skill MCP)
     ▲               │
     │ fix      pass │
     └───────┘       ▼
                   DONE
```

#### Development Step

1. Read all artifacts from `docs/artifacts/` and the design system from `docs/design-references/design-system.md`.
2. Build in this order:
   a. **Design tokens** — update `@theme` in `src/index.css` with colors, fonts, spacing from the design system.
   b. **Shared UI components** — `src/components/ui/` (Button, Card, Input, Badge, etc.)
   c. **Layout shell** — `src/components/layout/` (Header, Sidebar, Footer, PageContainer). Use `react-router-dom` if multi-page.
   d. **Feature pages** — `src/pages/`, one per major user story. Compose from primitives + layout.
   e. **Hooks & logic** — `src/hooks/` for state and data fetching. Use mock data from `src/lib/mock-data.ts`.
   f. **Polish** — transitions, hover states, responsive breakpoints, loading/empty/error states.
3. Run `npm run build` — fix any TypeScript errors.
4. Run `npm run dev` to start the dev server.

#### Validation Step (Playwright Skill MCP)

Use the **playwright-skill** to validate the UI. For each page/route:

1. Navigate to the page at both desktop (1280x800) and mobile (375x812) viewports.
2. Take full-page screenshots.
3. Verify:
   - No broken layouts or overlapping elements
   - Text is readable and properly sized
   - Interactive elements are clickable and functional
   - Navigation works between pages
   - Responsive layout adapts correctly at mobile width
   - Colors and typography match the design system
4. Test interactive elements — buttons, forms, dropdowns, modals.

#### Loop Logic

- If validation finds issues → fix them in `src/` → re-validate
- If validation passes at both viewports → exit the loop
- Maximum 5 iterations — if still failing after 5, report remaining issues to the user

#### Coding Standards

- Functional components only, with TypeScript
- Named exports from every module
- One component per file
- TailwindCSS v4 `@theme` for design tokens — **NO tailwind.config.js**
- Prefer composition over prop drilling
- All text content should be realistic, not "Lorem ipsum"
- Mock data in `src/lib/mock-data.ts` as typed constants
- **recharts Tooltip formatter:** Use `(value)` not `(value: number)` — recharts v3 types pass `ValueType | undefined`. Cast with `Number(value)` inside the formatter body. Example: `formatter={(value) => \`$${Number(value).toLocaleString()}\`}`
- **Router:** Use `BrowserRouter` during development. Switch to `HashRouter` only when deploying to GitHub Pages (Phase 5 handles this automatically)

---

### Phase 5: Deployment

**Trigger:** User says "start phase 5", "deploy", or "ship it"
**Depends on:** Phase 3+4 loop passed

Two deployment targets are available. **GitHub Pages is the default** — it requires no extra accounts or login. Vercel is available for users who want instant preview URLs.

#### Option A: GitHub Pages (default)

1. **Ensure the repo has a GitHub remote.** If not, ask the user or create one with `gh repo create`.

2. **Detect the repo name** from the git remote URL:
   ```bash
   REPO_NAME=$(basename -s .git $(git config --get remote.origin.url))
   ```

3. **Set the Vite base path** in `vite.config.ts`. GitHub Pages serves from `/<repo>/`, so assets and routes need the subpath:
   - Add `base: '/<repo-name>/'` to the `defineConfig` object
   - Example: if repo is `poc-creator`, set `base: '/poc-creator/'`

4. **Switch to HashRouter for static hosting.** `BrowserRouter` returns 404 on page refresh with GitHub Pages. In `src/App.tsx`:
   - Change `import { BrowserRouter` to `import { HashRouter`
   - Replace `<BrowserRouter>` / `</BrowserRouter>` with `<HashRouter>` / `</HashRouter>`

5. **Build and deploy:**
   ```bash
   npm run deploy:pages
   ```
   This builds to `dist/` and publishes to the `gh-pages` branch.

6. **Enable GitHub Pages** in the repo settings. Use the GitHub CLI if available:
   ```bash
   gh api repos/{owner}/{repo}/pages -X POST -f source.branch=gh-pages -f source.path=/ 2>/dev/null || true
   ```
   **If `gh` is not installed or the command fails**, tell the user to enable it manually:
   - Go to `https://github.com/{owner}/{repo}/settings/pages`
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**, folder: **/ (root)**
   - Click **Save**

7. **Report the live URL:** `https://<user>.github.io/<repo>/`

8. **Use the playwright-skill** to visit the live URL and take a final screenshot to verify.

9. **After deployment**, revert the router and base path changes so local development continues to work:
   - Remove `base: '/<repo-name>/'` from `vite.config.ts` (or set back to `'/'`)
   - Switch `HashRouter` back to `BrowserRouter` in `src/App.tsx`
   - Do NOT commit these reverts — they were only needed for the deploy build

**Output:** Live GitHub Pages URL.

#### Option B: Vercel (if user says "deploy to Vercel")

1. Ensure `base` in `vite.config.ts` is `'/'` (default — not a subpath).
2. Run `npm run deploy:vercel` for preview or `npm run deploy:vercel:prod` for production.
3. If the user hasn't authenticated, Vercel CLI will prompt them to log in (interactive, opens browser).
4. Report the deployment URL.
5. Use the **playwright-skill** to verify the deployed version.

**Output:** Live Vercel URL.

---

## Full Pipeline

**Trigger:** User says "run full pipeline" or "create POC"

Execute all phases sequentially:

1. **Phase 0** — Environment check
2. **Phase 1** — PRD analysis → pause, report to user
3. **Phase 2** — UI research → pause, report to user
4. **Phase 3+4** — Development ↔ validation loop → pause, report to user
5. **Phase 5** — Deploy → report live URL

Pause between phases to report progress and allow user feedback before continuing.

---

## Important Conventions

- Always read existing artifacts before generating new ones
- Never overwrite user-provided PRDs in `docs/prds/`
- Ask the user before making significant architectural decisions
- Keep the POC focused — avoid over-engineering
- Use existing Claude Code skills and MCPs — don't build custom tooling
- TailwindCSS v4 only — CSS-first `@theme` configuration, no `tailwind.config.js`
