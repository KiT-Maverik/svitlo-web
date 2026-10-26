import { createElement, type ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import LessonSectionContent from './LessonSectionContent';

type Props = ComponentProps<typeof LessonSectionContent>;

export const LessonSectionContent_fx = {
  defaults: { locale: 'uk-UA', content: [
    { id: 'text-1', blockType: 'text', locale: 'uk-UA', value: 'Introductory lesson content' },
  ] } satisfies Props,
  render: async (props: Partial<Props> = {}) => {
    const rendered = await LessonSectionContent({ ...LessonSectionContent_fx.defaults, ...props });
    return render(rendered);
  },
  selectors: {
    article: () => screen.getByRole('article'),
    text: (content: string) => screen.getByText(content),
  },
  blocks: {
    text: (value: string, id = 'text-1') =>
      ({ id, blockType: 'text', locale: 'uk-UA', value } as const),
    markdown: (fileLocation: string, id = 'markdown-1') =>
      ({ id, blockType: 'markdown', locale: 'uk-UA', fileLocation } as const),
  },
} as const;
