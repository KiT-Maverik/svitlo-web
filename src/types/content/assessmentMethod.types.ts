import type { LanguageCode } from '../languages';
import { assessmentMethods_AssessmentMethod_Ids } from '../../../math/assessmentMethodTaxonomy/index.ids';

export type AssessmentMethodKey = keyof typeof assessmentMethods_AssessmentMethod_Ids;
/** Restrict authored questions to the 16 stable Assessment Method UUIDs. */
export type AssessmentMethodId = (typeof assessmentMethods_AssessmentMethod_Ids)[AssessmentMethodKey];

/** The cognitive operation assessed, not the answer input widget. */
export interface AssessmentMethod_Config {
  id: AssessmentMethodId;
  title: Readonly<Record<LanguageCode, string>>;
  description: Readonly<Record<LanguageCode, string>>;
}

export type AssessmentMethod = AssessmentMethod_Config;
