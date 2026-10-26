'use client';

import { KnowledgeCheckpoint } from '@/components/widgets';
import { useLightSceneLocales } from '../../useLightSceneLocales';

export default function TheoryCheckpoint() {
  const { locale, scenes } = useLightSceneLocales();
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
