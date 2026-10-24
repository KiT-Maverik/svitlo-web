/** Supported content resource kinds. */
export type ContentType = 'text' | 'markdown' | 'html' | 'code' | 'audio' | 'video' | 'image';

export interface ResourceBase<T extends ContentType> {
  id: string;
  blockType: T;
}

export interface TextResource extends ResourceBase<'text'> {
  value: string;
}

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
