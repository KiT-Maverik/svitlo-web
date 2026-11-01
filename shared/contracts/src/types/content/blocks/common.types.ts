import type { Locale } from '../../languages';
import type { AllLocales, NotLocalized, PartialLocales } from '../locale.types';

/** Supported content block kinds. */
export type ContentBlock_Type = 'text' | 'markdown' | 'code' | 'audio' | 'video' | 'youtube' | 'image' | 'scene';

export interface ContentBlock_ConfigBase<T extends ContentBlock_Type> {
  id: string;
  blockType: T;
}

/** A value localized for all languages, for some languages with a fallback, or not localized. */
export type ContentBlock_Localized<Value = string> = AllLocales<Value> | PartialLocales<Value> | NotLocalized<Value>;

export type TextContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'text'> & {
    value: LocalizedValue;
  };

export interface TextContentBlock extends ContentBlock_ConfigBase<'text'> {
  locale: Locale;
  value: string;
}

export interface SceneContentBlock_Config<TComponent = unknown> extends ContentBlock_ConfigBase<'scene'> {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the engine. */
  component: TComponent;
}

export type SceneContentBlock = SceneContentBlock_Config;

export type MarkdownContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'markdown'> & {
    fileLocation: LocalizedValue;
  };

export interface MarkdownContentBlock extends ContentBlock_ConfigBase<'markdown'> {
  locale: Locale;
  fileLocation: string;
}

export interface CodeContentBlockParam<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> {
  selector: string;
  values: LocalizedValue;
}

export type CodeContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'code'> & {
    fileLocation: LocalizedValue;
    codeParams: CodeContentBlockParam<LocalizedValue>[];
  };

export interface CodeContentBlock extends ContentBlock_ConfigBase<'code'> {
  locale: Locale;
  fileLocation: string;
  codeParams: { selector: string; value: string }[];
}

export type AudioContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'audio'> & {
    fileLocation: LocalizedValue;
    title: LocalizedValue;
    description: LocalizedValue;
  };

export interface AudioContentBlock extends ContentBlock_ConfigBase<'audio'> {
  locale: Locale;
  fileLocation: string;
  title: string;
  description: string;
}

export type VideoContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'video'> & {
    fileLocation: LocalizedValue;
    poster: LocalizedValue;
  };

export interface VideoContentBlock extends ContentBlock_ConfigBase<'video'> {
  locale: Locale;
  fileLocation: string;
  poster: string;
}

export type ImageContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'image'> & {
    fileLocation: LocalizedValue;
    alt: LocalizedValue;
  };

export interface ImageContentBlock extends ContentBlock_ConfigBase<'image'> {
  locale: Locale;
  fileLocation: string;
  alt: string;
}

export type ContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  | TextContentBlock_Config<LocalizedValue>
  | SceneContentBlock_Config
  | MarkdownContentBlock_Config<LocalizedValue>
  | CodeContentBlock_Config<LocalizedValue>
  | AudioContentBlock_Config<LocalizedValue>
  | VideoContentBlock_Config<LocalizedValue>
  | ImageContentBlock_Config<LocalizedValue>;

export interface ContentBlock_ConfigMap<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> {
  text: TextContentBlock_Config<LocalizedValue>;
  scene: SceneContentBlock_Config;
  markdown: MarkdownContentBlock_Config<LocalizedValue>;
  code: CodeContentBlock_Config<LocalizedValue>;
  audio: AudioContentBlock_Config<LocalizedValue>;
  video: VideoContentBlock_Config<LocalizedValue>;
  image: ImageContentBlock_Config<LocalizedValue>;
}

export type ContentBlock =
  | TextContentBlock
  | SceneContentBlock
  | MarkdownContentBlock
  | CodeContentBlock
  | AudioContentBlock
  | VideoContentBlock
  | ImageContentBlock;

export interface ContentBlockMap {
  text: TextContentBlock;
  scene: SceneContentBlock;
  markdown: MarkdownContentBlock;
  code: CodeContentBlock;
  audio: AudioContentBlock;
  video: VideoContentBlock;
  image: ImageContentBlock;
}
