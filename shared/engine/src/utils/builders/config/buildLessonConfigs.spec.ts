import assert from 'node:assert/strict';
import { it } from 'node:test';
import type { LessonSection_Config } from '../../../content';
import { buildLessonConfig } from './buildLessonConfig.utils';
import { buildLessonSectionConfig } from './buildLessonSectionConfig.utils';

it('adds the lesson discriminator without mutating authored data', () => {
  const source = {
    id: 'lesson',
    slug: 'math',
    requireQuiz: false,
    title: 'title',
    sections: { allowNavigation: true, allowSkipping: false, showIndexes: true, content: ['section'] as [string] },
  };
  const result = buildLessonConfig(source);
  assert.deepEqual(result, { ...source, collection: 'lesson' });
  assert.equal('collection' in source, false);
});

it('adds the lesson section discriminator without mutating authored data', () => {
  const source = {
    id: 'section',
    lessonId: 'lesson',
    skippable: false,
    name: { id: 'title', blockType: 'text', allLocales: false, value: { en: 'Title' } },
    content: [{ id: 'body', blockType: 'text', allLocales: false, value: { en: 'Body' } }],
  } satisfies Omit<LessonSection_Config, 'collection'>;
  const result = buildLessonSectionConfig(source);
  assert.deepEqual(result, { ...source, collection: 'lessonSection' });
  assert.equal('collection' in source, false);
});
