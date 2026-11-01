import type { Locales_All } from '../locale.types';
import type { AudioContentBlock, AudioContentBlock_Config } from './audio.types';
import type { CodeContentBlock, CodeContentBlock_Config } from './code.types';
import type { ContentBlock_Localized } from './common.types';
import type { ImageContentBlock, ImageContentBlock_Config } from './image.types';
import type { MarkdownContentBlock, MarkdownContentBlock_Config } from './markdown.types';
import type { SceneContentBlock, SceneContentBlock_Config } from './scene.types';
import type { ContentBlock_Text, ContentBlock_Text_Config } from './text.types';
import type { VideoContentBlock, VideoContentBlock_Config } from './video.types';

export type ContentBlock_Config<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> =
  | ContentBlock_Text_Config<LocalizedValue>
  | SceneContentBlock_Config
  | MarkdownContentBlock_Config<LocalizedValue>
  | CodeContentBlock_Config<LocalizedValue>
  | AudioContentBlock_Config<LocalizedValue>
  | VideoContentBlock_Config<LocalizedValue>
  | ImageContentBlock_Config<LocalizedValue>;

export interface ContentBlock_ConfigMap<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> {
  text: ContentBlock_Text_Config<LocalizedValue>;
  scene: SceneContentBlock_Config;
  markdown: MarkdownContentBlock_Config<LocalizedValue>;
  code: CodeContentBlock_Config<LocalizedValue>;
  audio: AudioContentBlock_Config<LocalizedValue>;
  video: VideoContentBlock_Config<LocalizedValue>;
  image: ImageContentBlock_Config<LocalizedValue>;
}

export type ContentBlock =
  | ContentBlock_Text
  | SceneContentBlock
  | MarkdownContentBlock
  | CodeContentBlock
  | AudioContentBlock
  | VideoContentBlock
  | ImageContentBlock;

export interface ContentBlockMap {
  text: ContentBlock_Text;
  scene: SceneContentBlock;
  markdown: MarkdownContentBlock;
  code: CodeContentBlock;
  audio: AudioContentBlock;
  video: VideoContentBlock;
  image: ImageContentBlock;
}

export type {
  AudioContentBlock,
  AudioContentBlock_Config,
  CodeContentBlock,
  CodeContentBlock_Config,
  ImageContentBlock,
  ImageContentBlock_Config,
  MarkdownContentBlock,
  MarkdownContentBlock_Config,
  SceneContentBlock,
  SceneContentBlock_Config,
  ContentBlock_Text,
  ContentBlock_Text_Config,
  VideoContentBlock,
  VideoContentBlock_Config,
};
