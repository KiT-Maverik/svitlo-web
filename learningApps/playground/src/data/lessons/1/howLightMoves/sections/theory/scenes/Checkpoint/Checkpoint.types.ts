import type { ContentBlock_Checkpoint } from '@svitlo/engine/content';

export type Checkpoint_Locale = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type TheoryKnowledgeCheckpoint_Locale = Checkpoint_Locale;

export type Checkpoint_ContentBlock<ConfigType extends 'definition' | 'data' | 'response'> =
  ContentBlock_Checkpoint<ConfigType>;

export const checkpointDefinition = {
  type: 'checkpoint',
} satisfies Checkpoint_ContentBlock<'definition'>;
