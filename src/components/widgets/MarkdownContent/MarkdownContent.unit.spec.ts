import { describe, expect, it } from 'vitest';
import { MarkdownContent_fx } from './MarkdownContent.unit.fx';

describe('Widgets', () => {
  describe('MarkdownContent', () => {
    it('should render markdown headings and accessible links', () => {
      MarkdownContent_fx.render({ content: '# Lesson title\n\n[Reference](https://example.org/lesson)' });
      expect(MarkdownContent_fx.selectors.heading('Lesson title')).toBeVisible();
      expect(MarkdownContent_fx.selectors.link('Reference')).toHaveAttribute('href', 'https://example.org/lesson');
    });

    it('should preserve the supplied language and text direction', () => {
      MarkdownContent_fx.render({ lang: 'ar-SA', dir: 'rtl' });
      expect(MarkdownContent_fx.selectors.article()).toHaveAttribute('lang', 'ar-SA');
      expect(MarkdownContent_fx.selectors.article()).toHaveAttribute('dir', 'rtl');
    });

    it('should render the supported mark and aside elements', () => {
      MarkdownContent_fx.render({ content: '<aside><mark>Highlighted lesson</mark></aside>' });
      expect(MarkdownContent_fx.selectors.article().querySelector('aside mark')).toHaveTextContent('Highlighted lesson');
    });

    it('should remove scripts and executable event attributes from untrusted HTML', () => {
      MarkdownContent_fx.render({ content: '<p onclick="alert(1)">Safe content</p><script>alert(1)</script>' });
      const article = MarkdownContent_fx.selectors.article();
      expect(article).toHaveTextContent('Safe content');
      expect(article.querySelector('script')).toBeNull();
      expect(article.querySelector('[onclick]')).toBeNull();
    });
  });
});
