import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Fragment, type ReactNode } from 'react';
import { MarkdownContent } from '@/components/widgets';
import type { LessonSection_Config } from '@/types/configs/lesson.types';
import type { Resource_Config } from '@/types/content/resource.types';
import { getLocaleDirection, type Locale } from '@/types/languages';

function isResource(block: Resource_Config | ReactNode): block is Resource_Config {
  return typeof block === 'object' && block !== null && 'blockType' in block;
}

async function readMarkdown(fileLocation: string) {
  'use cache';
  return readFile(path.join(process.cwd(), 'src', fileLocation.slice(1)), 'utf8');
}

export default async function LessonSectionContent({ content, locale }: {
  content: LessonSection_Config['content'];
  locale: Locale;
}) {
  const direction = getLocaleDirection(locale);
  const blocks = await Promise.all(content.map(async (block, index) => {
    if (!isResource(block)) return <Fragment key={index}>{block}</Fragment>;

    if (block.blockType === 'markdown') {
      const fileLocation = block.fileLocation[locale] ?? Object.values(block.fileLocation)[0];
      const markdown = await readMarkdown(fileLocation);
      return <MarkdownContent key={block.id} content={markdown} lang={locale} dir={direction} />;
    }

    throw new Error(`Unsupported lesson resource type: ${block.blockType}`);
  }));

  return <>{blocks}</>;
}
