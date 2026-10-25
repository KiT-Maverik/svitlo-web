import type { LessonSection_Config } from '@/types/configs/lesson.types';
import type { MarkdownResource_ChosenLocales } from '@/types/content/resources';

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

export const theorySectionConfig = {
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
    { id: '39757199-ea6a-4b9c-9373-f9de2135cc72', blockType: 'scene', scene: 'ray' as const },
    continuation,
  ],
} satisfies LessonSection_Config;
