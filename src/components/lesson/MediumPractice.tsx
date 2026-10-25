'use client';

import { useState, type CSSProperties } from 'react';
import { LIGHT_SPEED_KM_S, media } from '@/content/how-light-moves/lightLesson';
import styles from './Lesson.module.css';

export default function MediumPractice() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(true);
  const medium = media[selected];
  return <section className={styles.practice} aria-labelledby="practice-title">
    <p className={styles.eyebrow}>ДОСЛІДЖУЙ · ПОРІВНЮЙ · ПОМІЧАЙ</p>
    <h1 id="practice-title">Одне світло. Різні середовища.</h1>
    <p>Перемикай середовища й порівнюй час проходження однакової відстані. Точка рухається між джерелом та екраном у режимі повтору.</p>
    <div className={styles.media} role="group" aria-label="Середовище поширення світла">
      {media.map((item, index) => <button key={item.id} aria-pressed={index === selected} onClick={() => setSelected(index)}>{item.title}</button>)}
    </div>
    <div className={styles.experiment} style={{ '--travel-time': `${2 * medium.index}s` } as CSSProperties}>
      <div className={styles.readout} aria-live="polite"><strong>{medium.title}</strong><span>≈ {Math.round(LIGHT_SPEED_KM_S / medium.index).toLocaleString('uk-UA')} км/с</span></div>
      <div className={styles.track} role="img" aria-label={`Модель поширення світла: ${medium.title}.`}>
        <div className={styles.source} /><div className={styles.beam} />
        <div className={styles.travel}><span className={styles.pulse} style={{ animationPlayState: paused ? 'paused' : 'running' }} /></div><div className={styles.screen} />
      </div>
      <div className={styles.trackLabels}><span>Джерело</span><span>Екран</span></div>
      <button className={styles.play} onClick={() => setPaused((value) => !value)}>{paused ? 'Відтворити' : 'Пауза'}</button>
    </div>
    <blockquote className={styles.quote}>«Швидкість світла залежить від середовища: у воді світло поширюється повільніше, ніж у вакуумі».</blockquote>
    <p className={styles.caption}>Анімацію сильно сповільнено; співвідношення швидкостей збережено. Повітря й вакуум майже не відрізняються візуально. Повернення точки — повтор моделі, а не пояснення відбиття. Значення приблизні для видимого світла й залежать від умов.</p>
    <p className={styles.caption}>Модель: v = c / n. <a href="https://openstax.org/books/university-physics-volume-3/pages/1-1-the-propagation-of-light" target="_blank" rel="noreferrer">Джерело значень показника заломлення — OpenStax</a>.</p>
  </section>;
}
