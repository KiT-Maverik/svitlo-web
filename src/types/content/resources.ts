import type { Locale } from '../languages';

/** Supported content resource kinds. */
export type ResourceType = 'text' | 'markdown' | 'code' | 'audio' | 'video'  | 'youtube' | 'image';

export interface ResourceConfig_Base<T extends ResourceType> {
  id: string;
  blockType: T;
}

/** Text values that must be present for every supported locale. */
export type AllLocales_Config = Record<Locale, string>;

/** Values present for the chosen supported locales. */
export type ChosenLocales_Config<Locales extends Locale = never> = [Locales] extends [never]
  ? AnyChosenLocales_Config
  : Record<Locales, string>;

/** A non-empty set of supported locales when the exact set is not shared by a parent object. */
export type AnyChosenLocales_Config = {
  [LocaleKey in Locale]: Record<LocaleKey, string> & Partial<Record<Exclude<Locale, LocaleKey>, string>>
}[Locale];

export interface TextResource_AllLocales_Config extends ResourceConfig_Base<'text'> {
  allLocales: true;
  value: AllLocales_Config;
}

export interface TextResource_ChosenLocales_Config<Locales extends Locale = never> extends ResourceConfig_Base<'text'> {
  allLocales: false;
  value: ChosenLocales_Config<Locales>;
}

export type TextResource_Config<Locales extends Locale = never> = TextResource_AllLocales_Config | TextResource_ChosenLocales_Config<Locales>;

export interface TextResource extends ResourceConfig_Base<'text'> {
  locale: Locale;
  value: string;
}

export interface MarkdownResource_AllLocales extends ResourceConfig_Base<'markdown'> {
  allLocales: true;
  fileLocation: AllLocales_Config;
}

export interface MarkdownResource_ChosenLocales<Locales extends Locale = never> extends ResourceConfig_Base<'markdown'> {
  allLocales: false;
  fileLocation: ChosenLocales_Config<Locales>;
}

export type MarkdownResource<Locales extends Locale = never> = MarkdownResource_AllLocales | MarkdownResource_ChosenLocales<Locales>;

export interface CodeResourceParam_AllLocales {
  selector: string;
  values: AllLocales_Config;
}

export interface CodeResourceParam_ChosenLocales<Locales extends Locale = never> {
  selector: string;
  values: ChosenLocales_Config<Locales>;
}

export interface CodeResource_AllLocales extends ResourceConfig_Base<'code'> {
  allLocales: true;
  fileLocation: AllLocales_Config;
  codeParams: CodeResourceParam_AllLocales[];
}

export interface CodeResource_ChosenLocales<Locales extends Locale = never> extends ResourceConfig_Base<'code'> {
  allLocales: false;
  fileLocation: ChosenLocales_Config<Locales>;
  codeParams: CodeResourceParam_ChosenLocales<Locales>[];
}

export type CodeResource<Locales extends Locale = never> = CodeResource_AllLocales | CodeResource_ChosenLocales<Locales>;

export interface AudioResource_AllLocales extends ResourceConfig_Base<'audio'> {
  allLocales: true;
  fileLocation: AllLocales_Config;
  title: AllLocales_Config;
  description: AllLocales_Config;
}

export interface AudioResource_ChosenLocales<Locales extends Locale = never> extends ResourceConfig_Base<'audio'> {
  allLocales: false;
  fileLocation: ChosenLocales_Config<Locales>;
  title: ChosenLocales_Config<Locales>;
  description: ChosenLocales_Config<Locales>;
}

export type AudioResource<Locales extends Locale = never> = AudioResource_AllLocales | AudioResource_ChosenLocales<Locales>;

export interface VideoResource_AllLocales extends ResourceConfig_Base<'video'> {
  allLocales: true;
  fileLocation: AllLocales_Config;
  poster: AllLocales_Config;
}

export interface VideoResource_ChosenLocales<Locales extends Locale = never> extends ResourceConfig_Base<'video'> {
  allLocales: false;
  fileLocation: ChosenLocales_Config<Locales>;
  poster: ChosenLocales_Config<Locales>;
}

export type VideoResource<Locales extends Locale = never> = VideoResource_AllLocales | VideoResource_ChosenLocales<Locales>;

export interface ImageResource_AllLocales extends ResourceConfig_Base<'image'> {
  allLocales: true;
  fileLocation: AllLocales_Config;
  alt: AllLocales_Config;
}

export interface ImageResource_ChosenLocales<Locales extends Locale = never> extends ResourceConfig_Base<'image'> {
  allLocales: false;
  fileLocation: ChosenLocales_Config<Locales>;
  alt: ChosenLocales_Config<Locales>;
}

export type ImageResource<Locales extends Locale = never> = ImageResource_AllLocales | ImageResource_ChosenLocales<Locales>;

export type Resource_Config<Locales extends Locale = never> =
  | TextResource_Config<Locales>
  | MarkdownResource<Locales>
  | CodeResource<Locales>
  | AudioResource<Locales>
  | VideoResource<Locales>
  | ImageResource<Locales>;

export interface Resource_ConfigMap<Locales extends Locale = never> {
  text: TextResource_Config<Locales>;
  markdown: MarkdownResource<Locales>;
  code: CodeResource<Locales>;
  audio: AudioResource<Locales>;
  video: VideoResource<Locales>;
  image: ImageResource<Locales>;
}
