# @svitlo/platform — Svitlo web platform (Stage 7)

Independent **Next.js 16 App Router** application with React 19, TypeScript, Material UI and the initial Ukrainian textbook catalog. This is a standalone deployable frontend, **not a host for embedded textbook source code**. Math and Playground remain separate applications; Platform never imports their source or workspace packages.

## Local development

Run from the monorepo root:

```bash
npm ci
npm run dev:platform
npm run build:platform
npm run typecheck:platform
npm run lint --workspace @svitlo/platform
npm run test:e2e:platform # Requires a production build and Playwright Chromium
```

The platform dev server uses Next.js default port 3000; choose a different port if another app is running. Smoke E2E uses isolated port 3111.

## Textbook links

Configure `NEXT_PUBLIC_MATH_APP_URL` to the **absolute HTTP(S) URL** of the separately deployed Math application (see `.env.example`). Without that configuration, the catalog shows "Готується" instead of linking to a nonexistent URL. Environment variables prefixed `NEXT_PUBLIC_` are resolved at build time; rebuild the platform when changing this destination.

## Scope

- Landing page, metadata, responsive MUI styling and accessible catalog
- Workspace scripts, isolated TypeScript/ESLint config, CI build and browser smoke tests
- No authentication, payment, marketplace, database, backend integration, hardcoded deployment domains or shared lesson implementation — those require separate scoped work
- Keep platform-specific code and assets under `frontend/platform/`. Extracting this app must not require imports from `learningApps/*`.
