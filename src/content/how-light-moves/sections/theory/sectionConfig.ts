import type { LessonSection_Config } from '@/types/configs/lesson.types';
import type { MarkdownResource_ChosenLocales } from '@/types/content/resources';

const theoryMarkdown: MarkdownResource_ChosenLocales<'uk-UA'> = {
  id: 'light-theory-markdown',
  blockType: 'markdown',
  allLocales: false,
  fileLocation: { 'uk-UA': '/content/how-light-moves/sections/theory/md/uk.md' },
};

export const theorySectionConfig: LessonSection_Config = {
  id: 'theory',
  name: {
    id: 'section-theory',
    blockType: 'text',
    allLocales: false,
    value: { 'uk-UA': 'Теорія' },
  },
  skippable: false,
  content: [theoryMarkdown],
};
