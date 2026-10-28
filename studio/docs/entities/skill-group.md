# SkillGroup

**Entity category:** semantic collection of related competencies.

A **SkillGroup** is a coherent family of Skills within a SkillDomain. It is an intermediate cataloging level, not itself the smallest independently assessable competency.

## SEMANTIC RESPONSIBILITY

- Give the Group a meaningful name describing a shared competency family.
- Explain what belongs in this Group and how it differs from adjacent Groups.
- Contain one or more individually assessable Skills, without forcing a minimum count beyond one or uniform group sizes.
- Preserve a single **primary placement** for each Skill. Cross-domain educational use belongs in curricula and other external mappings.
- Distinguish the Group's name from that of its direct child Skills. If they coincide, revise the Skill to a semantically accurate specific name; avoid adding meaningless qualifiers.

## GRANULARITY AND REVIEW

A Group can organize distinct operations and their genuinely independent integration competencies. For example, a family can include separate operations **and** a Skill assessing understanding of their relationship. A list of actions in a Group name is a reason to inspect cohesion, not an automatic defect. If the Group itself describes an observable, independently assessable outcome, determine whether its concept belongs at Skill level instead.

## WHAT IT IS NOT

A Group is not a lesson, unit, grade, prerequisite ordering, aggregation rule, question bank, UI component, or evidence that all child Skills have been mastered.

## ARTIFACTS

- **Definition:** a Markdown document explaining the Group's scope and boundaries.
- **Code:** its separately existing application source file.

Both must remain independent, verifiable links. Neither a Markdown document nor a referenced UUID is sufficient evidence that Code exists. Missing targets use `[Not implemented](#)`. Runtime identifiers and technical reference maps belong in the implementation layer.

Related entities: [SkillDomain](./skill-domain.md), [Skill](./skill.md).
