import type { ContentBlock_Meta } from './common.types';

export type CodeContentBlock = ContentBlock_Meta<'code'> & {
  fileLocation: string;
  codeParams: { selector: string; value: string }[];
};
