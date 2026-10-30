# Svitlo — Architecture & Product Principles

**Purpose:** canonical, cross-cutting rules for content authors, educational specialists, Coding Agents, textbook applications, Engine and UI Kit. These documents explain **what Svitlo must be**, without pretending that every required capability has been implemented.

**Status vocabulary used throughout:**
- **Product invariant / decision:** expected of current work and future architecture; cannot be silently traded away.
- **Observed in code:** verified behavior in the named repository source files. Recheck when implementing.
- **Planned / proposed:** target behavior; no assumption of a completed runtime contract.
- **Open:** an architectural decision or implementation mechanism still to be designed.

## Required reading by responsibility

| Document | Why it matters |
| --- | --- |
| [Learning Experience Philosophy](./learning-experience-philosophy.md) | Interactive learning ecosystem, depth of learning, separation of Lesson/Program, educational role ownership |
| [Git-First Typed Content & AI Authoring](./git-first-typed-content.md) | Git as the authoring source of truth, `*.data.ts` conventions, review, validation and AI-assisted scale |
| [Internationalization & Inclusive Access](./internationalization-and-accessibility.md) | Broad locale coverage, semantic LTR/RTL, disability-aware accessibility as a default requirement |
| [Offline-First & Device Compatibility](./offline-first-and-device-compatibility.md) | Downloadable PWA objective, complete offline learning, media and state storage, capability trade-offs |
| [Lesson Notes](./lesson-notes.md) | Planned concise recall notes revealed during a lesson and assembled into a learner's revision sheet |
| [Lesson Editorial Document](./lesson-editorial-document.md) | One canonical Lesson specification shared across role-owned authoring stages; current downstream migration boundary |
| [System Boundaries & Roadmap](./system-boundaries.md) | Lesson vs Program, progress vs assessment, injection/events, IDs and planned registries/sync |
| [Coding Agent Specializations](./coding-agent-specializations.md) | Existing specialized Skills (including Remotion) and prioritized future ones; specialist subskills supplement one Coding Agent Persona |
| [Monorepo & Standalone Textbook Architecture](./monorepo-and-textbook.md) | Live `frontend/` / `learningApps/` / `backend/` / `shared/` / `studio/` layout, eight workspaces, dependency graph, extraction constraints |\n| [Stage 8 Migration Audit](./migration-stage-8-audit.md) | Verified extraction owners, CI/guard evidence, known identical Math/Playground source files and remaining work |

## Reviewer constitutions

- [Development Constitution](../development-constitution.md) — reserved for future development rules; **currently intentionally empty** beyond its title.
- [Quality Constitution](../quality-constitution.md) — reserved for future quality/testing rules; **currently intentionally empty** beyond its title.
- [Development Reviewer](../../personas/development-reviewer.persona.md) evaluates code and PRs against written architecture/Development Constitution; [Quality Assurance Reviewer](../../personas/quality-assurance-reviewer.persona.md) evaluates test effectiveness and quality evidence. **No unwritten constitutional rules may be inferred** from an empty placeholder.

## Planned Product Feature Backlog

The [Studio To Do index](../../To%20Do/README.md) catalogs **proposed or deferred product features in individual Markdown files**—including onboarding/PWA downloads, audio language availability, accessibility-based Question selection, GitHub feedback, multi-profile accounts, quizzes, Notes, Programs, teacher tools and sponsorship. **An entry is not an approved API or implemented feature**. Consult this backlog when identifying future work, not as a reason to silently change current runtime contracts.

## Document precedence

1. **Current real runtime and TypeScript contracts** are the source of truth for **what has been implemented**. Always inspect actual code before coding.
2. These architecture documents are the canonical reference for **cross-cutting product intent and invariants**. Existing code that falls short is a gap, **not permission to lower the intended architecture**.
3. Approved Methodologist briefs, Screenwriter specifications, Assessment specifications and textbook-specific editorial assets define **what to author** within the agreed scope.
4. Role-specific `studio/personas/` and `studio/skills/` define *who performs the work* and *how to perform it*.
5. [Long Chat Overture](../../Long%20Chat%20Overture.md) and [Roles Proposition](../../Roles%20Proposition.md) preserve historical decisions and background, including later superseded paths and snapshots; they are **not** current runtime documentation.

When intent and implementation differ, report both and request the required technical decision rather than silently creating unsupported APIs. A *decision* is not the same thing as an *implemented feature*.

## Project boundaries

Svitlo is a broad, international, **AI-assisted, accessible, offline-capable interactive learning ecosystem**. Its textbooks are intended as independently extractable applications that consume explicit shared packages without depending on another textbook's source tree. Source content belongs in version control; learner-specific state belongs in local and/or synchronized runtime data stores, not in the Git authoring repository.

These principles must be read **before** choosing a lesson design, introducing educational entities, implementing interactive scenes, changing localization, or defining persistence/offline behavior.

**Maintenance rule:** when a product decision changes, update the relevant focused document and its implementation status. Do not rewrite the historical Overture as if it were a mutable live specification.
