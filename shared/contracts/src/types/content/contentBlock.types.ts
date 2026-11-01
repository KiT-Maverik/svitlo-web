import type { LanguageCode, Locale } from '../languages';

/** Supported content block kinds. */
export type ContentBlock_Type = 'text' | 'markdown' | 'code' | 'audio' | 'video' | 'youtube' | 'image' | 'scene';

export interface ContentBlock_ConfigBase<T extends ContentBlock_Type> {
  id: string;
  blockType: T;
}

/** Text values that must be present for every supported locale. */
export type ContentBlock_AllLocales_Config = Record<Locale, string>;

/** Values present for the chosen supported locales. */
export type ContentBlock_ChosenLocales_Config<Locales extends Locale = never> = [Locales] extends [never]
  ? ContentBlock_AnyChosenLocales_Config
  : Record<Locales, string>;

/** A non-empty set of supported locales when the exact set is not shared by a parent object. */
export type ContentBlock_AnyChosenLocales_Config = {
  [LocaleKey in Locale]: Record<LocaleKey, string> & Partial<Record<Exclude<Locale, LocaleKey>, string>>;
}[Locale];

/** Text translations are keyed by language, independently of regional locale tags. */
export type TextContentBlock_AllLanguages_Config = Record<LanguageCode, string>;

export type TextContentBlock_ChosenLanguages_Config<Languages extends LanguageCode = never> = [Languages] extends [never]
  ? TextContentBlock_AnyChosenLanguages_Config
  : Record<Languages, string>;

export type TextContentBlock_AnyChosenLanguages_Config = {
  [Language in LanguageCode]: Record<Language, string> & Partial<Record<Exclude<LanguageCode, Language>, string>>;
}[LanguageCode];

export interface TextContentBlock_AllLocales_Config extends ContentBlock_ConfigBase<'text'> {
  allLocales: true;
  value: TextContentBlock_AllLanguages_Config;
}

export interface TextContentBlock_ChosenLocales_Config<
  Languages extends LanguageCode = never,
> extends ContentBlock_ConfigBase<'text'> {
  allLocales: false;
  value: TextContentBlock_ChosenLanguages_Config<Languages>;
}

export type TextContentBlock_Config<Languages extends LanguageCode = never> =
  TextContentBlock_AllLocales_Config | TextContentBlock_ChosenLocales_Config<Languages>;

export interface TextContentBlock extends ContentBlock_ConfigBase<'text'> {
  locale: Locale;
  value: string;
}

export interface SceneContentBlock_Config<TComponent = unknown> extends ContentBlock_ConfigBase<'scene'> {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the engine. */
  component: TComponent;
}

export type SceneContentBlock = SceneContentBlock_Config;

export interface MarkdownContentBlock_AllLocales_Config extends ContentBlock_ConfigBase<'markdown'> {
  allLocales: true;
  fileLocation: ContentBlock_AllLocales_Config;
}

export interface MarkdownContentBlock_ChosenLocales_Config<
  Locales extends Locale = never,
> extends ContentBlock_ConfigBase<'markdown'> {
  allLocales: false;
  fileLocation: ContentBlock_ChosenLocales_Config<Locales>;
}

export type MarkdownContentBlock_Config<Locales extends Locale = never> =
  MarkdownContentBlock_AllLocales_Config | MarkdownContentBlock_ChosenLocales_Config<Locales>;

export interface MarkdownContentBlock extends ContentBlock_ConfigBase<'markdown'> {
  locale: Locale;
  fileLocation: string;
}

export interface CodeContentBlockParam_AllLocales {
  selector: string;
  values: ContentBlock_AllLocales_Config;
}

export interface CodeContentBlockParam_ChosenLocales<Locales extends Locale = never> {
  selector: string;
  values: ContentBlock_ChosenLocales_Config<Locales>;
}

export interface CodeContentBlock_AllLocales_Config extends ContentBlock_ConfigBase<'code'> {
  allLocales: true;
  fileLocation: ContentBlock_AllLocales_Config;
  codeParams: CodeContentBlockParam_AllLocales[];
}

export interface CodeContentBlock_ChosenLocales_Config<Locales extends Locale = never> extends ContentBlock_ConfigBase<'code'> {
  allLocales: false;
  fileLocation: ContentBlock_ChosenLocales_Config<Locales>;
  codeParams: CodeContentBlockParam_ChosenLocales<Locales>[];
}

