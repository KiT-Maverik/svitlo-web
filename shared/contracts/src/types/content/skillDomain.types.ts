import type { Collection } from '../misc.types';
import type { LanguageCode } from '../languages';
import type { SkillGroup } from './skillGroup.types';
import type { Skill } from './skill.types';

export interface SkillDomain_Config {
  id: SkillGroup['id'];
  name: Readonly<Record<LanguageCode, string>>;
  /** Full localized subject meaning; optional only for legacy migration. */
  description?: Readonly<Record<LanguageCode, string>>;
  /** Child Groups in grouped mode; use {} when Skills are attached directly. */
  groupIds: Readonly<Record<string, SkillGroup['id']>>;
  /**
   * Direct child Skills for a Domain without meaningful Groups.
   * The builder requires exactly one non-empty mode: groupIds or skillIds.
   */
  skillIds?: Readonly<Record<string, Skill['id']>>;
}

/** fileLocation is added by a build-time source registry. */
export interface SkillDomain extends SkillDomain_Config {
  readonly collection: Extract<Collection, 'skillDomain'>;
  fileLocation: string;
}
