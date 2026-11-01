import type { ContentBlock_Response_Meta } from './common.types';

export type CodeContentBlock = ContentBlock_Response_Meta<'code'> & {
  fileLocation: string;
  codeParams: { selector: string; value: string }[];
};
