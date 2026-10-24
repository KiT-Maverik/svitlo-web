import type { Locale } from '../languages';

/** Supported content resource kinds. */
export type ContentType = 'text' | 'markdown' | 'html' | 'code' | 'audio' | 'video' | 'image';

export interface ResourceBase<T extends ContentType> {
  id: string;
  blockType: T;
}

/** Text values that must be present for every supported locale. */
export type AllLocales = Record<Locale, string>;

/** Values present for the chosen supported locales. */
export type ChosenLocales<Locales extends Locale = Locale> = Record<Locales, string>;

export interface TextResource_AllLocales extends ResourceBase<'text'> {
  allLocales: true;
  value: AllLocales;
}

export interface TextResource_ChosenLocales<Locales extends Locale = Locale> extends ResourceBase<'text'> {
  allLocales: false;
  value: ChosenLocales<Locales>;
}

export type TextResource<Locales extends Locale = Locale> = TextResource_AllLocales | TextResource_ChosenLocales<Locales>;

export interface MarkdownResource_AllLocales extends ResourceBase<'markdown'> {
  allLocales: true;
  fileLocation: AllLocales;
}

export interface MarkdownResource_ChosenLocales<Locales extends Locale = Locale> extends ResourceBase<'markdown'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
}

export type MarkdownResource<Locales extends Locale = Locale> = MarkdownResource_AllLocales | MarkdownResource_ChosenLocales<Locales>;

export interface HtmlResourceParam_AllLocales {
  selector: string;
  values: AllLocales;
}

export interface HtmlResourceParam_ChosenLocales<Locales extends Locale = Locale> {
  selector: string;
  values: ChosenLocales<Locales>;
}

export interface HtmlResource_AllLocales extends ResourceBase<'html'> {
  allLocales: true;
  fileLocation: AllLocales;
  htmlParams: HtmlResourceParam_AllLocales[];
}

export interface HtmlResource_ChosenLocales<Locales extends Locale = Locale> extends ResourceBase<'html'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  htmlParams: HtmlResourceParam_ChosenLocales<Locales>[];
}

export type HtmlResource<Locales extends Locale = Locale> = HtmlResource_AllLocales | HtmlResource_ChosenLocales<Locales>;

export interface CodeResource extends ResourceBase<'code'> {
  fileLocation: string;
}

export interface AudioResource_AllLocales extends ResourceBase<'audio'> {
  allLocales: true;
  fileLocation: AllLocales;
  title: AllLocales;
}

export interface AudioResource_ChosenLocales<Locales extends Locale = Locale> extends ResourceBase<'audio'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  title: ChosenLocales<Locales>;
}

export type AudioResource<Locales extends Locale = Locale> = AudioResource_AllLocales | AudioResource_ChosenLocales<Locales>;

export interface VideoResource_AllLocales extends ResourceBase<'video'> {
  allLocales: true;
  fileLocation: AllLocales;
  poster: AllLocales;
}

export interface VideoResource_ChosenLocales<Locales extends Locale = Locale> extends ResourceBase<'video'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  poster: ChosenLocales<Locales>;
}

export type VideoResource<Locales extends Locale = Locale> = VideoResource_AllLocales | VideoResource_ChosenLocales<Locales>;

export interface ImageResource_AllLocales extends ResourceBase<'image'> {
  allLocales: true;
  fileLocation: AllLocales;
  alt: AllLocales;
}

export interface ImageResource_ChosenLocales<Locales extends Locale = Locale> extends ResourceBase<'image'> {
  allLocales: false;
  fileLocation: ChosenLocales<Locales>;
  alt: ChosenLocales<Locales>;
}

export type ImageResource<Locales extends Locale = Locale> = ImageResource_AllLocales | ImageResource_ChosenLocales<Locales>;

export type Resource<Locales extends Locale = Locale> =
  | TextResource<Locales>
  | MarkdownResource<Locales>
  | HtmlResource<Locales>
  | CodeResource
  | AudioResource<Locales>
  | VideoResource<Locales>
  | ImageResource<Locales>;

export interface ResourceMap<Locales extends Locale = Locale> {
  text: TextResource<Locales>;
  markdown: MarkdownResource<Locales>;
  html: HtmlResource<Locales>;
  code: CodeResource;
  audio: AudioResource<Locales>;
  video: VideoResource<Locales>;
  image: ImageResource<Locales>;
}
