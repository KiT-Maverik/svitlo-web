'use client';

import { forwardRef, type ReactElement, type ReactNode } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Chip, { type ChipProps } from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import FlagOutlined from '@mui/icons-material/FlagOutlined';
import LabelOutlined from '@mui/icons-material/LabelOutlined';
import MoreVert from '@mui/icons-material/MoreVert';
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined';
import { QuestionActions } from '@/components/widgets/questions/helpers';
import styles from './Lesson.module.css';

export interface FlashcardLabel {
  label: ReactNode;
  icon?: ReactElement;
  color?: ChipProps['color'];
}

export interface FlashcardProps {
  question: ReactNode;
  answer: ReactNode;
  labels?: readonly FlashcardLabel[];
  revealed?: boolean;
  disabled?: boolean;
  onReveal?: () => void;
  onRate?: (remembered: boolean) => void;
  onReport?: () => void;
  onAddLabel?: () => void;
}

export const Flashcard = forwardRef<HTMLButtonElement, FlashcardProps>(function Flashcard({ question, answer, labels = [], revealed = false, disabled = false, onReveal, onRate, onReport, onAddLabel }, ref) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const closeMenu = () => setMenuAnchor(null);
  return <section className={styles.flashStage} aria-label="Флешкартка">
    <div className={styles.cardArea}>
      <Paper component="article" className={styles.flashCard} elevation={0}>
        <div className={styles.flashHeader}>
          <h1 className={styles.flashQuestion}>{question}</h1>
          <IconButton className={styles.flashMenuButton} size="small" type="button" aria-label="Дії картки" aria-controls={menuAnchor ? 'flashcard-menu' : undefined} aria-haspopup="menu" aria-expanded={Boolean(menuAnchor)} disabled={disabled} onClick={event => setMenuAnchor(event.currentTarget)}><MoreVert /></IconButton>
        </div>
        {labels.length > 0 && <div className={styles.flashLabels}>{labels.map((item, index) => <Chip key={index} icon={item.icon} label={item.label} color={item.color} size="small" variant="outlined" />)}</div>}
        <Divider className={styles.flashDivider} />
        <button ref={ref} className={styles.flashReveal} type="button" disabled={disabled || revealed} onClick={onReveal} aria-expanded={revealed} aria-label="Показати відповідь">
          {revealed ? <p className={styles.answer}>{answer}</p> : <Fade in timeout={180}><span className={styles.flashHintIcon}><LockOpenOutlined aria-hidden="true" /></span></Fade>}
        </button>
        {revealed && onRate && <>
          <Divider className={styles.flashControlsDivider} />
          <div className={styles.flashControls}>
            <QuestionActions
              left={<Button variant="outlined" disabled={disabled} onClick={() => onRate(false)}>Не пам’ятаю</Button>}
              right={<Button variant="outlined" disabled={disabled} onClick={() => onRate(true)}>Пам’ятаю</Button>}
            />
          </div>
        </>}
        <Menu id="flashcard-menu" anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={closeMenu} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <MenuItem onClick={() => { onReport?.(); closeMenu(); }}><ListItemIcon><FlagOutlined fontSize="small" /></ListItemIcon>Повідомити про проблему</MenuItem>
          <MenuItem onClick={() => { onAddLabel?.(); closeMenu(); }}><ListItemIcon><LabelOutlined fontSize="small" /></ListItemIcon>Додати мітку</MenuItem>
        </Menu>
      </Paper>
    </div>
  </section>;
});
