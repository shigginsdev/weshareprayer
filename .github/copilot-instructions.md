<!-- Repository-specific Copilot/AI instructions for contributors and automation agents -->
# We Share Prayer — Copilot Instructions

This file contains concise, actionable guidance for AI coding agents working in this repository.

1. Quick dev commands
- Dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `tsc -b && vite build`).
- Preview production build: `npm run preview` (runs `vite preview`).

2. Big-picture architecture
- Framework: React + TypeScript + Vite. Entry point: `src/main.tsx`.
- Router: `react-router-dom` (routes defined in `src/App.tsx`). Key routes: `/`, `/compose`, `/post/:id`.
- Layout: `src/App.tsx` implements the 3-column layout (Topbar, SidebarLeft, feed, SidebarRight).
- Pages: `src/pages/*` are route-level, content-only. Components: `src/components/*` are reusable UI pieces.

3. Data & network patterns
- Currently no backend integration; `src/components/Post.tsx` contains a TODO and uses a placeholder async fetch in `useEffect` — replace that when wiring APIs.
- `Composer.tsx` emits new posts via `onPost(text)` callback — follow this pattern to keep business logic in pages or a data/service layer.
- Seed/sample data is available in `src/seed-core*.json` for offline testing.

4. Project-specific conventions
- Keep pages minimal: pages compose components; business logic (API calls/state) should live in pages or a new `src/services/*` module.
- Props: `Post` expects `postId: string` and optional `onPrayed(id)` callback (see `src/components/Post.tsx`).
- Styling: global styles live in `src/styles/landing.css` and `src/styles/index.css`. Components rely on specific class names (e.g., `card`, `post`, `composer`).
- TypeScript: `tsconfig.json` sets `baseUrl: "src"` — prefer imports that respect project structure; many files still use relative imports.

5. Build & output
- Production output can be inspected under `build/` (already generated in repo). Use `npm run build` to reproduce.
- `public/index.html` is the static HTML template used by Vite for dev and production.

6. Tests & linters
- There is no `test` script in `package.json`. The repo includes `@testing-library/dom` and example `App.test.js`, but CI/test scripts are not configured — run tests manually if you add them.

7. Safety and change guidance for AI agents
- Don't change the top-level app shell (`src/App.tsx`) layout unless explicitly requested — many pages rely on the three-column structure.
- When integrating real APIs, replace the placeholder in `src/components/Post.tsx` and centralize fetch logic into a `src/services/api.ts` or similar.
- Preserve existing CSS class names and structure to avoid breaking layout (e.g., `composer`, `post`, `card`, `topbar__inner`).

8. Examples to reference when editing
- Add a network call example: update `src/components/Post.tsx`—look for the `// TODO: replace with real API call` comment.
- To add a new view, create a file under `src/pages/` and add a `Route` in `src/App.tsx`.

9. Where to look first
- Entry + layout: `src/main.tsx`, `src/App.tsx`.
- Reusable UI: `src/components/` (see `Composer.tsx`, `Post.tsx`, `Topbar.tsx`).
- Route-level pages: `src/pages/*` (see `HomePage.tsx`).
- Build config: `vite.config.ts`, `tsconfig.json`, `package.json` scripts.

If anything here is unclear or you want additional examples (API service scaffolding, test scripts, or CI steps), say which area to expand and I will iterate.
