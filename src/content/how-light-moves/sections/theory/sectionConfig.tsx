import type { LessonSection_Config } from '@/types/configs/lesson.types';
import type { MarkdownResource_ChosenLocales } from '@/types/content/resources';
import type { DefaultSupportedLanguage } from '@/types/languages';
import LightRayDiagram from '../../scenes/LightRayDiagram/LightRayDiagram';
import LightPropagationSimulation from '../../scenes/LightPropagationSimulation/LightPropagationSimulation';
import { getLightPropagationSimulationLocale } from '../../scenes/LightPropagationSimulation/lightPropagationSimulation.locales';

const introduction: MarkdownResource_ChosenLocales<'uk-UA'> = {
  id: '6238256c-30f9-542d-962f-bcd37bcb6cfb',
  blockType: 'markdown',
  allLocales: false,
  fileLocation: { 'uk-UA': '/content/how-light-moves/sections/theory/markdown/01/uk.md' },
};

const continuation: MarkdownResource_ChosenLocales<'uk-UA'> = {
  id: '9d56030c-d6fb-43b1-b4ce-e3eb95727320',
  blockType: 'markdown',
  allLocales: false,
  fileLocation: { 'uk-UA': '/content/how-light-moves/sections/theory/markdown/02/uk.md' },
};

const conclusion: MarkdownResource_ChosenLocales<'uk-UA'> = {
  id: '4e5667d0-42a2-4050-9730-458503c7c9aa',
  blockType: 'markdown',
  allLocales: false,
  fileLocation: { 'uk-UA': '/content/how-light-moves/sections/theory/markdown/03/uk.md' },
};

export function createTheorySectionConfig(locale: DefaultSupportedLanguage['locale']): LessonSection_Config {
  return {
    id: 'ce4b3dd6-92db-5d0c-a4fc-bff481588e8a',
    name: {
      id: 'dcc83b8e-b2ca-54c7-ad81-c32f337c4508',
      blockType: 'text',
      allLocales: false,
      value: { 'uk-UA': 'Теорія' },
    },
    skippable: false,
    content: [
      introduction,
      <LightRayDiagram key="light-ray-diagram" locale={locale} />,
      continuation,
      <LightPropagationSimulation
        key="light-propagation-simulation"
        locale={locale}
        messages={getLightPropagationSimulationLocale(locale)}
      />,
      conclusion,
    ],
  };
}

export const theorySectionConfig = createTheorySectionConfig('uk-UA');
