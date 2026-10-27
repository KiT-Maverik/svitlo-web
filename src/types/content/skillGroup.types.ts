import type { Locale } from '../languages';
import type { Skill } from './skill.types';

export interface SkillGroup_Config {
  id: Skill['id'];
  name: Readonly<Record<Locale, string>>;
  skillIds: Readonly<Record<string, Skill['id']>>;
}

/** fileLocation is added by a build-time source registry. */
export interface SkillGroup extends SkillGroup_Config {
  fileLocation: string;
}
