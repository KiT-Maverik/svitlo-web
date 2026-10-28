'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Lesson, Quiz, QuizQuestionState, QuizResult, QuizState } from '@svitlo/engine/content';
import type { SelectOneAnswerQuestion } from '@/components/widgets/questions/types';
import { completeQuiz, createQuizState, getQuizState, listQuizStates, saveQuizState } from '@/db';
import { useLessonProgress } from '../LessonProgress/LessonProgress';
import Celebration, { playCelebration } from '../Celebration/Celebration';
import { QuestionAttempt } from '@/components/widgets/questions/helpers';
import { QuestionProgress, type QuestionStatus } from '../QuestionProgress/QuestionProgress';
import { LessonSteps } from '../LessonSteps/LessonSteps';
import styles from '../Lesson.module.css';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { getLocaleDirection } from '@svitlo/engine/localization';
import { getLessonMessages } from '../locales';
import { aria } from './LessonClient.constants';

export default function LessonClient({
  lesson,
  quiz,
  sectionContent,
  questions = [],
}: {
  lesson: Lesson;
  quiz?: Quiz;
  sectionContent: ReactNode[];
  questions?: SelectOneAnswerQuestion[];
}) {
  const { locale } = useLocale();
  const messages = getLessonMessages(locale);
  const rtl = getLocaleDirection(locale) === 'rtl';
  const { progress, dispatch } = useLessonProgress();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const quizStateRef = useRef<QuizState | null>(null);
  const loadPromise = useRef<Promise<QuizState> | null>(null);
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve());
  const finishing = useRef(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [sound, setSound] = useState(true);
  const quizIndex = lesson.sections.content.findIndex(section => 'sectionId' in section && section.id === quiz?.id);

  useEffect(() => {
    if (!progress.ready || !quiz) return;
    let active = true;
    loadPromise.current ??= (async () => {
      const saved = progress.quizStateId ? await getQuizState(progress.quizStateId) : undefined;
      return (
        saved ??
        [...(await listQuizStates(quiz.id))].reverse().find(item => item.status !== 'finished') ??
        (await createQuizState(quiz.id))
      );
    })();
    void loadPromise.current
      .then(state => {
        if (!active) return;
        quizStateRef.current = state;
        setQuizState(state);
        dispatch({ type: 'linkQuiz', id: state.id });
        if (state.status === 'finished') dispatch({ type: 'testDone' });
        if (state.status !== 'new') {
          const firstUnanswered = questions.findIndex(question => state.answers[question.id]?.status !== 'submitted');
          setQuestionIndex(firstUnanswered < 0 ? questions.length - 1 : firstUnanswered);
        }
      })
      .catch(() => {
        if (!active) return;
        const state: QuizState = { id: crypto.randomUUID(), quizId: quiz.id, status: 'new' };
        quizStateRef.current = state;
        setQuizState(state);
      });
    return () => {
      active = false;
    };
  }, [dispatch, progress.ready, progress.quizStateId, questions, quiz]);

  useEffect(() => {
    document.getElementById('learning-content')?.scrollTo({ top: 0 });
  }, [progress.step]);

  function updateQuestion(
    questionId: string,
    update: (answers: Record<string, QuizQuestionState>) => Record<string, QuizQuestionState>,
  ) {
    const current = quizStateRef.current;
    if (!current || current.status === 'finished') return;
    const next: QuizState = {
      id: current.id,
      quizId: current.quizId,
      status: 'in-progress',
      startedAt: current.status === 'new' ? new Date().toISOString() : current.startedAt,
      answers: update(current.status === 'new' ? {} : current.answers),
    };
    quizStateRef.current = next;
    setQuizState(next);
    saveQueue.current = saveQueue.current.then(() => saveQuizState(next)).catch(() => undefined);
  }

  function setAnswer(questionId: string, value: string | null, status: 'draft' | 'submitted', correct?: boolean) {
    if (!quiz) return;
    updateQuestion(questionId, answers => {
      const next = { ...answers };
      if (!value) delete next[questionId];
      else if (status === 'submitted')
        next[questionId] = {
          status,
          answer: { type: 'select-one-answer', value },
          result: {
            status: correct ? 'correct' : 'incorrect',
            earnedWeight: correct ? (quiz.questionBank.find(question => question.id === questionId)?.weight ?? 0) : 0,
          },
        };
      else next[questionId] = { status, answer: { type: 'select-one-answer', value } };
      return next;
    });
  }

  function finishQuiz() {
    if (!quiz) return;
    const current = quizStateRef.current;
    if (!current || current.status !== 'in-progress' || finishing.current) return;
    finishing.current = true;
    setIsFinishing(true);
    setSaveError(false);
    const earned = quiz.questionBank.reduce(
      (total, question) => total + (current.answers[question.id]?.result?.earnedWeight ?? 0),
      0,
    );
    const maximum = quiz.questionBank.reduce((total, question) => total + question.weight, 0);
    const value = quiz.grading?.mode === 'points' ? earned : maximum ? (earned / maximum) * 100 : 0;
    const result: QuizResult = quiz.grading
      ? { status: 'graded', success: value >= quiz.grading.successThreshold, value }
      : { status: 'ungraded' };
    void saveQueue.current
      .then(async () => {
        await saveQuizState(current);
        return completeQuiz(current.id, result);
      })
      .then(saved => {
        if (!saved || saved.status !== 'finished') throw new Error('Quiz completion was not saved');
        quizStateRef.current = saved;
        setQuizState(saved);
        dispatch({ type: 'testDone' });
        if (sound) void playCelebration();
      })
      .catch(() => {
        setSaveError(true);
      })
      .finally(() => {
        finishing.current = false;
        setIsFinishing(false);
      });
  }

  function nextQuestion(index: number) {
    if (index + 1 === questions.length) finishQuiz();
    else setQuestionIndex(index + 1);
  }

  const answers = quizState?.status === 'new' ? {} : (quizState?.answers ?? {});
  const questionStatuses: QuestionStatus[] = questions.map((question, index) => {
    const entry = answers[question.id];
    return (
      entry?.result?.status ??
      (entry?.status === 'deferred'
        ? 'deferred'
        : index === questionIndex || entry?.status === 'draft'
          ? 'unanswered'
          : 'deferred')
    );
  });
  const score = questionStatuses.filter(status => status === 'correct').length;
  const steps = lesson.sections.content.map(section => ({
    id: 'sectionId' in section ? section.sectionId : section.id,
    title: section.name.value,
  }));

  if (!progress.ready || (progress.step === quizIndex && !quizState)) return <div className={styles.lesson} />;

  return (
    <div className={styles.lesson}>
      <LessonSteps
        steps={steps}
        currentStep={progress.step}
        unlocked={progress.unlocked}
        completedStep={progress.testDone ? progress.lastStep : undefined}
        showStepNumbers={lesson.sections.showIndexes}
        allowNavigation={lesson.sections.allowNavigation}
        onNavigate={step => dispatch({ type: 'visit', step })}
      />
      <div key={progress.step} className={styles.stage}>
        {progress.step !== quizIndex && sectionContent[progress.step]}
        {progress.step === quizIndex &&
          quiz &&
          (progress.testDone ? (
            <Celebration score={score} total={questions.length} />
          ) : progress.skipped.includes(quiz.sectionId) ? (
            <section className={styles.quiz} aria-label={aria.quiz}>
              <p>{messages.quiz.skipped}</p>
              <button className={styles.primary} onClick={() => dispatch({ type: 'resumeQuiz' })}>
                {messages.quiz.resumeQuiz}
              </button>
            </section>
          ) : (
            <section className={styles.quiz} aria-label={aria.quiz}>
              <QuestionProgress
                className={styles.questionProgress}
                statuses={questionStatuses}
                currentIndex={questionIndex}
                allowNavigation={quiz.interaction.allowQuestionNavigation}
                onNavigate={index => setQuestionIndex(index)}
              />
              {questions.map((question, index) => {
                const entry = answers[question.id];
                const initialAnswer = entry?.answer?.type === 'select-one-answer' ? entry.answer.value : undefined;
                const initialResult =
                  entry?.status === 'submitted' && entry.result
                    ? ({ status: entry.result.status } as const)
                    : undefined;
                return (
                  <div key={question.id} hidden={index !== questionIndex}>
                    <QuestionAttempt
                      question={question}
                      initialAnswer={initialAnswer}
                      initialResult={initialResult}
                      showErrors={quiz.interaction.showErrors}
                      showCorrectAnswers={quiz.interaction.showCorrectAnswers}
                      showExplanation={quiz.interaction.allowExplanations}
                      onChange={event => setAnswer(question.id, event.answer, 'draft')}
                      onCheck={event => {
                        if (event.result.status === 'correct' || event.result.status === 'incorrect')
                          setAnswer(question.id, event.answer, 'submitted', event.result.status === 'correct');
                      }}
                      onRetry={event => setAnswer(question.id, event.answer, 'draft')}
                      onReset={() => setAnswer(question.id, null, 'draft')}
                      actionSlots={{
                        center: context =>
                          context.hasChecked ? (
                            <button
                              className={styles.primary}
                              disabled={isFinishing}
                              onClick={() => nextQuestion(index)}
                            >
                              {index + 1 === questions.length
                                ? messages.quiz.finish
                                : `${messages.quiz.nextQuestion} ${rtl ? '←' : '→'}`}
                            </button>
                          ) : (
                            context.children
                          ),
                      }}
                    />
                  </div>
                );
              })}
              {saveError && <p role="alert">{messages.quiz.saveError}</p>}
              <label className={styles.sound}>
                <input type="checkbox" checked={sound} onChange={event => setSound(event.target.checked)} />{' '}
                {messages.quiz.sound}
              </label>
            </section>
          ))}
      </div>
    </div>
  );
}
