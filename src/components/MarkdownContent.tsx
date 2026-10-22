'use client';

import { useEffect, useState } from 'react';
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

export default function MarkdownContent({ src }: { src: string }) {
  return <MarkdownDocument key={src} src={src} />;
}

function MarkdownDocument({ src }: { src: string }) {
  const [state, setState] = useState<
    { status: 'loading' } | { status: 'ready'; text: string } | { status: 'error' }
  >({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch(src, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Content HTTP ${response.status}`);
        const text = await response.text();
        if (!controller.signal.aborted) setState({ status: 'ready', text });
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: 'error' });
      });
    return () => controller.abort();
  }, [src, attempt]);

  if (state.status === 'loading') return <p role="status">Завантажуємо матеріал…</p>;
  if (state.status === 'error') return (
    <div role="alert">
      <p>Не вдалося завантажити матеріал. Перевір з’єднання.</p>
      <button onClick={() => {
        setState({ status: 'loading' });
        setAttempt((value) => value + 1);
      }}>Спробувати ще раз</button>
    </div>
  );

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
        {state.text}
      </Markdown>
    </article>
  );
}
