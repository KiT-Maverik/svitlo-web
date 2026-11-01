import type {Locales_All, Locales_Single, Locales_Partial, Locale_ResponseParams} from '../locale.types';

export type ContentBlock_Type = 'text' | 'markdown'  | 'diff' | 'code' | 'audio' | 'video' | 'youtube' | 'image' | 'scene';

export type ContentBlock_Meta<T extends ContentBlock_Type> = {
  id: string;
  value: string;
  type: T;
} & Locale_ResponseParams
