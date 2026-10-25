'use client';

import { useState, useSyncExternalStore } from 'react';
import { Box, Button, Paper, Slider, Typography } from '@mui/material';
import locale from './ray.locale';
import styles from './Ray.module.css';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(callback: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

function getReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

export default function Ray() {
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotion, () => false);
  const [playbackOverride, setPlaybackOverride] = useState<boolean | null>(null);
  const [speed, setSpeed] = useState(1);
  const paused = playbackOverride ?? reducedMotion;

  return (
    <Paper component="section" variant="outlined" className={styles.scene} aria-label={locale.scene.accessibleName}>
      <Typography component="h3" variant="h6">{locale.scene.title}</Typography>
      <Typography component="div" className={styles.description}>{locale.scene.description}</Typography>

      <Box role="img" aria-label={locale.track.accessibleDescription} className={styles.track}>
        <Box className={styles.line} />
        <Box className={styles.source} />
        <Box className={styles.path}>
          <Box className={styles.pulse} style={{ animationDuration: `${3 / speed}s`, animationPlayState: paused ? 'paused' : 'running' }} />
        </Box>
        <Box className={styles.screen} />
      </Box>

      <Box className={styles.labels}>
        <Typography variant="caption">{locale.track.source}</Typography>
        <Typography variant="caption">{locale.track.screen}</Typography>
      </Box>

      <Box className={styles.controls}>
        <Button variant="contained" type="button" onClick={() => setPlaybackOverride(!paused)} aria-pressed={paused}>
          {paused ? locale.controls.play : locale.controls.pause}
        </Button>
        <Box className={styles.speedControls}>
          <Typography component="span" variant="body2">{locale.controls.speed}</Typography>
          <Slider className={styles.slider} aria-label={locale.controls.speedAccessibleName} min={0.5} max={2} step={0.5} value={speed} onChange={(_, value) => {
            if (typeof value === 'number') setSpeed(value);
          }} />
          <Typography component="output" variant="body2" className={styles.speedValue}>{speed}{locale.controls.speedUnit}</Typography>
        </Box>
      </Box>
      <Typography component="div" variant="caption" className={styles.note}>
        {locale.hints.scale}
      </Typography>
    </Paper>
  );
}
