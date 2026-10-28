# SkillDomain

**Entity category:** subject-wide catalog domain.

A **SkillDomain** is a broad, recognizable subject area containing coherent Skills either **through meaningful SkillGroups** or **directly when no grouping layer is justified**. It organizes a catalog; it does not represent a course, educational level, learning sequence, assessment, or learner mastery record.

## SEMANTIC ROLE

- Choose a concise name that identifies a distinct field within the subject. Its taxonomy description must explain the field's scope, unifying concerns and boundaries; a title paraphrase is not sufficient.
- Give it a short editorial Description of the area it covers.
- Distinguish neighboring Domains by meaningful disciplinary boundaries. **Prefer two or more distinct, meaningful Groups when subdivision is warranted; otherwise attach Skills directly. A single-Group Domain is strongly discouraged** and requires a documented editorial exception rather than a tautological Domain → Group wrapper.
- **Do not mix direct Skills with SkillGroups inside one Domain.** Direct containment is a controlled exception to the canonical three-level tree, not a shortcut to avoid a needed taxonomy review. A Domain must contain at least one Skill by either path, even if it contains zero Groups.
- Keep the Domain's membership and the hierarchy of Groups/Skills in the **taxonomy**, not in lists inside individual Markdown Definitions.
- Do not attach grades, prerequisites, teaching plans, scores, progress, or evaluation criteria to this entity.

A generated Domain Definition is intentionally minimal: title, editorial Status, short Description, and Code link. **It must not enumerate its SkillGroups.**

## RUNTIME CONTRACT AND ARTIFACTS

The shared-engine `SkillDomain_Config` contains `id`, localized `name`, required `groupIds` and optional **`skillIds`** (explicit references for directly attached Skills). In direct mode, `groupIds: {}` and nonempty `skillIds` express the editorial structure; in grouped mode, `groupIds` is nonempty and `skillIds` is omitted/empty. The **shared-engine builder now validates** one nonempty exclusive membership mode (Groups or direct Skills), UUID syntax and duplicate child references. It does **not** establish cross-domain uniqueness or prove that source registries, generated textbook indexes, screens, ancestry/progress lookup and analytics handle direct Skills; these consumers and their integration tests still require verification before production registration. The contract currently has no `description` property; the Markdown description is editorial text.

- **Definition:** the Domain's concise Markdown catalog description.
- **Code:** a separate verified application implementation file.

Neither artifact replaces the other. Use `[Not implemented](#)` for a missing target.

Related entities: [SkillGroup](./skill-group.md), [Skill](./skill.md).
