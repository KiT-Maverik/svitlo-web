import type { AllLocales, NotLocalized, PartialLocales } from '../locale.types';

export type ContentBlock_Type = 'text' | 'markdown' | 'code' | 'audio' | 'video' | 'youtube' | 'image' | 'scene';

export interface ContentBlock_ConfigBase<T extends ContentBlock_Type> {
  id: string;
  blockType: T;
}

export type ContentBlock_Localized<Value = string> = AllLocales<Value> | PartialLocales<Value> | NotLocalized<Value>;
