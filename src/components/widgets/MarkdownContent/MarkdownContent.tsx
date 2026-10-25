// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../types/css-modules.d.ts" />
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import type { ReactNode } from 'react';
import styles from './MarkdownContent.module.css';

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'mark', 'aside'],
};

export default function MarkdownContent({ content, scenes = {} }: { content: string; scenes?: Record<string, ReactNode> }) {
  return (
    <article className={styles.content}>
      {content.split(/(\{\{scene:[\w-]+\}\})/g).map((part, index) => {
        const scene = /^\{\{scene:([\w-]+)\}\}$/.exec(part);
        if (scene) return <div key={index}>{scenes[scene[1]]}</div>;
        return <Markdown key={index} rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}>{part}</Markdown>;
      })}
    </article>
  );
}
