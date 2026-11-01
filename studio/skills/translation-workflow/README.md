# Translation Workflow

**Persona:** [Technical Translator](../../personas/technical-translator.persona.md), for linguistic judgment across supported languages.

- **[Review Translation](./review-translation.skill.md):** read-only linguistic QA using **Code-derived Markdown**. One on-demand CI command generates the **complete collection** of Code Skills taxonomies in **every supported language** into the PR-only `.agent-ci-artifacts/` folder. The reviewer independently chooses which documents to read for the assigned locale and subject. No coding expertise is required to review the generated text.
- **[Technical Translation](./technical-translation.skill.md):** implementation of actual localized text changes in canonical `*.data.ts` / `*.locale.ts` files; mandatory TypeScript and source validation.
- **[Common Translation](./common-translation.skill.md):** placeholder for future standalone document translation.

Reusable agent CI workflow: [Agent CI Artifacts](../../../.github/workflows/translation-review.yml). In a PR conversation, a **repository-owner-authored** `/agent-artifacts generate` triggers generation for that PR's head branch; when the agent is finished, `/agent-artifacts cleanup` removes its tracked artifacts. The workflow must exist in **main** before slash commands become active. A [dedicated main-merge guard](../../../.github/workflows/agent-ci-artifacts-guard.yml) blocks any temporary files left behind. See [Agent CI Artifacts architecture](../../docs/architecture/agent-ci-artifacts.md).

**Never edit generated Markdown to change translations.** It is a disposable view of canonical code. Do not add `.agent-ci-artifacts/` to `.gitignore`: the reviewer must access its temporary documents in the PR branch, and cleanup must remove them before merge.
