export type ContentBlock_Type = 'text' | 'markdown'  | 'checkpoint' | 'diff' | 'code' | 'audio' | 'video' | 'youtube' | 'image' | 'scene';

export type ContentBlock_Response_Meta<T extends ContentBlock_Type> = {
  id: string;
  type: T;
}

export type ContentBlock_Definition_Meta<T extends ContentBlock_Type> = {
  type: T;
}
