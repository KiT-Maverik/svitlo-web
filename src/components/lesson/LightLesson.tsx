'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { lightLesson } from '@/content/lightLesson';
import { useLessonProgress } from './LessonProgress';
import MediumPractice from './MediumPractice';
import Celebration, { playCelebration } from './Celebration';
import styles from './Lesson.module.css';

export default function LightLesson({ theory }: { theory: ReactNode }) {
  const { progress, dispatch } = useLessonProgress();
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [remembered, setRemembered] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(true);
  const cardRef = useRef<HTMLButtonElement>(null);
  const quizRef = useRef<HTMLHeadingElement>(null);
  const card = lightLesson.concepts[cardIndex];
  const question = lightLesson.concepts[questionIndex];
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
  function nextQuestion() {
    if (choice === null) return;
    const result = score + Number(choice === question.correct);
    setScore(result);
    if (questionIndex + 1 === lightLesson.concepts.length) {
      dispatch({ type: 'testDone' });
      if (sound) void playCelebration();
    } else { setQuestionIndex((value) => value + 1); setChoice(null); quizRef.current?.focus(); }
  }
  return <div className={styles.lesson}>
    <nav className={styles.steps} aria-label="Етапи уроку">
      {lightLesson.steps.map((step, index) => <button key={step.id} disabled={index > progress.unlocked} aria-current={index === progress.step ? 'step' : undefined} data-complete={index < progress.unlocked || (index === 3 && progress.testDone)} onClick={() => dispatch({ type: 'visit', step: index })}>
        <span className={styles.segment} /><span>{index + 1}. {step.title}</span>
      </button>)}
    </nav>
    <div key={progress.step} className={styles.stage}>
      {progress.step === 0 && theory}
      {progress.step === 1 && <MediumPractice />}
      {progress.step === 2 && (progress.cardsDone ? <section className={styles.finish} aria-live="polite">
        <span className={styles.badge} aria-hidden="true">✓</span><h1>Вітаємо, ви повторили матеріал!</h1>
        <p>Переглянуто {lightLesson.concepts.length} карток. Пам’ятаю: {remembered}; варто повторити: {lightLesson.concepts.length - remembered}.</p>
        <button className={styles.primary} onClick={() => dispatch({ type: 'next' })}>Далі →</button>
      </section> : <section className={styles.flashStage} aria-label="Повторення з флеш-картками">
        <p className={styles.counter}>Картка {cardIndex + 1} із {lightLesson.concepts.length}</p>
        <div className={styles.cardArea}>
          {revealed && <button className={`${styles.rating} ${styles.forget}`} aria-label="Не пам’ятаю" onClick={() => gradeCard(false)}><span>❮</span><strong>Не пам’ятаю</strong></button>}
          <button ref={cardRef} className={styles.card} onClick={() => setRevealed((value) => !value)} aria-expanded={revealed} aria-label={`${card.question} ${revealed ? 'Приховати відповідь' : 'Показати відповідь'}`}>
            <span className={styles.eyebrow}>ЗГАДАЙ ГОЛОВНЕ</span><h1>{card.question}</h1>
            {revealed ? <p className={styles.answer}>{card.answer}</p> : <p className={styles.hint}>Натисни на картку, щоб відкрити відповідь</p>}
          </button>
          {revealed && <button className={`${styles.rating} ${styles.remember}`} aria-label="Пам’ятаю" onClick={() => gradeCard(true)}><span>❯</span><strong>Пам’ятаю</strong></button>}
        </div>
      </section>)}
      {progress.step === 3 && (progress.testDone ? <Celebration score={score} total={lightLesson.concepts.length} /> : <section className={styles.quiz} aria-labelledby="quiz-question">
        <p className={styles.eyebrow}>ПЕРЕВІР СЕБЕ · {questionIndex + 1} / {lightLesson.concepts.length}</p>
        <h1 id="quiz-question" ref={quizRef} tabIndex={-1}>{question.question}</h1>
        <div className={styles.choices} role="group" aria-label="Варіанти відповіді">
          {question.choices.map((text, index) => <button key={`${question.id}-${index}`} disabled={choice !== null} data-selected={choice === index} data-correct={choice !== null && question.correct === index} onClick={() => setChoice(index)}>{text}</button>)}
        </div>
        {choice !== null && <div className={styles.feedback} role="status"><strong>{choice === question.correct ? 'Правильно!' : 'Цього разу не зовсім.'}</strong><p>{question.answer}</p></div>}
        <label className={styles.sound}><input type="checkbox" checked={sound} onChange={(event) => setSound(event.target.checked)} /> Звук завершення</label>
        <button className={styles.primary} disabled={choice === null} onClick={nextQuestion}>{questionIndex + 1 === lightLesson.concepts.length ? 'Завершити урок' : 'Наступне питання →'}</button>
      </section>)}
    </div>
  </div>;
}
