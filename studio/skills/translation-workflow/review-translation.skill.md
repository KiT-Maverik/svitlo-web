# Review Translation Skill

**Status:** Active — language-focused, read-only review of generated artifacts derived from canonical typed content.

**Mandatory first action:** Read [Technical Translator Persona](../../personas/technical-translator.persona.md) in full. Follow the repository's `AGENTS.md`, [Internationalization & Inclusive Access](../../docs/architecture/internationalization-and-accessibility.md), and the applicable textbook instructions. **Review Translation uses the Translator's linguistic judgment, not a coding persona.** It does not require the reviewer to inspect TypeScript imports, understand code builders, or perform a TypeScript build merely to review language.

## PURPOSE AND SOURCE OF TRUTH

Review the quality of one or more Svitlo language localizations using **generated, readable Markdown views of actual Code entities**. For Skills taxonomies, the canonical sources are `learningApps/<textbook>/data/skills/**/*.data.ts`. The existing read-only generator, [Generate Skills Taxonomy](../../../scripts/generate-skills-taxonomy.mjs), renders localized names, available user-facing descriptions, English methodological descriptions, hierarchy, counts, and links to canonical entities.

Generated Markdown is a **disposable review artifact, never an editable authoring source**. Do not fix translations inside the generated file or commit generated review Markdown. The review itself is read-only unless an explicit follow-up authorizes applying corrections to canonical code; then use [Technical Translation](./technical-translation.skill.md) and its TypeScript acceptance gate.

## SELF-DIRECTED ARTIFACT SELECTION

Infer the needed coverage from the task, without repeatedly asking the user to generate the next document or approve the next domain. Choose the smallest complete set that satisfies the request; expand it independently if the review reveals cross-domain or cross-locale inconsistency.

Supported scopes (combine freely):

- **One textbook, one language:** `--package learningApps/astronomy --locale qm`.
- **One textbook, all supported languages:** `--package learningApps/astronomy --all-locales`.
- **All textbooks with Code Skills taxonomies, one language:** `--all-packages --locale qm`.
- **All available Code Skills taxonomies in all supported languages:** `--all-packages --all-locales`.

The tool reads the **live** supported-language registry; never hardcode locale counts. Other source types may acquire their own generators later. Do not pretend the Skills taxonomy generator covers unrelated resources.

The reviewer may generate the full requested batch **once**, then selectively read individual artifacts and process large documents by domain/section. It is not necessary to load every file into model context simultaneously. Batch review findings across the full scope before reporting. If the selected package or locale cannot be generated due to incomplete or structurally invalid source data, report its exact failure; do not fabricate missing translations.

## ACQUIRE ARTIFACTS: PREFERRED ROUTES

### A. Existing local/agent runtime

From the repository root, use the checked-in wrapper `scripts/generate-translation-review-artifacts.mjs` (it delegates to the existing Code → Markdown generator):

```bash
node scripts/generate-translation-review-artifacts.mjs --package learningApps/astronomy --locale qm
node scripts/generate-translation-review-artifacts.mjs --package learningApps/astronomy --all-locales
node scripts/generate-translation-review-artifacts.mjs --all-packages --locale qm
node scripts/generate-translation-review-artifacts.mjs --all-packages --all-locales
```

The command creates a temporary, out-of-repository directory containing `<textbook>/taxonomy.<language>.md` and `manifest.json`, not changes to tracked source. It requires installed Node.js dependencies (the existing generator imports `typescript`). The manifest lists successes, failures, and the actual source commit. Inspect it before claiming full coverage.

### B. GitHub Actions — when repository checkout is unavailable locally

Use the **permanent, reusable, manually dispatched** [Translation Review Artifacts](../../../.github/workflows/translation-review.yml) workflow. Provide the source branch/ref, textbook or all-textbooks flag, and locale or all-locales flag. Run it once for the appropriate batch; then download the resulting short-lived Markdown artifact from that run.

