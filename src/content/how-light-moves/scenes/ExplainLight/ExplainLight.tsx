import ExplainLightAccordion from './ExplainLightAccordion';
import { locales, type ExplainLightLocaleCode } from './explainLight.locale';
import { getLocaleDirection } from '@types';

export interface ExplainLightProps {
  locale: ExplainLightLocaleCode;
}

/** Keep the translation table on the server; send only one locale to the interactive scene. */
export default function ExplainLight({ locale }: ExplainLightProps) {
  return <ExplainLightAccordion locale={locale} direction={getLocaleDirection(locale)} items={locales[locale].items} />;
}
