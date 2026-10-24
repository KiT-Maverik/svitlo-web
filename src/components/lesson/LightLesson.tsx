'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { lightLesson } from '@/content/lightLesson';
import { useLessonProgress } from './LessonProgress';
import MediumPractice from './MediumPractice';
import Celebration, { playCelebration } from './Celebration';
import { QuestionAttempt } from '@/features/questions/QuestionAttempt';
import { QuestionProgress, type QuestionStatus } from './QuestionProgress';
import { LessonSteps } from './LessonSteps';
import { Flashcard } from './Flashcard';
import styles from './Lesson.module.css';

export default function LightLesson({ theory, allowQuestionNavigation = true, allowSectionNavigation = true, showStepNumbers = true }: { theory: ReactNode; allowQuestionNavigation?: boolean; allowSectionNavigation?: boolean; showStepNumbers?: boolean }) {
  const { progress, dispatch } = useLessonProgress();
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [remembered, setRemembered] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionStatuses, setQuestionStatuses] = useState<QuestionStatus[]>(() => lightLesson.questions.map((_, index) => index === 0 ? 'unanswered' : 'deferred'));
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(true);
  const cardRef = useRef<HTMLButtonElement>(null);
  const card = lightLesson.concepts[cardIndex];
  useEffect(() => {
    document.getElementById('learning-content')?.scrollTo({ top: 0 });
  }, [progress.step]);
  function gradeCard(remember: boolean) {
    if (!revealed || progress.cardsDone) return;
    if (remember) setRemembered((value) => value + 1);
    setRevealed(false);
    if (cardIndex + 1 === lightLesson.concepts.length) dispatch({ type: 'cardsDone' });
    else { setCardIndex((value) => value + 1); cardRef.current?.focus(); }
  }
  function nextQuestion(index: number) {
    if (index + 1 === lightLesson.questions.length) {
      dispatch({ type: 'testDone' });
      if (sound) void playCelebration();
    } else setQuestionIndex(index + 1);
  }
  function navigateQuestion(index: number) {
    if (!allowQuestionNavigation || index < 0 || index >= lightLesson.questions.length) return;
    setQuestionIndex(index);
    setQuestionStatuses(statuses => statuses.map((status, current) => current === index && status === 'deferred' ? 'unanswered' : status));
  }
  return <div className={styles.lesson}>
    <LessonSteps steps={lightLesson.steps} currentStep={progress.step} unlocked={progress.unlocked} completedStep={progress.testDone ? 3 : undefined} showStepNumbers={showStepNumbers} allowNavigation={allowSectionNavigation} onNavigate={step => dispatch({ type: 'visit', step })} />
    <div key={progress.step} className={styles.stage}>
      {progress.step === 0 && theory}
      {progress.step === 1 && <MediumPractice />}
      {progress.step === 2 && (progress.cardsDone ? <section className={styles.finish} aria-live="polite">
        <span className={styles.badge} aria-hidden="true">✓</span><h1>Вітаємо, ви повторили матеріал!</h1>
        <p>Переглянуто {lightLesson.concepts.length} карток. Пам’ятаю: {remembered}; варто повторити: {lightLesson.concepts.length - remembered}.</p>
        <button className={styles.primary} onClick={() => dispatch({ type: 'next' })}>Далі →</button>
      </section> : <Flashcard ref={cardRef} question={card.question} answer={card.answer} revealed={revealed} onReveal={() => setRevealed(true)} onRate={gradeCard} />)}
      {progress.step === 3 && (progress.testDone ? <Celebration score={score} total={lightLesson.questions.length} /> : <section className={styles.quiz} aria-label="Тест">
        <QuestionProgress className={styles.questionProgress} statuses={questionStatuses} currentIndex={questionIndex} allowNavigation={allowQuestionNavigation} onNavigate={navigateQuestion} />
        {lightLesson.questions.map((testQuestion, index) => <div key={testQuestion.id} hidden={index !== questionIndex}>
          <QuestionAttempt question={testQuestion} showErrors showCorrectAnswers showExplanation onCheck={event => {
            const status = event.result.status === 'correct' ? 'correct' : event.result.status === 'incorrect' ? 'incorrect' : undefined;
            if (!status) return;
            const nextStatuses = questionStatuses.map((currentStatus, currentIndex) => currentIndex === index ? status : currentIndex === index + 1 && currentStatus === 'deferred' ? 'unanswered' : currentStatus);
            setQuestionStatuses(nextStatuses);
            setScore(nextStatuses.filter(currentStatus => currentStatus === 'correct').length);
          }} actionSlots={{ center: context => context.hasChecked ? <button className={styles.primary} onClick={() => nextQuestion(index)}>{index + 1 === lightLesson.questions.length ? 'Завершити урок' : 'Наступне питання →'}</button> : context.children }} />
        </div>)}
        <label className={styles.sound}><input type="checkbox" checked={sound} onChange={(event) => setSound(event.target.checked)} /> Звук завершення</label>
      </section>)}
    </div>
  </div>;
}
