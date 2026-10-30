import type { Collection } from '../misc.types';
import type { SkillDescription_Config } from './skill.types';
import type { LanguageCode } from '../languages';
import type { Skill } from './skill.types';

export interface SkillGroup_Config {
  id: Skill['id'];
  name: Readonly<Record<LanguageCode, string>>;
  /** Canonical English methodological text and optional complete frontend translations. */
  description?: SkillDescription_Config;
  skillIds: Readonly<Record<string, Skill['id']>>;
}

/** fileLocation is added by a build-time source registry. */
export interface SkillGroup extends SkillGroup_Config {
  readonly collection: Extract<Collection, 'skillGroup'>;
  fileLocation: string;
}
