# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at http://localhost:3000
npm test         # run tests in watch mode
npm test -- --watchAll=false   # run tests once (CI mode)
npm run build    # production build to /build
```

## Stack

- **React 19** with **TypeScript**, bootstrapped via Create React App (`react-scripts` 5)
- Tests use **Jest** + **React Testing Library** (`@testing-library/react`)
- No router, state management library, or styling framework yet — this is a blank-slate CRA project

## Structure

Entry point is `src/index.tsx`, which mounts `<App />` into `#root`. All application code lives under `src/`.
