# %NAME%

Date: %CURRENT_DATE%

%Program description in a form of a detailed reasonably long text.%

## TARGET AUDIENCE

Ages: %AGE_RANGE%
%Audience description in a form of a detailed reasonably long text.%

Prerequisites:
%Agent Note:
Allowed types of records:
- Plain text: %TEXT_PREREQUISITE%
- Skill: [%SKILL_NAME%](../skillsTaxonomy/%DOMAIN%/%GROUP%/skills/%SKILL%.data.ts)
- SkillGroup: [%SKILL_GROUP_NAME%](../skillsTaxonomy/%DOMAIN%/%GROUP%/%GROUP%.data.ts)
- SkillDomain: [%SKILL_DOMAIN_NAME%](../skillsTaxonomy/%DOMAIN%/%DOMAIN%.data.ts)

Choose only applicable record types and mix them when needed. For references, use the entity's actual name and an existing *.data.ts path. Do not duplicate IDs or UUIDs. A SkillGroup or SkillDomain prerequisite means general familiarity, not mastery of every nested Skill.
%
- %ITEM_1%
- ...

## EXPECTED RESULTS

- %ITEM_1%
- ...


## Методичні межі й редакційні примітки

Повторення базових обчислень і розуміння умови задачі відбуваються наскрізно. Лічба до 100, довші тексти та складені задачі не є вимогою завершення цього рівня.

- **Практика, повторення та оцінювання:** плануються пізніше за окремими специфікаціями; ці записи не задають кількості тестів або формату UI.
- **Передумови між уроками:** порядок вище — гіпотеза; Skills Taxonomy не є графом залежностей. За потреби методист має додати явні зв'язки під час наступного проходу.
- **Статус Skills:** посилання на зарезервований UUID не доводить готовність runtime-конфігурації. Перед реалізацією перевіряти актуальний [інвентар](../skills-inventory.md).

## LEARNING PLAN

### %MODULE_INDEX_NUMBER% - %MODULE_NAME%
File: %Module document file link. Default [Not implemented](#). When implemented [File name](File path)%
Goal: %MODULE_GOAL% 
%Module description in a form of a detailed reasonably long text.%

#### %LESSON_INDEX_NUMBER% - %LESSON_NAME%
File: %Lesson document file link. Default [Not implemented](#). When implemented [File name](File path)%
Goal: %LESSON_GOAL%
%Lesson description in a form of a detailed reasonably long text.%
Target skills:
- [Skill name as written in its *.data file. No suffixes.](*Data file path)
- ...
