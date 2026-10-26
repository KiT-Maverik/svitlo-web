import type { Locale } from '../languages';

/** Supported content resource kinds. */
export type Resource_Type = 'text' | 'markdown' | 'code' | 'audio' | 'video'  | 'youtube' | 'image';

export interface Resource_ConfigBase<T extends Resource_Type> {
  id: string;
  blockType: T;
}

/** Text values that must be present for every supported locale. */
export type Resource_AllLocales_Config = Record<Locale, string>;

/** Values present for the chosen supported locales. */
export type Resource_ChosenLocales_Config<Locales extends Locale = never> = [Locales] extends [never]
  ? Resource_AnyChosenLocales_Config
  : Record<Locales, string>;

/** A non-empty set of supported locales when the exact set is not shared by a parent object. */
export type Resource_AnyChosenLocales_Config = {
  [LocaleKey in Locale]: Record<LocaleKey, string> & Partial<Record<Exclude<Locale, LocaleKey>, string>>
}[Locale];

export interface TextResource_AllLocales_Config extends Resource_ConfigBase<'text'> {
  allLocales: true;
  value: Resource_AllLocales_Config;
}

export interface TextResource_ChosenLocales_Config<Locales extends Locale = never> extends Resource_ConfigBase<'text'> {
  allLocales: false;
  value: Resource_ChosenLocales_Config<Locales>;
}

export type TextResource_Config<Locales extends Locale = never> = TextResource_AllLocales_Config | TextResource_ChosenLocales_Config<Locales>;

export interface TextResource extends Resource_ConfigBase<'text'> {
  locale: Locale;
  value: string;
}

export interface MarkdownResource_AllLocales_Config extends Resource_ConfigBase<'markdown'> {
  allLocales: true;
  fileLocation: Resource_AllLocales_Config;
}

export interface MarkdownResource_ChosenLocales_Config<Locales extends Locale = never> extends Resource_ConfigBase<'markdown'> {
  allLocales: false;
  fileLocation: Resource_ChosenLocales_Config<Locales>;
}

export type MarkdownResource_Config<Locales extends Locale = never> = MarkdownResource_AllLocales_Config | MarkdownResource_ChosenLocales_Config<Locales>;

export interface MarkdownResource extends Resource_ConfigBase<'markdown'> {
  locale: Locale;
  fileLocation: string;
}

export interface CodeResourceParam_AllLocales {
  selector: string;
  values: Resource_AllLocales_Config;
}

export interface CodeResourceParam_ChosenLocales<Locales extends Locale = never> {
  selector: string;
  values: Resource_ChosenLocales_Config<Locales>;
}

export interface CodeResource_AllLocales extends Resource_ConfigBase<'code'> {
  allLocales: true;
  fileLocation: Resource_AllLocales_Config;
  codeParams: CodeResourceParam_AllLocales[];
}

export interface CodeResource_ChosenLocales<Locales extends Locale = never> extends Resource_ConfigBase<'code'> {
  allLocales: false;
  fileLocation: Resource_ChosenLocales_Config<Locales>;
  codeParams: CodeResourceParam_ChosenLocales<Locales>[];
}

export type CodeResource<Locales extends Locale = never> = CodeResource_AllLocales | CodeResource_ChosenLocales<Locales>;

export interface AudioResource_AllLocales_Config extends Resource_ConfigBase<'audio'> {
  allLocales: true;
  fileLocation: Resource_AllLocales_Config;
  title: Resource_AllLocales_Config;
  description: Resource_AllLocales_Config;
}

export interface AudioResource_ChosenLocales_Config<Locales extends Locale = never> extends Resource_ConfigBase<'audio'> {
  allLocales: false;
  fileLocation: Resource_ChosenLocales_Config<Locales>;
  title: Resource_ChosenLocales_Config<Locales>;
  description: Resource_ChosenLocales_Config<Locales>;
}

export type AudioResource_Config<Locales extends Locale = never> = AudioResource_AllLocales_Config | AudioResource_ChosenLocales_Config<Locales>;

export interface AudioResource extends Resource_ConfigBase<'audio'> {
  locale: Locale;
  fileLocation: string;
  title: string;
  description: string;
}

export interface VideoResource_AllLocales_Config extends Resource_ConfigBase<'video'> {
  allLocales: true;
  fileLocation: Resource_AllLocales_Config;
  poster: Resource_AllLocales_Config;
}

export interface VideoResource_ChosenLocales_Config<Locales extends Locale = never> extends Resource_ConfigBase<'video'> {
  allLocales: false;
  fileLocation: Resource_ChosenLocales_Config<Locales>;
  poster: Resource_ChosenLocales_Config<Locales>;
}

export type VideoResource_Config<Locales extends Locale = never> = VideoResource_AllLocales_Config | VideoResource_ChosenLocales_Config<Locales>;

export interface VideoResource extends Resource_ConfigBase<'video'> {
  locale: Locale;
  fileLocation: string;
  poster: string;
}

export interface ImageResource_AllLocales_Config extends Resource_ConfigBase<'image'> {
  allLocales: true;
  fileLocation: Resource_AllLocales_Config;
  alt: Resource_AllLocales_Config;
}

export interface ImageResource_ChosenLocales_Config<Locales extends Locale = never> extends Resource_ConfigBase<'image'> {
  allLocales: false;
  fileLocation: Resource_ChosenLocales_Config<Locales>;
  alt: Resource_ChosenLocales_Config<Locales>;
}

export type ImageResource_Config<Locales extends Locale = never> = ImageResource_AllLocales_Config | ImageResource_ChosenLocales_Config<Locales>;

export interface ImageResource extends Resource_ConfigBase<'image'> {
  locale: Locale;
  fileLocation: string;
  alt: string;
}

export type Resource_Config<Locales extends Locale = never> =
  | TextResource_Config<Locales>
  | MarkdownResource_Config<Locales>
  | CodeResource<Locales>
  | AudioResource_Config<Locales>
  | VideoResource_Config<Locales>
  | ImageResource_Config<Locales>;

export interface Resource_ConfigMap<Locales extends Locale = never> {
  text: TextResource_Config<Locales>;
  markdown: MarkdownResource_Config<Locales>;
  code: CodeResource<Locales>;
  audio: AudioResource_Config<Locales>;
  video: VideoResource_Config<Locales>;
  image: ImageResource_Config<Locales>;
}

export type Resource =
  | TextResource
  | MarkdownResource
  | AudioResource
  | VideoResource
  | ImageResource;

export interface ResourceMap {
  text: TextResource;
  markdown: MarkdownResource;
  audio: AudioResource;
  video: VideoResource;
  image: ImageResource;
}
