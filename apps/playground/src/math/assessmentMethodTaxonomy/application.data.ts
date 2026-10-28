import { buildAssessmentMethodConfig } from '@svitlo/engine/builders';
import { assessmentMethods_AssessmentMethod_Ids } from '@svitlo/engine/content';
import { assessmentMethodTranslations } from './translations';

export const application_AssessmentMethod_Data = buildAssessmentMethodConfig({
  id: assessmentMethods_AssessmentMethod_Ids.application,
  ...assessmentMethodTranslations.application,
});
