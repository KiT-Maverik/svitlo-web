import type { AudioContentBlock } from './audio.types';
import type { CodeContentBlock } from './code.types';
import type { ImageContentBlock } from './image.types';
import type { MarkdownContentBlock } from './markdown.types';
import type { SceneContentBlock } from './scene.types';
import type { ContentBlock_Text } from './text.types';
import type { VideoContentBlock } from './video.types';

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
  CodeContentBlock,
  ImageContentBlock,
  MarkdownContentBlock,
  SceneContentBlock,
  ContentBlock_Text,
  VideoContentBlock,
};
