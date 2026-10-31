# Technical Translation Skill

**Status:** Active — translation of localized strings in strictly typed source files.

**Mandatory first action:** Read [Technical Translator Persona](../../personas/technical-translator.persona.md) in full. Follow the repository's `AGENTS.md`, relevant package instructions, [Internationalization & Inclusive Access](../../docs/architecture/internationalization-and-accessibility.md) and [Git-First Typed Content](../../docs/architecture/git-first-typed-content.md). Inspect the **current** source contracts and translation conventions; do not infer them from examples alone.

## PURPOSE AND BOUNDARIES

Complete or explicitly revise localized text in typed application/authoring resources, including `*.data.ts`, `*.locale.ts`, typed translation dictionaries and text-bearing `*.ts`/`*.tsx` modules. Work only in the selected package/files and permitted locale fields. This Skill does **not** translate standalone Markdown or other static documents; that belongs to the future [Common Translation](./common-translation.skill.md) workflow.

A generator may intentionally create an English-first, TypeScript-invalid localization object. **Keep that failure visible until genuine translations make the affected resource type-safe.** No fallback language, empty/placeholder values, partial-type casts, `any`, `@ts-ignore`, weakening of required locale types or edits to TypeScript settings to conceal missing translations.

Do not redesign schemas, edit nonlocalization fields, change IDs/slugs/imports/exports, move entities, alter source meaning or claim editorial approval. Preserve the English source and existing approved translations unless the task expressly authorizes their revision.

## INPUTS AND CONTEXT

Required: (1) an explicit package or file/directory scope, and (2) a source-language reference, normally the resource's approved English text. The target languages may be specified; otherwise fill **all missing required languages** for the scoped resource. Do not roam unrelated packages or translate already complete objects by default.

Resolve these from current repository sources before editing:

- The owning type/builder, which fields are translatable, whether they are mandatory or optional, and whether the keys use language codes (e.g. `be`) or full locale tags (e.g. `be-tarask`).
- The current supported-language roster and any package-specific additions; inspect `shared/contracts/src/types/languages.ts` and actual owning types as applicable.
- The resource's pedagogical/functional purpose, reader age/ability, subject-specific terminology, linked approved Skills, Lesson Brief/Content or UI context. **Do not assume all content targets ages 6–8.**
- The authoritative source: for staged taxonomies, approved Markdown determines unpromoted English meaning; for promoted entities, approved Code owns the localized content. Derived/generated Markdown is not an editable source.
- Which text is **not** subject to localization (for example, an English-only `description.methodological`).

If scope, source meaning or essential reader context is ambiguous, isolate and report the blocker rather than guessing or expanding the task.

## WORKFLOW

1. **Inspect and inventory.** Read actual files, their localized fields and compiler contracts. Establish the initial Git diff/baseline and enumerate each missing requested `file → field → language`. Distinguish absent required keys from intentionally optional fields. Do not derive the translation backlog from TypeScript diagnostics alone.
2. **Gather contextual evidence.** Read neighboring entries, source-language descriptions, relevant lesson/skill references, and existing translated terms. Confirm whether a string is learner-facing, educator-facing, a UI control, accessible label, feedback or a technical name.
3. **Translate deliberately.** Produce natural, accurate, age-appropriate copy for the supported target locales. Preserve interpolation placeholders, markup, escaped sequences, mathematical notation and variable names; check plurals, labels, length-sensitive UI copy, and semantic RTL/bidi behavior. Never manufacture a value merely to satisfy the compiler.
4. **Apply minimal edits.** Modify only authorized localized string values/keys. Keep stable identities, semantic fields, structural imports, public exports and existing unrelated translations intact. Use the owning file's quote/format conventions; avoid reformats that obscure translation review.
5. **Respect generators and canonical sources.** Prefer a supported reviewed-translations input when the **current** generator can safely consume it. For the staged Skills Markdown → Code generator, inspect its actual `--translations` contract, entry status/action and dry-run behavior before considering `--apply`; the presence of this option does not imply it works for already-promoted Math Skills or arbitrary resources. Otherwise edit the owning typed source directly. Do not hand-edit derived/published files that a subsequent generator overwrites.
6. **Verify all affected resources** using the acceptance gate below. Inspect the final diff for unintended nontranslation changes, report remaining missing locales and distinguish automated checks from editorial review.

## MANDATORY TYPESCRIPT ACCEPTANCE GATE

**Green TypeScript for every modified typed resource is a required success condition, not an optional best effort.**

1. Identify the owning workspace(s), actual TypeScript project(s) and their required build-time dependencies. Run the repository's configured typecheck for each affected workspace (for example `npm run typecheck --workspace @svitlo/math` where appropriate), after prerequisite package builds if needed. Do not substitute an unrelated workspace's green check.
2. **Prove the modified files are included in the check.** A green command that excludes `data/`, a generated module or the changed files is not evidence. Check the active `tsconfig` inclusion and dependency graph. For typed configurations, validate the real builder/contract typing, not syntax alone.
3. If the full workspace already has unrelated TypeScript errors, report them separately and run a **strict scoped TypeScript check** that explicitly includes every modified file and its imported contracts, inheriting the real project compiler settings without weakening them. It must exit successfully with **zero TypeScript diagnostics** for the translated resource and its required dependencies. Report that only the scoped check passed; never describe the full workspace as green. If a trustworthy scoped check is unavailable or fails, the task remains **blocked**, not complete.
4. Verify all required locale keys and nonempty, genuine localized values against the actual contract. Run applicable localization/schema tests and focused tests when available. TypeScript proves structural safety, **not** translation accuracy, and must not replace linguistic review.
5. Never suppress diagnostic errors, mark absent translations optional, change `tsconfig`, remove imported resources from the project, or alter production code to create a superficial green result.

## DELIVERABLE AND SUCCESS CRITERIA

Report: scoped files/resources; source and target languages; localized fields added or revised; any missing or ambiguous entries; typecheck command(s) and actual exit results; which checks covered the modified files; applicable focused tests; and any editorial review still needed. Provide reviewable Git changes/PR according to the task.

Mark the technical translation **complete** only when:

- Each required target-locale field in scope has a genuine, context-appropriate translation, with no hidden fallback or placeholder.
- Nonlocalization semantics and code structure are unchanged.
- **Every changed typed resource has a passing, correctly scoped TypeScript validation** under the actual contracts.
- No unresolved translation-accuracy blocker is concealed; any full-workspace failures or unrun auxiliary checks are clearly identified.

If any required acceptance gate fails, report **partial/blocked**, with exact paths/keys and next actions. Do not claim success on the strength of a passing linter, formatter or an unrelated TypeScript project.