export type CodeContentBlock_Config<Locales extends Locale = never> =
  CodeContentBlock_AllLocales_Config | CodeContentBlock_ChosenLocales_Config<Locales>;

export interface CodeContentBlock extends ContentBlock_ConfigBase<'code'> {
  locale: Locale;
  fileLocation: string;
  codeParams: { selector: string; value: string }[];
}

export interface AudioContentBlock_AllLocales_Config extends ContentBlock_ConfigBase<'audio'> {
  allLocales: true;
  fileLocation: ContentBlock_AllLocales_Config;
  title: ContentBlock_AllLocales_Config;
  description: ContentBlock_AllLocales_Config;
}

export interface AudioContentBlock_ChosenLocales_Config<
  Locales extends Locale = never,
> extends ContentBlock_ConfigBase<'audio'> {
  allLocales: false;
  fileLocation: ContentBlock_ChosenLocales_Config<Locales>;
  title: ContentBlock_ChosenLocales_Config<Locales>;
  description: ContentBlock_ChosenLocales_Config<Locales>;
}

export type AudioContentBlock_Config<Locales extends Locale = never> =
  AudioContentBlock_AllLocales_Config | AudioContentBlock_ChosenLocales_Config<Locales>;

export interface AudioContentBlock extends ContentBlock_ConfigBase<'audio'> {
  locale: Locale;
  fileLocation: string;
  title: string;
  description: string;
}

export interface VideoContentBlock_AllLocales_Config extends ContentBlock_ConfigBase<'video'> {
  allLocales: true;
  fileLocation: ContentBlock_AllLocales_Config;
  poster: ContentBlock_AllLocales_Config;
}

export interface VideoContentBlock_ChosenLocales_Config<
  Locales extends Locale = never,
> extends ContentBlock_ConfigBase<'video'> {
  allLocales: false;
  fileLocation: ContentBlock_ChosenLocales_Config<Locales>;
  poster: ContentBlock_ChosenLocales_Config<Locales>;
}

export type VideoContentBlock_Config<Locales extends Locale = never> =
  VideoContentBlock_AllLocales_Config | VideoContentBlock_ChosenLocales_Config<Locales>;

export interface VideoContentBlock extends ContentBlock_ConfigBase<'video'> {
  locale: Locale;
  fileLocation: string;
  poster: string;
}

export interface ImageContentBlock_AllLocales_Config extends ContentBlock_ConfigBase<'image'> {
  allLocales: true;
  fileLocation: ContentBlock_AllLocales_Config;
  alt: ContentBlock_AllLocales_Config;
}

export interface ImageContentBlock_ChosenLocales_Config<
  Locales extends Locale = never,
> extends ContentBlock_ConfigBase<'image'> {
  allLocales: false;
  fileLocation: ContentBlock_ChosenLocales_Config<Locales>;
  alt: ContentBlock_ChosenLocales_Config<Locales>;
}

export type ImageContentBlock_Config<Locales extends Locale = never> =
  ImageContentBlock_AllLocales_Config | ImageContentBlock_ChosenLocales_Config<Locales>;

export interface ImageContentBlock extends ContentBlock_ConfigBase<'image'> {
  locale: Locale;
  fileLocation: string;
  alt: string;
}

export type ContentBlock_Config<Locales extends Locale = never> =
  | TextContentBlock_Config
  | SceneContentBlock_Config
  | MarkdownContentBlock_Config<Locales>
  | CodeContentBlock_Config<Locales>
  | AudioContentBlock_Config<Locales>
  | VideoContentBlock_Config<Locales>
  | ImageContentBlock_Config<Locales>;

export interface ContentBlock_ConfigMap<Locales extends Locale = never> {
  text: TextContentBlock_Config;
  scene: SceneContentBlock_Config;
  markdown: MarkdownContentBlock_Config<Locales>;
  code: CodeContentBlock_Config<Locales>;
  audio: AudioContentBlock_Config<Locales>;
  video: VideoContentBlock_Config<Locales>;
  image: ImageContentBlock_Config<Locales>;
}

export type ContentBlock =
  TextContentBlock | SceneContentBlock | MarkdownContentBlock | CodeContentBlock | AudioContentBlock | VideoContentBlock | ImageContentBlock;

export interface ContentBlockMap {
  text: TextContentBlock;
  scene: SceneContentBlock;
  markdown: MarkdownContentBlock;
  code: CodeContentBlock;
  audio: AudioContentBlock;
  video: VideoContentBlock;
  image: ImageContentBlock;
}
