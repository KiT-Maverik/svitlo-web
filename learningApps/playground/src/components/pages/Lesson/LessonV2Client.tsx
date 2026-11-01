'use client';

import { Container } from '@mui/material';
import type { ContentBlock_Catalog } from '@svitlo/engine/content';
import {
  ContentBlockCatalogRenderer,
  type ContentBlockReference,
} from './ContentBlockRenderer/ContentBlockRenderer';
import type { LessonResponse } from '@/lib/lessons/assembleLessonResponse';
import { useLessonProgress } from './LessonProgress/LessonProgress';
import { LessonSteps } from './LessonSteps/LessonSteps';
import { howLightMovesSceneRegistry } from './scenes/sceneRegistry';
import styles from './Lesson.module.css';

export default function LessonV2Client({ response }: { response: LessonResponse }) {
  const { progress, dispatch } = useLessonProgress();
  const sections = Object.values(response.sections);
  const current = sections[progress.step];
  if (!progress.ready || !current) return <div className={styles.lesson} />;
  const order = current.contentOrder.map(reference => {
    const slash = reference.indexOf('/');
    return { type: reference.slice(0, slash), key: reference.slice(slash + 1) };
  }) as ContentBlockReference[];
  const isQuiz = Object.keys(current.content.quiz ?? {}).length > 0;
  return (
    <div className={styles.lesson}>
      <LessonSteps
        steps={sections.map(section => ({ id: section.id, title: section.navigationLabel }))}
        currentStep={progress.step}
        unlocked={progress.unlocked}
        completedStep={progress.testDone ? progress.lastStep : undefined}
        showStepNumbers={response.parameters.sections.showIndexes}
        allowNavigation={response.parameters.sections.allowNavigation}
        onNavigate={step => dispatch({ type: 'visit', step })}
      />
      <div key={current.id} className={styles.stage}
        onSubmitCapture={isQuiz ? () => dispatch({ type: 'testDone' }) : undefined}>
        <Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
          <ContentBlockCatalogRenderer
            catalog={current.content as unknown as ContentBlock_Catalog<'response'>}
            order={order}
            sceneRegistry={howLightMovesSceneRegistry}
          />
        </Container>
      </div>
    </div>
  );
}
