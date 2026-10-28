// Canonical functionality is provided through public Engine APIs. Legacy paths re-export the same implementations.
export { buildLesson, buildQuestion, buildQuiz, buildResource, buildTextResource, createTextResource, buildLessonConfig, buildLessonSectionConfig, buildAssessmentMethodConfig } from '@svitlo/engine/builders';
export { createDynamicQuestion, validateArgument, validateBooleanArgument, validateNumberArgument, validateStringArgument } from '@svitlo/engine/generation';
export type * from '@svitlo/engine/generation';
export { createLocalizedFileLocations } from '@svitlo/engine/localization';
export type { CreateLocalizedFileLocationsOptions, LocalizedFileLocations } from '@svitlo/engine/localization';
export { buildSkillConfig, buildSkillGroupConfig, buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
