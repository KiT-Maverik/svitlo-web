# Migrate Implemented Taxonomy Skill

**Mandatory first action:** Read [Methodologist Persona](../../personas/methodist.persona.md) **in full**, then [Workflow](./README.md), [Create Skills Taxonomy](./create-skills-taxonomy.skill.md), [Exception Review](./review-skills-taxonomy-exceptions.skill.md), [Implement Skill Code](./implement-skill-code.skill.md), and [Skill](../../docs/entities/skill.md), [SkillGroup](../../docs/entities/skill-group.md), [SkillDomain](../../docs/entities/skill-domain.md). This is an **independent, conservative promotion gate**, not a content creation, code generation or automated translation task.

## GOAL

Walk the existing `<PackageRoot>/docs/skills/taxonomy.md` from **top to bottom**, in Domain → Group → Skill order (or direct Domain → Skill). For each authored item with a link to actual Code, verify that its **approved meaning, name, description, classification, complete localized names and optional complete fe coverage** are preserved in the proper `*.data.ts` object. After explicit editor approval, remove the item's editable Markdown definition **without losing any unpromoted child**. It must become reproducible via [Code-to-Markdown generator](../../../scripts/generate-skills-taxonomy.mjs).

## REQUIRED INPUT

- Specific textbook PackageRoot; actual current staging Markdown file and its last approved revision; an approved list/scope of entries to promote.
- The code tree, package source exports, `Skill_Config` / `SkillGroup_Config` / `SkillDomain_Config`, builders, `*.ids.ts` and current `DEFAULT_SUPPORTED_LANGUAGES`.
- Any editor-approved semantic changes since the original taxonomy, and documented national/subject-specific terminology exceptions.

If there is no staging Markdown, verify Code and report that no staging items remain; **do not manufacture a parallel hand-authored taxonomy**. If the intended staging source is ambiguous, the Code object is absent, or approval history is unclear, stop that item rather than guessing.

## PER-ENTITY VERIFICATION — MANDATORY

1. **Locate by hierarchy, not by similarity.** Read the Domain/Group/Skill heading and substantive description; follow its literal implementation link. Require a valid, existing `*.data.ts` of the correct entity kind. `[Not implemented](#)`, a UUID-only file, a file with just a plausible name, or a partially implemented builder **never** authorizes promotion.
2. **Identity and topology.** Verify stable explicit UUIDs, correct type, exact parent/child ID-map membership, no duplicate or orphan mappings, proper Domain → Group → Skill or permitted Domain → Skill ownership, and actual export/reachability. Do not infer consistency just from physical directories.
3. **Name equivalence.** Compare the **taxonomy's actual language** with the same locale in the Code `name` map; retain meaning and relevant specificity, not merely spelling similarity. When an approved name is in a different script, identify the correct locale instead of comparing it to arbitrary English.
4. **Methodological equivalence.** Code `description.methodological` (English) must preserve all substantive information in the authored paragraph, translating without loss if the source is not English: scope, distinctions, examples (when material), limitations, and disciplinary ownership; no shortened slogan, name paraphrase, ignored qualifier, invented grade ceiling or added competence. A meaningful editorial refinement requires explicit approval.
5. **Localized names and optional fe.** Require complete nonblank `name` dictionaries for every required language. `description.methodological` is one reviewed **English** string, never a dictionary. `description.fe` is **optional**; when absent, do not block promotion or invent frontend text. When present, require every supported locale with high-quality, meaning-consistent user-facing copy; reject a partial set, fake translations and implicit fallback. Check terminology and RTL scripts. Locale-key counts cannot establish translation quality.
6. **Implementation/readiness.** Verify builders and relevant tests; inspect whether the intended catalog loader/index actually reaches the entity. Code file existence alone is insufficient. Confirm relative references and subject-pack boundaries.
7. **Round-trip.** Use the Code-to-Markdown generator in a controlled test when all Code entities satisfy its requirements; compare the source hierarchy, original approved meaning and the English methodological output; verify localized headings and optional fe copy in the requested locale. If not yet all Code entities are complete, locally inspect the target values and mark full round-trip as blocked. Never claim global restoration is proved by a partial comparison.
8. **Report first.** Produce a per-item matrix: source heading/path, actual source language, Code path and UUID, hierarchy check, names check, descriptions check, locale check (including review limitations), generator check, decision (`PROMOTABLE` / `BLOCKED`) and unresolved editor actions. Preserve the evidence in PR review; this is not a second canonical taxonomy file.

## SAFE REMOVAL AND PARENT SCAFFOLDING

**Always stop for explicit editorial approval before removing entries.**

- Remove only a verified `PROMOTABLE` item's full Markdown block. Never discard approved prose unless the complete, correct meaning is present in reviewed Code and recoverable through history.
- For an implemented **Skill** leaf: remove its heading/Code link/description once approved; recalculate applicable remaining-staging counts.
- For a **Group** or **Domain** with unpromoted descendants: retain the necessary heading and context so children remain discoverable. The parent is not removable as a Markdown *subtree* until all descendants can also be faithfully recovered from Code. Keep temporary context distinct from Code authority, without adding a second independently maintained definition.
- For fully migrated **Groups** and **Domains** with no unpromoted children: remove the complete subtree only after checking the parent relationship and any other references.
- If a heading is removed, ensure the remaining document still parses, counts correctly reflect outstanding entries (explicitly labeled as such), all relative links resolve, and history/editorial decisions are preserved in Git.
- Once **all** staging entries have passed, the editor may authorize deletion of the now-empty `docs/skills/taxonomy.md`, provided the full Code catalog can regenerate without missing names, English methodological text, or partial optional fe locales.

## OUTPUT

1. Independent, prioritized verification report with unblocked and blocked entries, actual locale coverage, concrete discrepancies and a clear proposed removal diff.
2. **Only after explicit editor approval**: exact removals from `docs/skills/taxonomy.md`, preserving all unpromoted material, repaired links and counts.
3. A final statement of which entities now use Code as source of truth, which remain Markdown-authoritative, and whether generated names/optional frontend copy pass locale checks and methodological prose is recovered in English.

**Never:** rewrite or invent translations on behalf of Coding Agent, delete because Code path merely exists, delete all Markdown in one sweep, change Skill IDs silently, create a second editable taxonomy, or mistake compiler success for a subject-matter/translation review.
