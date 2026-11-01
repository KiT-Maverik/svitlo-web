import type { AudioContentBlock } from './audio.types';
import type { CodeContentBlock } from './code.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { ImageContentBlock } from './image.types';
import type { MarkdownContentBlock } from './markdown.types';
import type { SceneContentBlock } from './scene.types';
import type { ContentBlock_Text } from './text.types';
import type { VideoContentBlock } from './video.types';

export type ContentBlock<ConfigType extends ContentEntity_ConfigType> =
  | ContentBlock_Text<ConfigType>
  | SceneContentBlock<ConfigType>
  | MarkdownContentBlock<ConfigType>
  | CodeContentBlock<ConfigType>
  | AudioContentBlock<ConfigType>
  | VideoContentBlock<ConfigType>
  | ImageContentBlock<ConfigType>;

export interface ContentBlockMap<ConfigType extends ContentEntity_ConfigType> {
  text: ContentBlock_Text<ConfigType>;
  scene: SceneContentBlock<ConfigType>;
  markdown: MarkdownContentBlock<ConfigType>;
  code: CodeContentBlock<ConfigType>;
  audio: AudioContentBlock<ConfigType>;
  video: VideoContentBlock<ConfigType>;
  image: ImageContentBlock<ConfigType>;
}

export type {
  AudioContentBlock,
  CodeContentBlock,
  ImageContentBlock,
  MarkdownContentBlock,
  SceneContentBlock,
  ContentBlock_Text,
  VideoContentBlock,
};
