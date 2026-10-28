# Skill

**Entity category:** independently assessable competency.

A **Skill** is the smallest *practically meaningful* competency that can be assessed separately and interpreted on its own. It answers **“What can a person demonstrably do?”** rather than “Which topic, lesson, question or teaching activity is this?”

## ATOMICITY AND GRANULARITY

A well-defined Skill:

1. States an **observable action** with a meaningful target: recognize, calculate, compare, construct, justify, interpret, etc.
2. Has independently interpretable evidence of learning; an assessment can produce evidence about *this* competency.
3. Does not fuse A and B when a learner could reliably master one without the other and separate evaluation would matter.
4. Does not fragment into individual exercise parameters, number combinations, images, UI controls, or instructional variants if these test the same underlying competency.
5. Is independent of any particular country's grade structure, curriculum, age, question, assessment method, or mastery threshold.

**Granularity check:** Can the learner receive a separate meaningful judgment on this ability, without smuggling in an unrelated ability?

“Multiplication by 2” may be a separate Skill when its mastery is independently useful; “2 × 7” is an exercise variation. “Arithmetic” is a Domain; “Addition” is generally a broad family of related Skills rather than one atomic competency.

## COMPOUND AND INTEGRATION SKILLS

A comma, enumeration, or conjunction (“and,” “or,” etc.) is a **review signal**, not an instruction to split.

- Test whether action A can be mastered independently of B and whether separate diagnostic evidence matters.
- If so, separate them; then decide whether understanding **the relationship between A and B** is itself a new, independently assessable competency.
- A relationship or integration Skill can be atomic when *that relationship* is the meaningful assessable outcome.
- Merely using Skills A and B in the same exercise does **not** imply a third integration Skill.
- A single combined correct answer does not automatically establish valid independent evidence of mastery for every referenced Skill.

For example, addition and subtraction are distinct abilities; explaining their inverse relationship can be a further independently assessable Skill. Even/odd classification can remain a single Skill if the outcome is one coherent classification ability.

## IDENTITY AND CONTEXT BOUNDARIES

The Skill's **semantic meaning** must remain stable. Rewording a human-readable title need not change identity. A substantive split, merge, or change of competency requires explicit editorial review and, for existing code/learner history, migration planning.

Do **not** store grade, age, lesson IDs, question IDs, prerequisites, exercise variant, hint, scoring, assessment dimension, confidence, progress, mastery, adaptive recommendations, or rendering details inside the Skill definition. These belong to curricula, lessons, assessments, learner evidence, or UI. A Skill can be reused by many lessons and assessed by many kinds of question.

The Skill definition explains **what is being measured**, not how a test is designed or how its outcomes are scored.

## ARTIFACTS

- **Definition:** the human-readable Markdown document that defines this competency, its boundaries and evidence.
- **Code:** a separate application source file implementing the entity in the repository's runtime data model.

Keep both independently linked and never treat one as a replacement for the other. A Definition can exist without Code; Code can temporarily exist without a Definition for legacy entities. Missing targets use `[Not implemented](#)`. UUIDs and technical ID dictionaries belong in code, not Markdown taxonomy or competency definitions.

Related entities: [SkillGroup](./skill-group.md), [SkillDomain](./skill-domain.md).
