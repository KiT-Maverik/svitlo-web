import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lessons } from '../src/features/workspaces/catalog';
import { summarizeProgress, validateProgram } from '../src/features/workspaces/selectors';
import { lessonRepository, programRepository } from '../src/features/workspaces/repositories';
test('progress counts only distinct sections belonging to the requested lesson', () => {
  assert.deepEqual(summarizeProgress(lessons[0], { lessonId: 'light', completedSectionIds: ['theory', 'theory', 'foreign', 'practice'] }), { completed: 2, total: 4, percent: 50 });
  assert.equal(summarizeProgress(lessons[0], { lessonId: 'other', completedSectionIds: ['theory'] }).completed, 0);
  assert.equal(summarizeProgress({ ...lessons[0], sections: [] }).percent, 0);
});
test('program drafts validate names, empty selection, duplicates and missing lessons', () => {
  assert.ok(validateProgram({ title: '  ', lessonIds: ['light'] }, lessons));
  assert.ok(validateProgram({ title: 'x'.repeat(121), lessonIds: ['light'] }, lessons));
  assert.ok(validateProgram({ title: 'My program', lessonIds: [] }, lessons));
  assert.ok(validateProgram({ title: 'My program', lessonIds: ['light', 'light'] }, lessons));
  assert.ok(validateProgram({ title: 'My program', lessonIds: ['missing'] }, lessons));
  assert.equal(validateProgram({ title: 'My program', lessonIds: ['light'] }, lessons), null);
});
test('stub mutation ports never change catalog or saved programs', async () => {
  const before = await lessonRepository.list();
  assert.equal((await lessonRepository.proposeEdit('light', { title: 'Changed', description: 'Changed' }, lessons[0].revision)).status, 'not-configured');
  await lessonRepository.proposeRemoval('light', lessons[0].revision);
  assert.deepEqual(await lessonRepository.list(), before);
  const programs = await programRepository.list();
  await programRepository.save({ title: 'New', lessonIds: ['light'] }); await programRepository.remove('intro-light', 1);
  assert.deepEqual(await programRepository.list(), programs);
  before[0].title = 'Local mutation'; assert.equal((await lessonRepository.list())[0].title, lessons[0].title);
});
