import { buildAssessmentMethodConfig } from '@svitlo/engine/builders';
import { assessmentMethods_AssessmentMethod_Ids } from '@svitlo/engine/content';
import { assessmentMethodTranslations } from './translations';

export const knowledgeTransfer_AssessmentMethod_Data = buildAssessmentMethodConfig({
  id: assessmentMethods_AssessmentMethod_Ids.knowledgeTransfer,
  ...assessmentMethodTranslations.knowledgeTransfer,
});
