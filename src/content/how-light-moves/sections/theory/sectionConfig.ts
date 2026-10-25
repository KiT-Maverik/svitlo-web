import type { LessonSection_Config } from '@/types/configs/lesson.types';
import type { MarkdownResource_ChosenLocales } from '@/types/content/resources';
import { createLocalizedFileLocations } from '@/utils/createLocalizedFileLocations/createLocalizedFileLocations';

const theoryMarkdown: MarkdownResource_ChosenLocales<'uk-UA'> = {
  id: '6238256c-30f9-542d-962f-bcd37bcb6cfb',
  blockType: 'markdown',
  allLocales: false,
  fileLocation: createLocalizedFileLocations(
    '/content/how-light-moves/sections/theory/markdown',
    'md',
    { only: ['uk-UA'] },
  ),
};

export const theorySectionConfig: LessonSection_Config = {
  id: 'ce4b3dd6-92db-5d0c-a4fc-bff481588e8a',
  name: {
    id: 'dcc83b8e-b2ca-54c7-ad81-c32f337c4508',
    blockType: 'text',
    allLocales: false,
    value: { 'uk-UA': 'Теорія' },
  },
  skippable: false,
  content: [theoryMarkdown],
};
