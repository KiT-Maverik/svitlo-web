'use client';

import { useState, type CSSProperties } from 'react';
import { LIGHT_SPEED_KM_S, media } from './MediumPractice.constants';
import styles from './MediumPractice.module.css';
import { getLocaleDirection } from '@types';
import { useSceneLocales } from '@/components/pages/Lesson/SceneLocaleContext';
import type { MediumPractice_Locale } from './MediumPractice.locale';

export function MediumPractice() {
  const { locale, scenes } = useSceneLocales<{ practice: MediumPractice_Locale }>();
  const messages = scenes.practice;
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(true);
  const medium = media[selected];
  return <section className={styles.practice} lang={locale} dir={getLocaleDirection(locale)} aria-labelledby="practice-title">
    <p className={styles.eyebrow}>{messages.eyebrow}</p>
    <h1 id="practice-title">{messages.title}</h1>
    <p>{messages.description}</p>
    <div className={styles.media} role="group" aria-label={messages.mediaGroup}>
      {media.map((item, index) => <button key={item.id} aria-pressed={index === selected} onClick={() => setSelected(index)}>{messages.media[item.key]}</button>)}
    </div>
    <div className={styles.experiment} style={{ '--travel-time': `${2 * medium.index}s` } as CSSProperties}>
      <div className={styles.readout} aria-live="polite"><strong>{messages.media[medium.key]}</strong><span>≈ {Math.round(LIGHT_SPEED_KM_S / medium.index).toLocaleString(locale)} {messages.speedUnit}</span></div>
      <div className={styles.track} role="img" aria-label={`${messages.trackPrefix}${messages.media[medium.key]}.`}>
        <div className={styles.source} /><div className={styles.beam} />
        <div className={styles.travel}><span className={styles.pulse} style={{ animationPlayState: paused ? 'paused' : 'running' }} /></div><div className={styles.screen} />
      </div>
      <div className={styles.trackLabels}><span>{messages.source}</span><span>{messages.screen}</span></div>
      <button className={styles.play} onClick={() => setPaused((value) => !value)}>{paused ? messages.play : messages.pause}</button>
    </div>
    <blockquote className={styles.quote}>{messages.quote}</blockquote>
    <p className={styles.caption}>{messages.caption}</p>
    <p className={styles.caption}>{messages.model} <a href="https://openstax.org/books/university-physics-volume-3/pages/1-1-the-propagation-of-light" target="_blank" rel="noreferrer">{messages.sourceLink}</a>.</p>
  </section>;
}
