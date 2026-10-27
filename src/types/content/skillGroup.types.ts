import type { Locale } from '../languages';
import type { Skill } from './skill.types';

export interface SkillGroup_Config {
  id: string;
  name: Readonly<Record<Locale, string>>;
  skillIds: readonly Skill['id'][];
}

/** fileLocation is added by a build-time source registry. */
export interface SkillGroup extends SkillGroup_Config {
  fileLocation: string;
}
