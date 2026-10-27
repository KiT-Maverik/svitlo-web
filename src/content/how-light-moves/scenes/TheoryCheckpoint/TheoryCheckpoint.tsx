'use client';

import { KnowledgeCheckpoint } from '@/components/widgets';
import { useSceneLocales } from '@/components/pages/Lesson/SceneLocaleContext';
import type { TheoryKnowledgeCheckpoint_Locale } from '../../sections/theory/locales/KnowledgeCheckpoint.locale';

export default function TheoryCheckpoint() {
  const { locale, scenes } = useSceneLocales<{ checkpoint: TheoryKnowledgeCheckpoint_Locale }>();
  return <KnowledgeCheckpoint
    locale={locale}
    title={scenes.checkpoint.title}
    items={scenes.checkpoint.items.map(({ question, answer }, index) => ({
      id: `light-explanation-${index + 1}`,
      question,
      answer: { id: `light-explanation-answer-${index + 1}`, blockType: 'text' as const, locale, value: answer },
    }))}
  />;
}
