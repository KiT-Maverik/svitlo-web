import type { Locale } from '../languages';

/** Supported content resource kinds. */
export type ContentType = 'text' | 'markdown' | 'code' | 'audio' | 'video'  | 'youtube' | 'image';

export interface ResourceBase<T extends ContentType> {
  id: string;
  blockType: T;
}

/** Text values that must be present for every supported locale. */
export type AllLocales = Record<Locale, string>;

/** Values present for the chosen supported locales. */
export type ChosenLocales<Locales extends Locale = never> = [Locales] extends [never]
  ? AnyChosenLocales
  : Record<Locales, string>;

/** A non-empty set of supported locales when the exact set is not shared by a parent object. */
export type AnyChosenLocales = {
  [LocaleKey in Locale]: Record<LocaleKey, string> & Partial<Record<Exclude<Locale, LocaleKey>, string>>
}[Locale];

export interface TextResource_AllLocales_Config extends ResourceBase<'text'> {
  allLocales: true;
  value: AllLocales;
}

export interface TextResource_ChosenLocales_Config<Locales extends Locale = never> extends ResourceBase<'text'> {
  allLocales: false;
  value: ChosenLocales<Locales>;
}

export type TextResource_Config<Locales extends Locale = never> = TextResource_AllLocales_Config | TextResource_ChosenLocales_Config<Locales>;

export interface TextResource extends ResourceBase<'text'> {
  value: string;
}

export interface MarkdownResource_AllLocales extends ResourceBase<'markdown'> {
  allLocales: true;
  fileLocation: AllLocales;
}

export interface MarkdownResource_ChosenLocales<Locales extends Locale = never> extends ResourceBase<'markdown'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
}

export type MarkdownResource<Locales extends Locale = never> = MarkdownResource_AllLocales | MarkdownResource_ChosenLocales<Locales>;

export interface CodeResourceParam_AllLocales {
  selector: string;
  values: AllLocales;
}

export interface CodeResourceParam_ChosenLocales<Locales extends Locale = never> {
  selector: string;
  values: ChosenLocales<Locales>;
}

export interface CodeResource_AllLocales extends ResourceBase<'code'> {
  allLocales: true;
  fileLocation: AllLocales;
  codeParams: CodeResourceParam_AllLocales[];
}

export interface CodeResource_ChosenLocales<Locales extends Locale = never> extends ResourceBase<'code'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  codeParams: CodeResourceParam_ChosenLocales<Locales>[];
}

export type CodeResource<Locales extends Locale = never> = CodeResource_AllLocales | CodeResource_ChosenLocales<Locales>;

export interface AudioResource_AllLocales extends ResourceBase<'audio'> {
  allLocales: true;
  fileLocation: AllLocales;
  title: AllLocales;
  description: AllLocales;
}

export interface AudioResource_ChosenLocales<Locales extends Locale = never> extends ResourceBase<'audio'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  title: ChosenLocales<Locales>;
  description: ChosenLocales<Locales>;
}

export type AudioResource<Locales extends Locale = never> = AudioResource_AllLocales | AudioResource_ChosenLocales<Locales>;

export interface VideoResource_AllLocales extends ResourceBase<'video'> {
  allLocales: true;
  fileLocation: AllLocales;
  poster: AllLocales;
}

export interface VideoResource_ChosenLocales<Locales extends Locale = never> extends ResourceBase<'video'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  poster: ChosenLocales<Locales>;
}

export type VideoResource<Locales extends Locale = never> = VideoResource_AllLocales | VideoResource_ChosenLocales<Locales>;

export interface ImageResource_AllLocales extends ResourceBase<'image'> {
  allLocales: true;
  fileLocation: AllLocales;
  alt: AllLocales;
}

export interface ImageResource_ChosenLocales<Locales extends Locale = never> extends ResourceBase<'image'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  alt: ChosenLocales<Locales>;
}

export type ImageResource<Locales extends Locale = never> = ImageResource_AllLocales | ImageResource_ChosenLocales<Locales>;

export type Resource<Locales extends Locale = never> =
  | TextResource_Config<Locales>
  | MarkdownResource<Locales>
  | CodeResource<Locales>
  | AudioResource<Locales>
  | VideoResource<Locales>
  | ImageResource<Locales>;

export type NonEmptyResourceArray<T extends Resource = Resource> = [T, ...T[]];

export interface ResourceMap<Locales extends Locale = never> {
  text: TextResource_Config<Locales>;
  markdown: MarkdownResource<Locales>;
  code: CodeResource<Locales>;
  audio: AudioResource<Locales>;
  video: VideoResource<Locales>;
  image: ImageResource<Locales>;
}
