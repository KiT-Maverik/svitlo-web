import type { ContentBlock_Meta } from './common.types';

export type VideoContentBlock = ContentBlock_Meta<'video'> & {
  fileLocation: string;
  poster: string;
};
