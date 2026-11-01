import type { ContentBlock_Response_Meta } from './common.types';

export type ImageContentBlock = ContentBlock_Response_Meta<'image'> & {
  fileLocation: string;
  alt: string;
};
