import type { ContentBlock_Response_Meta } from './common.types';

export type VideoContentBlock = ContentBlock_Response_Meta<'video'> & {
  fileLocation: string;
  poster: string;
};
