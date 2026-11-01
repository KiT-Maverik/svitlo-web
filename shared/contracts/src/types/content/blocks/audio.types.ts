import type { ContentBlock_Response_Meta } from './common.types';

export type AudioContentBlock = ContentBlock_Response_Meta<'audio'> & {
  fileLocation: string;
  title: string;
  description: string;
};
