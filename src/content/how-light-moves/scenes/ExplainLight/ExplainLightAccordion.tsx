'use client';

import { useId, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import type { TextDirection } from '@types';
import type { ExplainLightLocale, ExplainLightLocaleCode } from './explainLight.locale';
import styles from './ExplainLight.module.css';

export default function ExplainLightAccordion({ locale, direction, items }: {
  locale: ExplainLightLocaleCode;
  direction: TextDirection;
  items: ExplainLightLocale['items'];
}) {
  const id = useId();
  const [expanded, setExpanded] = useState<number | null>(null);

  return <div className={styles.scene} lang={locale} dir={direction}>
    {items.map(({ question, answer }, index) => <Accordion
      key={index}
      className={styles.item}
      expanded={expanded === index}
      onChange={(_, open) => setExpanded(open ? index : null)}
    >
      <AccordionSummary
        className={styles.summary}
        expandIcon={<ExpandMoreRounded />}
        id={`${id}-question-${index}`}
        aria-controls={`${id}-answer-${index}`}
      >
        <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.question}>{question}</span>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <p className={styles.answer}>{answer}</p>
      </AccordionDetails>
    </Accordion>)}
  </div>;
}
