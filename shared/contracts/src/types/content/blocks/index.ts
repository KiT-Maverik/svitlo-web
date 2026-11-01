import type { ContentBlock_Audio } from './audio.types';
import type { ContentBlock_Checkpoint } from './checkpoint.types';
import type { ContentBlock_Code } from './code.types';
import type { ContentBlock_Type } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { ContentBlock_Image } from './image.types';
import type { ContentBlock_Markdown } from './markdown.types';
import type { ContentBlock_Scene } from './scene.types';
import type { ContentBlock_Text } from './text.types';
import type { ContentBlock_Video } from './video.types';
import type { ContentBlock_Youtube } from './youtube.types';

export type ContentBlock<ConfigType extends ContentEntity_ConfigType> =
  | ContentBlock_Text<ConfigType>
  | ContentBlock_Checkpoint<ConfigType>
  | ContentBlock_Scene<ConfigType>
  | ContentBlock_Markdown<ConfigType>
  | ContentBlock_Code<ConfigType>
  | ContentBlock_Audio<ConfigType>
  | ContentBlock_Video<ConfigType>
  | ContentBlock_Youtube<ConfigType>
  | ContentBlock_Image<ConfigType>;

export interface ContentBlock_Map<ConfigType extends ContentEntity_ConfigType> {
  text: ContentBlock_Text<ConfigType>;
  checkpoint: ContentBlock_Checkpoint<ConfigType>;
  scene: ContentBlock_Scene<ConfigType>;
  markdown: ContentBlock_Markdown<ConfigType>;
  code: ContentBlock_Code<ConfigType>;
  audio: ContentBlock_Audio<ConfigType>;
  video: ContentBlock_Video<ConfigType>;
  youtube: ContentBlock_Youtube<ConfigType>;
  image: ContentBlock_Image<ConfigType>;
}

export type ContentBlock_Catalog<ConfigType extends ContentEntity_ConfigType> = {
  [Type in ContentBlock_Type & keyof ContentBlock_Map<ConfigType>]?: Record<string, ContentBlock_Map<ConfigType>[Type]>;
};

export type {
  ContentBlock_Audio,
  ContentBlock_Checkpoint,
  ContentBlock_Code,
  ContentBlock_Image,
  ContentBlock_Markdown,
  ContentBlock_Scene,
  ContentBlock_Text,
  ContentBlock_Video,
  ContentBlock_Youtube,
};
