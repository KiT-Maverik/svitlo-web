import type { Collection } from '../misc.types';
import type { LanguageCode } from '../languages';
import type { Skill } from './skill.types';

export interface SkillGroup_Config {
  id: Skill['id'];
  name: Readonly<Record<LanguageCode, string>>;
  /** Full localized subject meaning; optional only for legacy migration. */
  description?: Readonly<Record<LanguageCode, string>>;
  skillIds: Readonly<Record<string, Skill['id']>>;
}

/** fileLocation is added by a build-time source registry. */
export interface SkillGroup extends SkillGroup_Config {
  readonly collection: Extract<Collection, 'skillGroup'>;
  fileLocation: string;
}
