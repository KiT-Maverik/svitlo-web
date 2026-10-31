'use client';

import { KnowledgeCheckpoint } from '@svitlo/ui-kit';
import { useSceneLocales } from '@/components/pages/Lesson/SceneLocaleContext';
import type { TheoryKnowledgeCheckpoint_Locale } from './Checkpoint.types';

export function Checkpoint() {
  const { locale, scenes } = useSceneLocales<{ checkpoint: TheoryKnowledgeCheckpoint_Locale }>();
  return (
    <KnowledgeCheckpoint
      locale={locale}
      title={scenes.checkpoint.title}
      items={scenes.checkpoint.items.map(({ question, answer }, index) => ({
        id: `light-explanation-${index + 1}`,
        question,
        answer: { id: `light-explanation-answer-${index + 1}`, blockType: 'text' as const, locale, value: answer },
      }))}
    />
  );
}
