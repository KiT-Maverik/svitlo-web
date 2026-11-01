import type { ContentBlock_Response_Meta } from './common.types';

export type MarkdownContentBlock = ContentBlock_Response_Meta<'markdown'> & {
  fileLocation: string;
};
