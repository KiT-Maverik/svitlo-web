# Lesson Editorial Artifacts — Separate Methodology and Script

**Status:** approved new authoring arrangement for Methodologist Briefs; downstream Create Nextgen Lesson migration remains pending. The previous single-canonical-Lesson-document policy is superseded. This file retains its historical filename to avoid breaking links. This is editorial guidance and does not change TypeScript `Lesson_Config`.

## DECISION

A Lesson has **separate role-owned Markdown artifacts**, not a single document extended by all specialists.

- **Methodologist Brief:** `<PackageRoot>/Data/Lessons/<bucketNumber>/<lessonSlug>/methodologist-brief.md`. It specifies learner profile, prerequisites, approved Skills, educational outcomes, essential content and pedagogical boundaries. It stays beside the Lesson but **must not be embedded in runtime configuration or published to the client by default**.
- **Educational Screenwriter:** authors a **different Lesson Script Markdown** based on the approved Brief, without rewriting the Methodologist's approved content. Its output convention will be updated in a separate workflow task.
- **Other specialists:** Scene specifications, assessment designs, media and implementation each remain separate role-owned artifacts as defined by their own workflows.
- **Coding Agent:** creates typed runtime Lesson configuration independently of Methodologist prose; documentation is not application code.

The Lesson remains **Program-neutral**, can be reused across Curricula, and may target several approved Skills. Filesystem buckets do not imply pedagogical categories or sequence.

## STORAGE AND REVIEW RULES

- Follow [Create Lesson Brief](../../skills/lesson-workflow/create-lesson-brief.skill.md): one globally unique English camelCase slug per textbook, directories under `Data/Lessons/1/`, `2/`, ... with at most **100** Lesson directories per bucket, **no automatic moves or rebalancing**, and tolerated gaps after deletion.
- Separate editorial approvals: `Methodologist status: Draft/Approved` applies only to the Brief. Script, assessment and implementation approvals are independent. Material changes to approved Methodologist outcomes, prerequisites, scope or Skills require renewed review.
- Cross-role edits require owner/editor authorization; never duplicate the Brief or auto-copy its full content into the Script or runtime config.
- Read generated English taxonomy view from `<PackageRoot>/docs/generated/skills/taxonomy.en.md`; if absent, generate with `node scripts/generate-skills-taxonomy.mjs --package learningApps/<textbook> --locale en` at monorepo root. Source of truth remains verified Code for promoted Skills, or approved staging Markdown for unpromoted ones. In the Brief, **Target Skills is a list of direct relative links to actual canonical Skill `*.data.ts` files**, with each link label equal to the **complete target filename (including `.data.ts`)**. Do not substitute Skill names or generated/staging Markdown links. **Use `<PackageRoot>/Data/skills/` as the canonical destination in newly authored Target Skills links**, independently of whether the existing Skills migration from `src/` has completed. The `Data/skills/` layout is the approved prospective authoring contract; before migration, describe affected references as pending/unresolved, not verified existing files. After migration, validate relative links against the real source files; never fall back to `src/` links.
- Use `Code: [Not implemented](#)` in a new Brief unless an actual Lesson implementation file can be verified. Never infer runtime IDs from slugs.
- Never silently migrate legacy files or change existing paths; migration requires explicit review and link reconciliation.

## DOWNSTREAM BOUNDARY

[Create Nextgen Lesson](../../skills/lesson-workflow/create-nextgen-lesson.skill.md) still uses its existing `docs/lessons` Script location. It is **intentionally untouched** here; reconcile its Script output and inputs with the separate-file model in a subsequent change.
