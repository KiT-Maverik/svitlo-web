# Skill

**Entity category:** atomic catalog classification.

A **Skill** is a named, stable entry in a subject's taxonomy. It identifies a meaningful, distinct concept or ability so other entities can organize content, refer to Skills, and aggregate analytics by Skill. The Skill entity itself **does not measure, teach, or track mastery**.

## SEMANTIC ROLE

- Each Skill has a clear, recognizable name and a concise editorial description.
- Keep Skills distinct enough for useful classification; avoid either broad catch-all labels or a new Skill for each exercise variant.
- A compound label should represent one coherent category. If its parts are unrelated or need separate catalog identities, define separate Skills in the taxonomy.
- A Skill appears under one primary SkillGroup in the taxonomy. Lesson, curriculum, program, question, and analytics relationships are maintained externally.
- The Skill has no children and no embedded references to learning activities or learner records.

A Skill Definition document is deliberately minimal. Its template contains only the title, editorial review status, short Description, and independent Code link. It **does not** include `Competency`, `Boundaries`, `Evidence of Competency`, learning objectives, rubrics, progress, mastery, scores, or assessment methods. Those are responsibilities of other educational or tracking entities.

## RUNTIME CONTRACT AND ARTIFACTS

The current shared-engine `Skill_Config` has a static `id` and localized `name`. Registration adds `collection` and `fileLocation` through the existing infrastructure. **It currently has no `description` field**: Markdown descriptions are editorial text, not automatic runtime/UI properties.

- **Definition:** a short Markdown catalog entry.
- **Code:** a separate verified implementation file, typically `*.data.ts`, using the current TypeScript contract.

Keep the two links independent. Use `[Not implemented](#)` when a target is absent. Stable UUIDs and code-level identifiers remain in source files, not Markdown Definitions.

Related entities: [SkillGroup](./skill-group.md), [SkillDomain](./skill-domain.md).
