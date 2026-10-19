# eMealPlan

eMealPlan is a modern meal planning application that helps a person or family plan meals, manage recipes, generate
shopping lists, and turn each day's dinner into a clear, checkable cooking TODO list.

The core idea:

```
Recipes -> Meal Plan -> Shopping List -> Daily Cooking Plan
```

## Features (MVP)

- **Recipe library** — create, edit, search and filter recipes with ingredients, steps, tags and notes.
- **Weekly meal plan** — assign a recipe (or a free-text label like "Leftovers") to each day of the week.
- **Automatic shopping list** — ingredients from every planned recipe are combined and unit-normalized (e.g. `500 g` +
  `750 g` potatoes -> `1.25 kg`), grouped by category, with manually added items and checked state preserved.
- **Daily cooking plan** — each recipe's steps are scheduled backwards from the planned meal time into a checkable
  TODO list (e.g. "17:00 take the mince out of the fridge … 18:00 dinner is ready").
- **Dashboard** — answers "what are we eating today, when do I start, what's next, and what do I need to buy?" at a
  glance, plus a 7-day strip of the week ahead.

Out of scope for the MVP by design: authentication/multi-user accounts, external integrations, and AI features. The
architecture is intentionally layered so these can be added later without reworking the core domain (see
[Future direction](#future-direction)).

## Architecture

eMealPlan is an npm-workspaces monorepo with three packages and a clean separation between domain logic, the API, and
the UI:

```
packages/
  domain/   Framework-agnostic models + business logic (shared by server and web)
  server/   Fastify REST API, JSON-file-backed repositories
  web/      React + Vite single-page app (mobile-first UI)
```

- **`@emealplan/domain`** — pure TypeScript: the domain models (`Recipe`, `MealPlan`, `ShoppingList`, `CookingPlan`,
  etc.) and the business rules that operate on them (ingredient aggregation, cooking-step scheduling,
  unit conversion). No HTTP, no React, no persistence — this is the part that should be easiest to test and reuse.
- **`@emealplan/server`** — a thin Fastify layer: routes delegate straight to `@emealplan/domain` services, and data
  is persisted through small repository interfaces (`RecipeRepository`, `MealPlanRepository`, …) currently implemented
  with JSON files on disk. Swapping in a real database later only means writing a new implementation of those
  interfaces.
- **`@emealplan/web`** — a React SPA that talks to the API through a small typed client (`src/api/client.ts`). Data
  is fetched from the server on load and held in local state.

This keeps business logic out of React components and out of the database layer, so either can change independently.

## Tech stack

- Node.js + TypeScript (strict mode, ESM throughout)
- React 19 + Vite for the frontend
- Fastify for the API
- Vitest + Testing Library for tests
- ESLint (flat config) + Prettier for linting/formatting
- npm workspaces for the monorepo
- GitHub Actions for CI (install, lint, test, build on every PR)

The technical setup (TypeScript config, ESLint/Prettier, VS Code settings, CI pipeline) is adapted from the author's
existing hEnge project as a proven starting point — none of hEnge's product functionality is reused.

## Getting started

Requires Node.js 22+.

```bash
npm install
```

Run the API and the web app in two terminals:

```bash
npm run dev --workspace packages/server   # http://localhost:4000
npm run dev --workspace packages/web      # http://localhost:3000
```

The web dev server proxies `/api/*` requests to the server, so no CORS configuration is needed in development. On
first run, the server seeds a handful of demo recipes and a sample week (matching the product brief's example meal
plan) into `packages/server/.data/` so the app isn't empty.

### Environment configuration

Copy `packages/server/.env.example` to `packages/server/.env` to override defaults (`PORT`, `DATA_DIR`,
`WEB_ORIGIN`).

### Scripts

Run from the repo root (applies to all packages):

| Script                          | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `npm run lint`                  | ESLint across all packages                     |
| `npm run format` / `format:fix` | Prettier check / write                         |
| `npm run test`                  | Vitest for `domain`, `server`, and `web`       |
| `npm run build`                 | Type-check everything and build the web bundle |
| `npm run check`                 | format + lint + test + build, used by CI       |

Use `--workspace packages/<name>` to scope any script to a single package.

## Data model

```
Ingredient (catalog: category, tags, nutrition, unit conversions)
Recipe, RecipeIngredient (ingredientId + amount/unit), RecipeStep (with durationMinutes)
MealPlan, MealPlanDay
ShoppingList, ShoppingListItem
CookingPlan, CookingTask
```

Every type is defined exactly once in `packages/domain/src/models/` (e.g. `Unit`, `Recipe`, `IngredientCategory`) and
imported from `@emealplan/domain` by both the server and the web app. The recipe and ingredient data is served by the
server (`/api/recipes`, `/api/ingredients`, images under `/api/assets/`).

See `packages/domain/src/models/` for the full type definitions.

## Future direction

The layered architecture (domain / repositories / routes / UI) is meant to make these straightforward to add later
without redesigning the core:

- AI-generated meal plans and recipes, "what should we eat tonight?" suggestions
- Suggestions based on preferences, dietary requirements/allergies, or what's already in the fridge
- Nutrition information
- Family profiles, favorite recipes, meal history
- Recipe import from websites or images
- Multiple households, real authentication
- Automatic planning based on available cooking time
- Integration with grocery/delivery services

## Contributing

CI (`.github/workflows/ci.yml`) runs install, lint, test, and build on every pull request targeting `main`. Please
run `npm run check` locally before opening a PR.

## AI

### cmd1:

Ingrediens: XXX
Lav et kvadratisk, fotorealistisk ingrediensbillede af ingrediensen ovenfor i samme stil som mine andre ingrediensbilleder.
VIGTIGT: Når billedet er genereret, skal den genererede billedfil konverteres til ægte WebP-format. Gem filen i med ingrediensens navn som filnavn og som filendelse. Brug et webvenligt filnavn med små bogstaver og bindestreger. Kontrollér, at den færdige fil faktisk har formatet WEBP og ikke PNG. Giv mig derefter den færdige -fil.
