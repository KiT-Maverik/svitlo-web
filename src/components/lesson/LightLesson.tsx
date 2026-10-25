'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { lightQuestions } from '@/content/how-light-moves/sections/quiz/sectionConfig';
import { useLessonProgress } from './LessonProgress';
import MediumPractice from './MediumPractice';
import Celebration, { playCelebration } from './Celebration';
import { QuestionAttempt } from '@/components/widgets/questions/helpers';
import { QuestionProgress, type QuestionStatus } from './QuestionProgress';
import { LessonSteps } from './LessonSteps';
import styles from './Lesson.module.css';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { getLocaleDirection } from '@/types/languages';

export default function LightLesson({ theory, allowQuestionNavigation = true, allowSectionNavigation = true, showStepNumbers = true }: { theory: ReactNode; allowQuestionNavigation?: boolean; allowSectionNavigation?: boolean; showStepNumbers?: boolean }) {
  const { locale } = useLocale();
  const rtl = getLocaleDirection(locale) === 'rtl';
  const { progress, dispatch } = useLessonProgress();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionStatuses, setQuestionStatuses] = useState<QuestionStatus[]>(() => lightQuestions.map((_, index) => index === 0 ? 'unanswered' : 'deferred'));
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(true);
  useEffect(() => {
    document.getElementById('learning-content')?.scrollTo({ top: 0 });
  }, [progress.step]);
  function nextQuestion(index: number) {
    if (index + 1 === lightQuestions.length) {
      dispatch({ type: 'testDone' });
      if (sound) void playCelebration();
    } else setQuestionIndex(index + 1);
  }
  function navigateQuestion(index: number) {
    if (!allowQuestionNavigation || index < 0 || index >= lightQuestions.length) return;
    setQuestionIndex(index);
    setQuestionStatuses(statuses => statuses.map((status, current) => current === index && status === 'deferred' ? 'unanswered' : status));
  }
  return <div className={styles.lesson}>
    <LessonSteps steps={[{ id: 'theory', title: 'Теорія' }, { id: 'practice', title: 'Практика' }, { id: 'quiz', title: 'Тест' }]} currentStep={progress.step} unlocked={progress.unlocked} completedStep={progress.testDone ? 2 : undefined} showStepNumbers={showStepNumbers} allowNavigation={allowSectionNavigation} onNavigate={step => dispatch({ type: 'visit', step })} />
    <div key={progress.step} className={styles.stage}>
      {progress.step === 0 && theory}
      {progress.step === 1 && <MediumPractice />}
      {progress.step === 2 && (progress.testDone ? <Celebration score={score} total={lightQuestions.length} /> : <section className={styles.quiz} aria-label="Тест">
        <QuestionProgress className={styles.questionProgress} statuses={questionStatuses} currentIndex={questionIndex} allowNavigation={allowQuestionNavigation} onNavigate={navigateQuestion} />
        {lightQuestions.map((testQuestion, index) => <div key={testQuestion.id} hidden={index !== questionIndex}>
          <QuestionAttempt question={testQuestion} showErrors showCorrectAnswers showExplanation onCheck={event => {
            const status = event.result.status === 'correct' ? 'correct' : event.result.status === 'incorrect' ? 'incorrect' : undefined;
            if (!status) return;
            const nextStatuses = questionStatuses.map((currentStatus, currentIndex) => currentIndex === index ? status : currentIndex === index + 1 && currentStatus === 'deferred' ? 'unanswered' : currentStatus);
            setQuestionStatuses(nextStatuses);
            setScore(nextStatuses.filter(currentStatus => currentStatus === 'correct').length);
          }} actionSlots={{ center: context => context.hasChecked ? <button className={styles.primary} onClick={() => nextQuestion(index)}>{index + 1 === lightQuestions.length ? 'Завершити урок' : `Наступне питання ${rtl ? '←' : '→'}`}</button> : context.children }} />
        </div>)}
        <label className={styles.sound}><input type="checkbox" checked={sound} onChange={(event) => setSound(event.target.checked)} /> Звук завершення</label>
      </section>)}
    </div>
  </div>;
}
