// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../types/css-modules.d.ts" />
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import styles from './MarkdownContent.module.css';

// Only this local scene can execute scripts; HTML in Markdown is sanitized.
const scenePath = '/content/topics/light/ray-scene.html';
const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'iframe', 'mark', 'aside'],
  attributes: {
    ...defaultSchema.attributes,
    iframe: ['src', 'title'],
  },
};

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <article className={styles.content}>
      <Markdown
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
        components={{
          iframe: ({ src, title }) => src === scenePath ? (
            <iframe
              src={src}
              title={title || 'Інтерактивна сцена'}
              sandbox="allow-scripts"
              loading="lazy"
              className={styles.scene}
            />
          ) : null,
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}
