import type { ContentBlock_Meta } from './common.types';

export type MarkdownContentBlock = ContentBlock_Meta<'markdown'> & {
  fileLocation: string;
};
