import type { ContentBlock_Meta } from './common.types';

export type AudioContentBlock = ContentBlock_Meta<'audio'> & {
  fileLocation: string;
  title: string;
  description: string;
};
