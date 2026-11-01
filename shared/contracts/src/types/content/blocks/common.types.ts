import type {Locales_All, Locales_Single, Locales_Partial, Locale_ResponseParams} from '../locale.types';

export type ContentBlock_Type = 'text' | 'markdown' | 'code' | 'audio' | 'video' | 'youtube' | 'image' | 'scene';

export interface ContentBlock_ConfigBase {
  id: string;
  type: ContentBlock_Type;
}

export type ContentBlock_Localized<Value = string> = Locales_All<Value> | Locales_Partial<Value> | Locales_Single<Value>;

export type ContentBlock_Meta<T extends ContentBlock_Type> = {
  id: string;
  value: string;
  type: T;
} & Locale_ResponseParams
