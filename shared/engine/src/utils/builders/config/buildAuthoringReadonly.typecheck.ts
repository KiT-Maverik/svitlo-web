import { assessmentMethods_AssessmentMethod_Ids } from '@svitlo/contracts/content';
import type { AssessmentMethod_Config } from '@svitlo/contracts/content';
import type { Skill_Config } from '@svitlo/contracts/taxonomy';
import { buildLessonConfig } from './buildLessonConfig.utils';
import { buildLessonSectionConfig } from './buildLessonSectionConfig.utils';
import { buildSkillConfig } from './buildSkillConfig.utils';
import { buildSkillGroupConfig } from './buildSkillGroupConfig.utils';
import { buildSkillDomainConfig } from './buildSkillDomainConfig.utils';
import { buildAssessmentMethodConfig } from './buildAssessmentMethodConfig.utils';

const lesson = buildLessonConfig({
  id: 'lesson', slug: 'example', title: 'title', requireQuiz: false,
  sections: { allowNavigation: true, allowSkipping: false, showIndexes: true, content: ['section'] },
});
// @ts-expect-error Lesson builder result is readonly.
lesson.slug = 'changed';
// @ts-expect-error Nested lesson config is readonly.
lesson.sections.allowSkipping = true;
// @ts-expect-error Nested section IDs are readonly.
lesson.sections.content[0] = 'changed';
// @ts-expect-error Nested arrays cannot be mutated.
lesson.sections.content.push('another');

const section = buildLessonSectionConfig({
  id: 'section', lessonId: 'lesson', skippable: false,
  name: { id: 'title', blockType: 'text', allLocales: false, value: { en: 'Title' } },
  content: [{ id: 'body', blockType: 'text', allLocales: false, value: { en: 'Body' } }],
});
// @ts-expect-error Resource arrays in a section are readonly.
section.content.push({ id: 'other', blockType: 'text', allLocales: false, value: { en: 'Other' } });
// @ts-expect-error Localized resource strings are readonly.
section.name.value.en = 'Changed';

const names = {} as Skill_Config['name'];
const skill = buildSkillConfig({
  slug: 'testSkill',
  id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb', name: names,
  description: { methodological: 'English conceptual boundaries.', frontend: names },
});
// @ts-expect-error Skill slug is readonly.
skill.slug = 'changed';
// @ts-expect-error Skill names are readonly.
skill.name.uk = 'Changed';

const group = buildSkillGroupConfig({
  slug: 'testGroup',
  id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb', name: names,
  skills: { first: skill },
});
// @ts-expect-error Skill Group references are readonly.
group.skills.first = skill;

const domain = buildSkillDomainConfig({
  slug: 'testDomain',
  id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb', name: names,
  groups: { first: group },
});
// @ts-expect-error Skill Domain references are readonly.
domain.groups.first = group;

const translated = {} as AssessmentMethod_Config['title'];
const assessment = buildAssessmentMethodConfig({
  id: assessmentMethods_AssessmentMethod_Ids.application, title: translated, description: translated,
});
// @ts-expect-error Assessment Method translations are readonly.
assessment.description.uk = 'Changed';

void [lesson, section, skill, group, domain, assessment];
