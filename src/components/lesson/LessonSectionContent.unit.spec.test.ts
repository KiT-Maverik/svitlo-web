import { createElement } from 'react';
import { describe, expect, it } from 'vitest';
import { LessonSectionContent_fx } from './LessonSectionContent.unit.fx.test';
import LessonSectionContent from './LessonSectionContent';

describe('Components', () => {
  describe('LessonSectionContent', () => {
    it('should render a localized text resource without changing its value', async () => {
      await LessonSectionContent_fx.render();
      expect(LessonSectionContent_fx.selectors.text('Introductory lesson content')).toBeVisible();
    });

    it('should preserve the order of JSX nodes and text resources', async () => {
      const content = [
        createElement('p', { key: 'before' }, 'Before'),
        LessonSectionContent_fx.blocks.text('Middle'),
        createElement('p', { key: 'after' }, 'After'),
      ] as const;
      const { container } = await LessonSectionContent_fx.render({ content: [...content] });
      expect(container.textContent).toBe('BeforeMiddleAfter');
    });

    it('should render markdown content using the locale and RTL direction', async () => {
      await LessonSectionContent_fx.render({
        locale: 'ar-SA',
        content: [LessonSectionContent_fx.blocks.markdown('/content/how-light-moves/sections/theory/markdown/01/ar-sa.md')],
      });
      expect(LessonSectionContent_fx.selectors.article()).toHaveAttribute('lang', 'ar-SA');
      expect(LessonSectionContent_fx.selectors.article()).toHaveAttribute('dir', 'rtl');
      expect(LessonSectionContent_fx.selectors.article().textContent?.trim().length).toBeGreaterThan(0);
    });

    it('should reject resources that do not have a renderer', async () => {
      const unsupported = { id: 'audio-1', blockType: 'audio', locale: 'uk-UA', title: '', description: '', fileLocation: '/x.mp3' } as const;
      await expect(LessonSectionContent({ locale: 'uk-UA', content: [unsupported] })).rejects.toThrow('Unsupported lesson resource type: audio');
    });

    it('should propagate errors when a referenced markdown file does not exist', async () => {
      const missing = LessonSectionContent_fx.blocks.markdown('/missing/not-found.md');
      await expect(LessonSectionContent({ locale: 'uk-UA', content: [missing] })).rejects.toThrow();
    });
  });
});
