import type { ContentBlock_Audio } from './audio.types';
import type { ContentBlock_Checkpoint } from './checkpoint.types';
import type { ContentBlock_Code } from './code.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { ContentBlock_Image } from './image.types';
import type { ContentBlock_Markdown } from './markdown.types';
import type { ContentBlock_Scene } from './scene.types';
import type { ContentBlock_Text } from './text.types';
import type { ContentBlock_Video } from './video.types';

export type ContentBlock<ConfigType extends ContentEntity_ConfigType> =
  | ContentBlock_Text<ConfigType>
  | ContentBlock_Checkpoint<ConfigType>
  | ContentBlock_Scene<ConfigType>
  | ContentBlock_Markdown<ConfigType>
  | ContentBlock_Code<ConfigType>
  | ContentBlock_Audio<ConfigType>
  | ContentBlock_Video<ConfigType>
  | ContentBlock_Image<ConfigType>;

export interface ContentBlock_Map<ConfigType extends ContentEntity_ConfigType> {
  text: ContentBlock_Text<ConfigType>;
  checkpoint: ContentBlock_Checkpoint<ConfigType>;
  scene: ContentBlock_Scene<ConfigType>;
  markdown: ContentBlock_Markdown<ConfigType>;
  code: ContentBlock_Code<ConfigType>;
  audio: ContentBlock_Audio<ConfigType>;
  video: ContentBlock_Video<ConfigType>;
  image: ContentBlock_Image<ConfigType>;
}

export type {
  ContentBlock_Audio,
  ContentBlock_Checkpoint,
  ContentBlock_Code,
  ContentBlock_Image,
  ContentBlock_Markdown,
  ContentBlock_Scene,
  ContentBlock_Text,
  ContentBlock_Video,
};
