import type { AllLocales } from '../locale.types';
import type { AudioContentBlock, AudioContentBlock_Config } from './audio.types';
import type { CodeContentBlock, CodeContentBlock_Config } from './code.types';
import type { ContentBlock_Localized } from './common.types';
import type { ImageContentBlock, ImageContentBlock_Config } from './image.types';
import type { MarkdownContentBlock, MarkdownContentBlock_Config } from './markdown.types';
import type { SceneContentBlock, SceneContentBlock_Config } from './scene.types';
import type { TextContentBlock, TextContentBlock_Config } from './text.types';
import type { VideoContentBlock, VideoContentBlock_Config } from './video.types';

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
  TextContentBlock,
  TextContentBlock_Config,
  VideoContentBlock,
  VideoContentBlock_Config,
};
