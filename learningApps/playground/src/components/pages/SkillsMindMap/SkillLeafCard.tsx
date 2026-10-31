import Link from 'next/link';
import type { SkillNode } from './skillsMindMap.utils';
import { mockSkillMastery, skillLearningHref } from './skillsMindMap.utils';
import styles from './SkillsMindMap.module.css';

interface SkillMasteryProps {
  skillId: string;
  compact?: boolean;
}

export function SkillMastery({ skillId, compact = false }: SkillMasteryProps) {
  const value = mockSkillMastery(skillId);
  const tier = value < 35 ? 'starting' : value < 70 ? 'growing' : 'strong';
  return (
    <div className={styles.mastery} data-tier={tier} data-testid={'mastery-' + skillId}>
      <div className={styles.masteryHeading}>
        <span>Володіння навичкою</span>
        <strong>{value}%</strong>
      </div>
      <div
        className={styles.masteryTrack}
        role="progressbar"
        aria-label="Демонстраційний рівень володіння навичкою"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={value + ' зі 100 відсотків. Тестові дані'}
        data-compact={compact ? 'true' : 'false'}
      >
        <span className={styles.masteryFill} style={{ width: value + '%' }} />
      </div>
    </div>
  );
}

interface SkillActionProps {
  skillId: string;
  language: string;
  compact?: boolean;
}

export function SkillAction({ skillId, language, compact = false }: SkillActionProps) {
  return (
    <Link className={styles.pumpLink + (compact ? ' ' + styles.compactPump : '')}
      href={skillLearningHref(skillId, language)}
      aria-label="Прокачати навичку: перейти до уроків і програм">
      Прокачати <span aria-hidden="true">↗</span>
    </Link>
  );
}

interface SkillLeafCardProps {
  node: SkillNode;
  language: string;
  selected: boolean;
  onSelect: (node: SkillNode) => void;
  left: number;
  top: number;
}

export function SkillLeafCard({ node, language, selected, onSelect, left, top }: SkillLeafCardProps) {
  const direction = language === 'ar' || language === 'he' || language === 'ur' ? 'rtl' : 'ltr';
  return (
    <article className={styles.node + ' ' + styles.skillNode +
      (selected ? ' ' + styles.selectedNode : '')}
      style={{ left, top }}
      data-testid={'skill-node-' + node.slug}
      aria-label={'Скіл: ' + node.name}>
      <div className={styles.skillCardBody}>
        <span className={styles.nodeKind}>СКІЛ</span>
        <button type="button" className={styles.skillTitleButton}
          onClick={() => onSelect(node)}
          aria-label={'Інформація про скіл: ' + node.name}
          aria-pressed={selected}>
          <span className={styles.nodeName} lang={language} dir={direction}>{node.name}</span>
        </button>
        {node.description && (
          <p className={styles.nodeDescription} lang={language} dir={direction}>{node.description}</p>
        )}
      </div>
      <SkillMastery skillId={node.id} />
      <div className={styles.skillCardFooter}>
        <SkillAction skillId={node.id} language={language} />
      </div>
    </article>
  );
}
