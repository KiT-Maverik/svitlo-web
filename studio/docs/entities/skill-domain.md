# SkillDomain

**Entity category:** subject-wide competency domain.

A **SkillDomain** is a broad, distinct area of knowledge and practice within one Subject. It organizes semantically related SkillGroups. A Subject (for example, Mathematics) is the context of the catalog; a separate Subject runtime type is not required by this editorial model.

## SEMANTIC RESPONSIBILITY

- Name one recognizable discipline-level area and explain its scope in clear, substantive terms.
- Organize coherent SkillGroups; do not use a Domain as an individual, separately measured outcome.
- Define meaningful boundaries from neighboring Domains, including treatment of cross-disciplinary or cross-cutting competencies.
- Keep each Skill in **one primary Group** in the taxonomy; cross-cutting reuse belongs in external mappings.
- Allow one Group in a Domain when substantively correct. No target number or forced symmetry exists.

## WHAT IT IS NOT

A Domain is **not** a school grade, course module, chronological learning phase, topic sequence, prerequisite graph, UI navigation state, mastery percentage, or assessment policy. Its position in a taxonomy does not establish when anything must be taught or whether a learner has mastered every descendant.

## EDITORIAL REVIEW

Check that the Domain is neither so broad that it hides incompatible areas nor so narrow that it is just a SkillGroup renamed. Enumerations and conjunctions in its title invite review of whether separate Domains are appropriate; they do not automatically require splitting.

## ARTIFACTS

- **Definition:** a Markdown document explaining this Domain's semantics and boundaries.
- **Code:** a separate, verified source file representing this Domain in the application.

The two artifacts are **independent links**. A Definition does not prove Code exists; Code does not replace the Definition. In inventories, missing targets use exactly `[Not implemented](#)`. UUIDs and other runtime identifiers belong to the code layer, not this definition.

Related entities: [SkillGroup](./skill-group.md), [Skill](./skill.md).
