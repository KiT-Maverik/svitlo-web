// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../types/css-modules.d.ts" />
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import styles from './MarkdownContent.module.css';

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'mark', 'aside'],
};

export default function MarkdownContent({
  content,
  lang,
  dir,
}: {
  content: string;
  lang?: string;
  dir?: 'ltr' | 'rtl';
}) {
  return (
    <article className={styles.content} lang={lang} dir={dir}>
      <Markdown rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}>{content}</Markdown>
    </article>
  );
}
