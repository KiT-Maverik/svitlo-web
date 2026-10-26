'use client';

import { useState, type CSSProperties } from 'react';
import { LIGHT_SPEED_KM_S, media } from '@/content/how-light-moves/sections/practice/mediumData';
import styles from './Lesson.module.css';
import { aria } from './MediumPractice.constants';
import { locale } from './locales/uk-UA';

export default function MediumPractice() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(true);
  const medium = media[selected];
  return <section className={styles.practice} aria-labelledby="practice-title">
    <p className={styles.eyebrow}>{locale.mediumPractice.eyebrow}</p>
    <h1 id="practice-title">{locale.mediumPractice.title}</h1>
    <p>{locale.mediumPractice.description}</p>
    <div className={styles.media} role="group" aria-label={aria.mediaGroup}>
      {media.map((item, index) => <button key={item.id} aria-pressed={index === selected} onClick={() => setSelected(index)}>{item.title}</button>)}
    </div>
    <div className={styles.experiment} style={{ '--travel-time': `${2 * medium.index}s` } as CSSProperties}>
      <div className={styles.readout} aria-live="polite"><strong>{medium.title}</strong><span>≈ {Math.round(LIGHT_SPEED_KM_S / medium.index).toLocaleString('uk-UA')} км/с</span></div>
      <div className={styles.track} role="img" aria-label={`${locale.mediumPractice.trackPrefix}${medium.title}.`}>
        <div className={styles.source} /><div className={styles.beam} />
        <div className={styles.travel}><span className={styles.pulse} style={{ animationPlayState: paused ? 'paused' : 'running' }} /></div><div className={styles.screen} />
      </div>
      <div className={styles.trackLabels}><span>{locale.mediumPractice.source}</span><span>{locale.mediumPractice.screen}</span></div>
      <button className={styles.play} onClick={() => setPaused((value) => !value)}>{paused ? locale.mediumPractice.play : locale.mediumPractice.pause}</button>
    </div>
    <blockquote className={styles.quote}>{locale.mediumPractice.quote}</blockquote>
    <p className={styles.caption}>{locale.mediumPractice.caption}</p>
    <p className={styles.caption}>{locale.mediumPractice.model} <a href="https://openstax.org/books/university-physics-volume-3/pages/1-1-the-propagation-of-light" target="_blank" rel="noreferrer">{locale.mediumPractice.sourceLink}</a>.</p>
  </section>;
}