**Do not create a new workflow file, temporary branch, or CI definition for each review.** GitHub provisions and discards the per-run runner automatically. The reusable workflow must be present on the repository **default branch** for the normal `workflow_dispatch` UI to be available; until then, use the local route or a supplied generated Markdown. The workflow checks out the requested **source ref**, so the reviewed Code may come from a feature branch even when the workflow definition lives on `main`.

The workflow has **no push or PR trigger** and does not modify FastGate. It uses read-only permissions, generates into `RUNNER_TEMP`, uploads an artifact with **one-day retention**, emits a run summary/manifest, and removes temporary runner files even if generation failed. GitHub expires the uploaded archive automatically after its retention window. **No generated Markdown and no one-off job definition is committed.** Never describe the uploaded archive as immediately deleted; it is available until expiration. Avoid creating a separate deletion bot or broad deletion token just for this lifecycle.

If agent tools cannot dispatch the workflow or read the artifact, use the checked-in wrapper in a real checkout or ask for the single generated archive/document only as a last resort. Do not claim execution if none occurred.

## LINGUISTIC REVIEW PROCEDURE

1. **Choose scope and snapshot.** Identify exact textbook(s), language(s), branch/commit. Generate or obtain all required Markdown artifacts together and read the manifest. Confirm that the hierarchy/counts correspond to source and that filenames link back to canonical `*.data.ts`.
2. **Review the full selected scope.** Read each Domain, Group, and Skill, including both the localized heading and the user-friendly description. Use the canonical English methodological description to establish technical meaning; it is intentionally not a translated field. Account for learner age and subject context, not a universal grades-1–2 assumption.
3. **Check linguistic quality.** Find mistranslations, semantic drift, incoherent grammar, orthography, register, inappropriate terminology, false friends, unidiomatic word order, mislabeled scientific concepts, inconsistencies between related entities, missing concepts, literal translations, and suspicious copied foreign-language text. Check repeated terms **across the entire selected batch**, not just within each domain.
4. **Consult evidence proportionately.** Prefer authoritative target-language terminology and education sources; when needed use reliable scientific/international terminology. For Crimean Tatar (`qm`), follow the Persona's **Crimean Tatar → international → Turkish** priority and Ukraine-approved Latin orthography. An adapted Turkish **term** may be defensible; a Turkish sentence passed off as Crimean Tatar is not. Do not assume a questionable form is wrong solely because a similar term exists in Turkish.
5. **Classify findings.** Distinguish verified errors from evidence-based recommendations and uncertain review candidates; give precise `textbook → locale → Code path → field`, original and proposed text, reason, severity, and confidence. Separate glossary-wide normalization from local grammar fixes. Do not invent citations, attestations, or native-speaker sign-off.
6. **Complete a coherent pass.** Produce a concise coverage report, shared terminology decisions, prioritized issues, and a proposed correction set. Process big views in chunks internally, but do not interrupt the user for each domain, next locale, or successive artifact.
7. **Handoff for code edits if authorized.** Use file links to edit only the affected localized `name.<locale>` / `description.frontend.<locale>` fields in canonical Code. Delegate correctness and TypeScript validation to [Technical Translation](./technical-translation.skill.md); regenerate and compare the same Markdown view to prove the fixes landed. The review document itself remains disposable.

## ACCEPTANCE AND HONEST REPORTING

A translation **review** is complete when all requested generated artifacts were actually inspected and findings have traceable Code links; it is **not** a certificate of native-level correctness. If only part of the batch was read, identify the unread portion. If an artifact generator fails, report the failure and do not silently treat it as an empty taxonomy. A read-only review does not claim TypeScript has passed. Report the source ref/commit, exact language and textbook coverage, generated/success/failed counts, key findings and any unresolved linguistic uncertainty.

**Artifact lifecycle:** CI job summary says what was generated and that the runner directory was cleaned; uploaded GitHub Actions artifacts expire after one day. For local runs, delete the temporary output directory after reviewing (or allow the agent's ephemeral environment to be discarded). Do not commit reviews or generated source views unless the user expressly requests a permanent reviewed report.
