import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Fragment, type ReactNode } from 'react';
import { MarkdownContent } from '@/components/widgets';
import type { LessonSection, Resource } from '@types';
import { getLocaleDirection, type Locale } from '@types';

function isResource(block: Resource | ReactNode): block is Resource {
  return typeof block === 'object' && block !== null && 'blockType' in block;
}

async function readMarkdown(fileLocation: string) {
  'use cache';
  return readFile(path.join(process.cwd(), 'src', fileLocation.slice(1)), 'utf8');
}

export default async function LessonSectionContent({ content, locale }: {
  content: LessonSection['content'];
  locale: Locale;
}) {
  const direction = getLocaleDirection(locale);
  const blocks = await Promise.all(content.map(async (block, index) => {
    if (!isResource(block)) return <Fragment key={index}>{block}</Fragment>;

    if (block.blockType === 'markdown') {
      const markdown = await readMarkdown(block.fileLocation);
      return <MarkdownContent key={block.id} content={markdown} lang={locale} dir={direction} />;
    }

    if (block.blockType === 'text') return <Fragment key={block.id}>{block.value}</Fragment>;

    throw new Error(`Unsupported lesson resource type: ${block.blockType}`);
  }));

  return <>{blocks}</>;
}
