# Translation Workflow

Use [Technical Translator Persona](../../personas/technical-translator.persona.md) for linguistic judgment.

- **[Review Translation](./review-translation.skill.md)** — read-only linguistic and terminology QA of generated Markdown views derived from canonical Code entities. The reviewer independently selects **one or all textbooks** and **one or all locales**, chooses the source branch, and obtains short-lived artifacts using the reusable [Translation Review Artifacts workflow](../../../.github/workflows/translation-review.yml) or the checked-in [local wrapper](../../../scripts/generate-translation-review-artifacts.mjs). No programming expertise is needed to review the generated document.
- **[Technical Translation](./technical-translation.skill.md)** — actual localized source-code changes, TypeScript validation and Git/PR delivery. Use when implementing review corrections.
- **[Common Translation](./common-translation.skill.md)** — placeholder for future standalone document translation.

**Never edit generated review Markdown as if it were canonical content.** For Skills taxonomies, Code under `learningApps/<book>/data/skills/` remains authoritative. If a reviewer proposes an actual correction, implement it through Technical Translation, then regenerate the view.
