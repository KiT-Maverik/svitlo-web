import type { Locale } from '../languages';

/** Supported content resource kinds. */
export type ContentType = 'text' | 'markdown' | 'html' | 'code' | 'audio' | 'video' | 'image';

export interface ResourceBase<T extends ContentType> {
  id: string;
  blockType: T;
}

/** Text values that must be present for every supported locale. */
export type AllLocales = Record<Locale, string>;

/** Text values present for at least one supported locale, with no upper limit. */
export type ChosenLocales = {
  [LocaleKey in Locale]: Record<LocaleKey, string> & Partial<Record<Exclude<Locale, LocaleKey>, string>>
}[Locale];

export interface TextResource_AllLocales extends ResourceBase<'text'> {
  allLocales: true;
  value: AllLocales;
}

export interface TextResource_ChosenLocales extends ResourceBase<'text'> {
  allLocales: false;
  value: ChosenLocales;
}

export type TextResource = TextResource_AllLocales | TextResource_ChosenLocales;

export interface MarkdownResource extends ResourceBase<'markdown'> {
  fileLocation: string;
}

export interface HtmlResource extends ResourceBase<'html'> {
  fileLocation: string;
}

export interface CodeResource extends ResourceBase<'code'> {
  fileLocation: string;
}

export interface AudioResource extends ResourceBase<'audio'> {
  fileLocation: string;
}

export interface VideoResource extends ResourceBase<'video'> {
  fileLocation: string;
  poster: string;
}

export interface ImageResource extends ResourceBase<'image'> {
  fileLocation: string;
  alt: string;
}

export type Resource =
  | TextResource
  | MarkdownResource
  | HtmlResource
  | CodeResource
  | AudioResource
  | VideoResource
  | ImageResource;

export interface ResourceMap {
  text: TextResource;
  markdown: MarkdownResource;
  html: HtmlResource;
  code: CodeResource;
  audio: AudioResource;
  video: VideoResource;
  image: ImageResource;
}
