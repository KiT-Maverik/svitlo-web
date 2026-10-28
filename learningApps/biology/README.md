# Biology — Svitlo standalone textbook

Minimal Next.js App Router scaffold for `@svitlo/biology` in the `learningApps/*` npm workspaces.

## Commands

Run `npm ci` at the monorepo root first, then use:

- `npm run dev --workspace @svitlo/biology`
- `npm run typecheck --workspace @svitlo/biology`
- `npm run lint --workspace @svitlo/biology`
- `npm run build --workspace @svitlo/biology`

## Editorial status

The [Biology Skills Taxonomy draft](docs/skills/taxonomy.md) is now recorded in Git for editorial review (9 Domains, 35 Groups, 144 candidate Skills). **It is not approved or implemented.** No individual Skill/Group/Domain Definitions, `*.ids.ts`, `*.data.ts`, curricula, lesson content, or question data have been authored. The Methodologist's proposed catalog must be approved before implementation.

Follow `studio/Subject Proposition.md`, `studio/personas/methodist.persona.md` and `studio/skills/create-skills-taxonomy.skill.md` for the editorial work; the Coding Agent Persona and `AGENTS.md` govern implementation. Keep the package independently deployable, and consume shared Engine/UI Kit only through published package exports when there is an approved integration task.
