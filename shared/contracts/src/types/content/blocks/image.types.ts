import type { ContentBlock_Meta } from './common.types';

export type ImageContentBlock = ContentBlock_Meta<'image'> & {
  fileLocation: string;
  alt: string;
};
